import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class MessageApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /open/whatsapp/message/send/block */
  sendBlock(request: M.SendBlockMessageRequest | null, options?: RequestOptions): Promise<M.EventTaskIdResult | null> {
    return this.http.request<M.EventTaskIdResult>('POST', '/open/whatsapp/message/send/block', {}, request, options);
  }

  /** POST /open/whatsapp/message/send */
  send(request: M.SendMessageRequest | null, options?: RequestOptions): Promise<M.MessageIdResult | null> {
    const body = request?.param ? { ...request, param: { messaging_product: 'whatsapp', ...request.param } } : request;
    return this.http.request<M.MessageIdResult>('POST', '/open/whatsapp/message/send', {}, body, options);
  }

  /** POST /open/whatsapp/file/upload/url */
  upload(request: M.MediaFileUploadRequest | null, options?: RequestOptions): Promise<M.MediaIdResult | null> {
    return this.http.request<M.MediaIdResult>('POST', '/open/whatsapp/file/upload/url', {}, request, options);
  }

  /** POST /open/whatsapp/file/download */
  download(request: M.MediaFileDownloadRequest | null, options?: RequestOptions): Promise<M.DownloadUrlResult | null> {
    return this.http.request<M.DownloadUrlResult>('POST', '/open/whatsapp/file/download', {}, request, options);
  }

  /** POST /open/whatsapp/message/origin/batchQuery */
  batchQueryOrigin(request: M.MessageOriginBatchQueryRequest | null, options?: RequestOptions): Promise<M.MessageOriginBatchQueryResponse | null> {
    return this.http.request<M.MessageOriginBatchQueryResponse>('POST', '/open/whatsapp/message/origin/batchQuery', {}, request, options);
  }

  /** POST /v1/whatsapp/file/delete */
  deleteMedia(request: M.WhatsappMediaDeleteRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/file/delete', {}, request, options);
  }
}
