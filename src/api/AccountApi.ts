import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class AccountApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /open/whatsapp/account/profile */
  getProfile(request: M.WhatAppAccountProfileRequest | null, options?: RequestOptions): Promise<M.WhatsappAccountProfileResult | null> {
    return this.http.request<M.WhatsappAccountProfileResult>('POST', '/open/whatsapp/account/profile', {}, request, options);
  }

  /** POST /open/whatsapp/account/update/profile */
  updateProfile(request: M.WhatsAppAccountProfileUpdateRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    const body = request?.param ? { ...request, param: { messaging_product: 'whatsapp', ...request.param } } : request;
    return this.http.request<M.MetaSuccessResult>('POST', '/open/whatsapp/account/update/profile', {}, body, options);
  }

  /** POST /open/whatsapp/account/phone/numbers */
  listPhoneNumbers(request: M.WhatAppAccountPhoneNumbersRequest | null, options?: RequestOptions): Promise<M.WhatsappPhoneNumbersResult | null> {
    return this.http.request<M.WhatsappPhoneNumbersResult>('POST', '/open/whatsapp/account/phone/numbers', {}, request, options);
  }

  /** POST /open/whatsapp/account/whatsapp/business/info */
  getWhatsappBusinessInfo(request: M.WhatAppAccountBusinessInfoRequest | null, options?: RequestOptions): Promise<M.WhatsappBusinessAccountResult | null> {
    return this.http.request<M.WhatsappBusinessAccountResult>('POST', '/open/whatsapp/account/whatsapp/business/info', {}, request, options);
  }

  /** POST /open/whatsapp/account/business/info */
  getBusinessManagerInfo(request: M.WhatAppAccountBusinessManagerInfoRequest | null, options?: RequestOptions): Promise<M.WhatsappBusinessManagerResult | null> {
    return this.http.request<M.WhatsappBusinessManagerResult>('POST', '/open/whatsapp/account/business/info', {}, request, options);
  }

  /** POST /open/whatsapp/account/phone/verify/send */
  sendPhoneVerify(request: M.WhatsAppAccountPhoneVerifySendRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/open/whatsapp/account/phone/verify/send', {}, request, options);
  }

  /** POST /open/whatsapp/account/phone/verify/check */
  checkPhoneVerify(request: M.WhatsAppAccountPhoneVerifyCheckRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/open/whatsapp/account/phone/verify/check', {}, request, options);
  }

  /** GET /v1/whatsapp/phone/number/quality */
  getPhoneQuality(phoneId: string | null, options?: RequestOptions): Promise<M.WhatsappPhoneQualityQueryResult | null> {
    return this.http.request<M.WhatsappPhoneQualityQueryResult>('GET', '/v1/whatsapp/phone/number/quality', {phoneId: phoneId}, undefined, options);
  }

  /** GET /v1/whatsapp/phone/preVerified */
  listPreverifiedPhones(businessId: string | null, codeVerificationStatus: string | null, limit: M.Int64 | null, after: string | null, options?: RequestOptions): Promise<M.WhatsappPreverifiedPhoneListResult | null> {
    return this.http.request<M.WhatsappPreverifiedPhoneListResult>('GET', '/v1/whatsapp/phone/preVerified', {businessId: businessId, codeVerificationStatus: codeVerificationStatus, limit: limit, after: after}, undefined, options);
  }
}
