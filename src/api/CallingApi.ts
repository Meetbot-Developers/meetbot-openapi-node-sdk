import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class CallingApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /v1/whatsapp/calls/connect */
  connect(request: M.WhatsappCallingConnectRequest | null, options?: RequestOptions): Promise<M.WhatsappCallingResult | null> {
    return this.http.request<M.WhatsappCallingResult>('POST', '/v1/whatsapp/calls/connect', {}, request, options);
  }

  /** POST /v1/whatsapp/calls/preAccept */
  preAccept(request: M.WhatsappCallingPreAcceptRequest | null, options?: RequestOptions): Promise<M.WhatsappCallingResult | null> {
    return this.http.request<M.WhatsappCallingResult>('POST', '/v1/whatsapp/calls/preAccept', {}, request, options);
  }

  /** POST /v1/whatsapp/calls/accept */
  accept(request: M.WhatsappCallingAcceptRequest | null, options?: RequestOptions): Promise<M.WhatsappCallingResult | null> {
    return this.http.request<M.WhatsappCallingResult>('POST', '/v1/whatsapp/calls/accept', {}, request, options);
  }

  /** POST /v1/whatsapp/calls/reject */
  reject(request: M.WhatsappCallingRejectRequest | null, options?: RequestOptions): Promise<M.WhatsappCallingResult | null> {
    return this.http.request<M.WhatsappCallingResult>('POST', '/v1/whatsapp/calls/reject', {}, request, options);
  }

  /** POST /v1/whatsapp/calls/terminate */
  terminate(request: M.WhatsappCallingTerminateRequest | null, options?: RequestOptions): Promise<M.WhatsappCallingResult | null> {
    return this.http.request<M.WhatsappCallingResult>('POST', '/v1/whatsapp/calls/terminate', {}, request, options);
  }
}
