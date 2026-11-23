import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class WelcomeMessageApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /v1/whatsapp/welcomeMessage/create */
  create(request: M.WhatsappWelcomeMessageCreateRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/v1/whatsapp/welcomeMessage/create', {}, request, options);
  }

  /** GET /v1/whatsapp/welcomeMessage/list */
  list(wabaId: string | null, sequenceId: string | null, limit: M.Int64 | null, after: string | null, options?: RequestOptions): Promise<M.WhatsappWelcomeMessageListResult | null> {
    return this.http.request<M.WhatsappWelcomeMessageListResult>('GET', '/v1/whatsapp/welcomeMessage/list', {wabaId: wabaId, sequenceId: sequenceId, limit: limit, after: after}, undefined, options);
  }

  /** POST /v1/whatsapp/welcomeMessage/update */
  update(request: M.WhatsappWelcomeMessageUpdateRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/welcomeMessage/update', {}, request, options);
  }

  /** POST /v1/whatsapp/welcomeMessage/delete */
  delete(request: M.WhatsappWelcomeMessageDeleteRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/welcomeMessage/delete', {}, request, options);
  }
}
