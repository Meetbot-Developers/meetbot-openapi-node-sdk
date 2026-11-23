import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class FlowApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /v1/flow/create */
  create(request: M.WhatsappFlowCreateRequest | null, options?: RequestOptions): Promise<M.WhatsappFlowMutationResult | null> {
    return this.http.request<M.WhatsappFlowMutationResult>('POST', '/v1/flow/create', {}, request, options);
  }

  /** POST /v1/flow/update */
  update(request: M.WhatsappFlowUpdateRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/flow/update', {}, request, options);
  }

  /** POST /v1/flow/update/json */
  updateJson(flowId: string, file: Upload, options?: RequestOptions): Promise<M.WhatsappFlowMutationResult | null> {
    return this.http.upload<M.WhatsappFlowMutationResult>('/v1/flow/update/json', flowId, file, options);
  }

  /** GET /v1/flow/preview */
  preview(flowId: string | null, options?: RequestOptions): Promise<M.WhatsappFlowPreviewResult | null> {
    return this.http.request<M.WhatsappFlowPreviewResult>('GET', '/v1/flow/preview', {flowId: flowId}, undefined, options);
  }

  /** POST /v1/flow/publish */
  publish(request: M.WhatsappFlowIdRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/flow/publish', {}, request, options);
  }

  /** POST /v1/flow/deprecate */
  deprecate(request: M.WhatsappFlowIdRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/flow/deprecate', {}, request, options);
  }

  /** POST /v1/flow/delete */
  delete(request: M.WhatsappFlowIdRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/flow/delete', {}, request, options);
  }

  /** POST /v1/flow/migrate */
  migrate(request: M.WhatsappFlowMigrateRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/flow/migrate', {}, request, options);
  }

  /** GET /v1/flow/list */
  list(wabaId: string | null, fields: string | null, limit: number | null, after: string | null, options?: RequestOptions): Promise<M.WhatsappFlowListResult | null> {
    return this.http.request<M.WhatsappFlowListResult>('GET', '/v1/flow/list', {wabaId: wabaId, fields: fields, limit: limit, after: after}, undefined, options);
  }

  /** GET /v1/flow/details */
  details(flowId: string | null, fields: string | null, options?: RequestOptions): Promise<M.WhatsappFlowItem | null> {
    return this.http.request<M.WhatsappFlowItem>('GET', '/v1/flow/details', {flowId: flowId, fields: fields}, undefined, options);
  }

  /** GET /v1/flow/assets */
  assets(flowId: string | null, fields: string | null, options?: RequestOptions): Promise<M.WhatsappFlowAssetsResult | null> {
    return this.http.request<M.WhatsappFlowAssetsResult>('GET', '/v1/flow/assets', {flowId: flowId, fields: fields}, undefined, options);
  }

  /** POST /v1/flow/encryption/set */
  setEncryption(request: M.WhatsappFlowEncryptionSetRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/flow/encryption/set', {}, request, options);
  }

  /** GET /v1/flow/encryption/get */
  getEncryption(phoneNumberId: string | null, options?: RequestOptions): Promise<M.WhatsappFlowEncryptionResult | null> {
    return this.http.request<M.WhatsappFlowEncryptionResult>('GET', '/v1/flow/encryption/get', {phoneNumberId: phoneNumberId}, undefined, options);
  }
}
