import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class TemplateApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /open/whatsapp/template/query */
  query(request: M.WhatsappTemplateQueryRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplateQueryResponse | null> {
    return this.http.request<M.WhatsappTemplateQueryResponse>('POST', '/open/whatsapp/template/query', {}, request, options);
  }

  /** POST /open/whatsapp/template/create */
  create(request: M.WhatsappTemplateCreateRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplateCreateResult | null> {
    return this.http.request<M.WhatsappTemplateCreateResult>('POST', '/open/whatsapp/template/create', {}, request, options);
  }

  /** POST /open/whatsapp/template/update */
  update(request: M.WhatsappTemplateEditRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/open/whatsapp/template/update', {}, request, options);
  }

  /** POST /open/whatsapp/template/delete */
  delete(request: M.WhatsappTemplateDeleteRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/open/whatsapp/template/delete', {}, request, options);
  }

  /** POST /open/whatsapp/template/file/upload */
  uploadFile(request: M.WhatsappTemplateFileUplodRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplateFileUploadResult | null> {
    return this.http.request<M.WhatsappTemplateFileUploadResult>('POST', '/open/whatsapp/template/file/upload', {}, request, options);
  }

  /** GET /v1/whatsapp/template/details */
  details(templateId: string | null, fields: string | null, options?: RequestOptions): Promise<M.WhatsappTemplateDetailsResult | null> {
    return this.http.request<M.WhatsappTemplateDetailsResult>('GET', '/v1/whatsapp/template/details', {templateId: templateId, fields: fields}, undefined, options);
  }

  /** GET /v1/whatsapp/template/compare */
  compare(templateId: string | null, templateIds: string | null, start: M.Int64 | null, end: M.Int64 | null, options?: RequestOptions): Promise<M.WhatsappTemplateCompareResult | null> {
    return this.http.request<M.WhatsappTemplateCompareResult>('GET', '/v1/whatsapp/template/compare', {templateId: templateId, templateIds: templateIds, start: start, end: end}, undefined, options);
  }

  /** POST /v1/whatsapp/template/archive */
  archive(request: M.WhatsappTemplateArchiveRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplateArchiveResult | null> {
    return this.http.request<M.WhatsappTemplateArchiveResult>('POST', '/v1/whatsapp/template/archive', {}, request, options);
  }

  /** POST /v1/whatsapp/template/unarchive */
  unarchive(request: M.WhatsappTemplateUnarchiveRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplateUnarchiveResult | null> {
    return this.http.request<M.WhatsappTemplateUnarchiveResult>('POST', '/v1/whatsapp/template/unarchive', {}, request, options);
  }

  /** POST /v1/whatsapp/template/migrate */
  migrate(request: M.WhatsappTemplateMigrateRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplateMigrateResult | null> {
    return this.http.request<M.WhatsappTemplateMigrateResult>('POST', '/v1/whatsapp/template/migrate', {}, request, options);
  }

  /** GET /v1/whatsapp/template/preview */
  preview(request: M.WhatsappTemplatePreviewRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplatePreviewResult | null> {
    return this.http.request<M.WhatsappTemplatePreviewResult>('GET', '/v1/whatsapp/template/preview', {wabaId: request?.wabaId, category: request?.category, languages: request?.languages, addSecurityRecommendation: request?.addSecurityRecommendation, codeExpirationMinutes: request?.codeExpirationMinutes, buttonTypes: request?.buttonTypes, businessName: request?.businessName}, undefined, options);
  }

  /** POST /v1/whatsapp/template/upsert */
  upsert(request: M.WhatsappTemplateUpsertRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplateUpsertResult | null> {
    return this.http.request<M.WhatsappTemplateUpsertResult>('POST', '/v1/whatsapp/template/upsert', {}, request, options);
  }

  /** GET /v1/whatsapp/template/groups/list */
  groupList(wabaId: string | null, fields: string | null, limit: M.Int64 | null, after: string | null, options?: RequestOptions): Promise<M.WhatsappTemplateGroupListResult | null> {
    return this.http.request<M.WhatsappTemplateGroupListResult>('GET', '/v1/whatsapp/template/groups/list', {wabaId: wabaId, fields: fields, limit: limit, after: after}, undefined, options);
  }

  /** POST /v1/whatsapp/template/groups/create */
  groupCreate(request: M.WhatsappTemplateGroupCreateRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/v1/whatsapp/template/groups/create', {}, request, options);
  }

  /** GET /v1/whatsapp/template/groups/details */
  groupDetails(templateGroupId: string | null, fields: string | null, options?: RequestOptions): Promise<M.WhatsappTemplateGroupDetailsResult | null> {
    return this.http.request<M.WhatsappTemplateGroupDetailsResult>('GET', '/v1/whatsapp/template/groups/details', {templateGroupId: templateGroupId, fields: fields}, undefined, options);
  }

  /** POST /v1/whatsapp/template/groups/update */
  groupUpdate(request: M.WhatsappTemplateGroupUpdateRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/template/groups/update', {}, request, options);
  }

  /** POST /v1/whatsapp/template/groups/delete */
  groupDelete(request: M.WhatsappTemplateGroupDeleteRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/template/groups/delete', {}, request, options);
  }

  /** GET /v1/whatsapp/template/library */
  library(request: M.WhatsappTemplateLibraryRequest | null, options?: RequestOptions): Promise<M.WhatsappTemplateLibraryResult | null> {
    return this.http.request<M.WhatsappTemplateLibraryResult>('GET', '/v1/whatsapp/template/library', {category: request?.category, search: request?.search, topic: request?.topic, usecase: request?.usecase, industry: request?.industry, language: request?.language, name: request?.name, limit: request?.limit, after: request?.after, before: request?.before}, undefined, options);
  }
}
