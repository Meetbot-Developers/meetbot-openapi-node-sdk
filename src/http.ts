import { request as httpRequest, type Agent as HttpAgent } from 'node:http';
import { request as httpsRequest, type Agent as HttpsAgent } from 'node:https';
import { randomUUID } from 'node:crypto';
import { MeetbotError, MeetbotHttpError, MeetbotApiError } from './errors.js';
import { parseJSON, stringifyJSON } from './json.js';

export interface ClientOptions {
  apiKey: string;
  baseUrl?: string;
  timeoutMs?: number;
  maxResponseBytes?: number;
  maxUploadBytes?: number;
  httpAgent?: HttpAgent;
  httpsAgent?: HttpsAgent;
}
export interface RequestOptions { signal?: AbortSignal; timeoutMs?: number }
export interface Upload { filename: string; content: Uint8Array }

export class HttpTransport {
  #apiKey: string;
  #baseUrl: string;
  #timeoutMs: number;
  #maxResponseBytes: number;
  #maxUploadBytes: number;
  #httpAgent?: HttpAgent;
  #httpsAgent?: HttpsAgent;

  constructor(options: ClientOptions) {
    if (!options.apiKey?.trim() || /[\r\n]/.test(options.apiKey)) throw new TypeError('A valid API key is required');
    const base = new URL(options.baseUrl ?? 'https://openapi.meetbot.com');
    if (!['http:', 'https:'].includes(base.protocol) || base.username || base.password || base.search || base.hash) throw new TypeError('Invalid base URL');
    this.#apiKey = options.apiKey;
    this.#baseUrl = base.href.replace(/\/$/, '');
    this.#timeoutMs = options.timeoutMs ?? 60_000;
    this.#maxResponseBytes = options.maxResponseBytes ?? 64 * 1024 * 1024;
    this.#maxUploadBytes = options.maxUploadBytes ?? 64 * 1024 * 1024;
    for (const value of [this.#timeoutMs, this.#maxResponseBytes, this.#maxUploadBytes]) {
      if (!Number.isSafeInteger(value) || value <= 0) throw new TypeError('Timeout and size limits must be positive integers');
    }
    this.#httpAgent = options.httpAgent;
    this.#httpsAgent = options.httpsAgent;
  }

  request<T>(method: string, path: string, query: Record<string, unknown>, body?: unknown, options?: RequestOptions): Promise<T | null> {
    const data = body === undefined || body === null ? undefined : Buffer.from(stringifyJSON(body));
    return this.execute<T>(method, path, query, data, 'application/json', options);
  }

  upload<T>(path: string, flowId: string, file: Upload, options?: RequestOptions): Promise<T | null> {
    if (!file.filename || /[\r\n]/.test(file.filename)) throw new TypeError('Invalid upload filename');
    if (file.content.byteLength > this.#maxUploadBytes) throw new RangeError('Upload exceeds configured size limit');
    const boundary = `meetbot-${randomUUID()}`;
    const filename = file.filename.replaceAll('\\', '_').replaceAll('"', '_');
    const data = Buffer.concat([
      Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="flowId"\r\n\r\n${flowId}\r\n`),
      Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${filename}"\r\nContent-Type: application/json\r\n\r\n`),
      Buffer.from(file.content), Buffer.from(`\r\n--${boundary}--\r\n`),
    ]);
    return this.execute<T>('POST', path, { flowId }, data, `multipart/form-data; boundary=${boundary}`, options);
  }

  private execute<T>(method: string, path: string, query: Record<string, unknown>, data: Buffer | undefined, contentType: string, options?: RequestOptions): Promise<T | null> {
    const url = new URL(this.#baseUrl + '/' + path.replace(/^\//, ''));
    for (const [key, value] of Object.entries(query)) {
      if (typeof value === 'number' && (!Number.isFinite(value) || (Number.isInteger(value) && !Number.isSafeInteger(value)))) throw new TypeError('Use decimal strings for integer IDs outside Number.MAX_SAFE_INTEGER');
      if (value !== null && value !== undefined) url.searchParams.set(key, String(value));
    }
    const timeout = options?.timeoutMs ?? this.#timeoutMs;
    if (!Number.isSafeInteger(timeout) || timeout <= 0) throw new TypeError('Timeout must be a positive integer');
    const signal = options?.signal ? AbortSignal.any([options.signal, AbortSignal.timeout(timeout)]) : AbortSignal.timeout(timeout);
    return new Promise((resolve, reject) => {
      const headers: Record<string, string> = { APIKEY: this.#apiKey, Accept: 'application/json', 'User-Agent': 'meetbot-openapi-node-sdk/1.0' };
      if (data) { headers['Content-Type'] = contentType; headers['Content-Length'] = String(data.length); }
      const send = url.protocol === 'https:' ? httpsRequest : httpRequest;
      const req = send(url, { method, headers, signal, agent: url.protocol === 'https:' ? this.#httpsAgent : this.#httpAgent }, res => {
        const chunks: Buffer[] = []; let length = 0;
        res.on('data', (chunk: Buffer) => {
          length += chunk.length;
          if (length > this.#maxResponseBytes) { res.destroy(new MeetbotError('Response exceeds configured size limit')); return; }
          chunks.push(chunk);
        });
        res.on('error', reject);
        res.on('end', () => {
          try {
            const raw = Buffer.concat(chunks).toString('utf8');
            const status = res.statusCode ?? 0;
            if (status < 200 || status >= 300) throw new MeetbotHttpError(status, raw, res.headers);
            const decoded = parseJSON(raw);
            if (!decoded || typeof decoded !== 'object' || Array.isArray(decoded)) throw new MeetbotError('Invalid response envelope');
            const envelope = decoded as Record<string, unknown>;
            if (typeof envelope.success !== 'boolean' && typeof envelope.code !== 'number') throw new MeetbotError('Invalid response envelope');
            const successful = envelope.success ?? envelope.code === 0;
            if (successful !== true) throw new MeetbotApiError(typeof envelope.code === 'number' ? envelope.code : undefined, String(envelope.message ?? 'API request failed'), typeof envelope.traceId === 'string' ? envelope.traceId : undefined, raw);
            resolve((envelope.result ?? null) as T | null);
          } catch (error) { reject(error instanceof MeetbotError ? error : new MeetbotError('Invalid response JSON', { cause: error })); }
        });
      });
      req.on('error', error => reject(new MeetbotError('Meetbot request failed', { cause: error })));
      req.end(data);
    });
  }
}
