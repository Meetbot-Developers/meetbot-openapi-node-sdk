import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class AnalyticsApi {
  constructor(private readonly http: HttpTransport) {}

  /** GET /v1/whatsapp/analytics/query */
  query(request: M.WhatsappAnalyticsQueryRequest | null, options?: RequestOptions): Promise<M.WhatsappAnalyticsQueryResult | null> {
    return this.http.request<M.WhatsappAnalyticsQueryResult>('GET', '/v1/whatsapp/analytics/query', {wabaId: request?.wabaId, field: request?.field, start: request?.start, end: request?.end, granularity: request?.granularity, phoneNumbers: request?.phoneNumbers, countryCodes: request?.countryCodes, productTypes: request?.productTypes, metricTypes: request?.metricTypes, pricingTypes: request?.pricingTypes, pricingCategories: request?.pricingCategories, dimensions: request?.dimensions, conversationCategories: request?.conversationCategories, conversationTypes: request?.conversationTypes, conversationDirections: request?.conversationDirections, directions: request?.directions, templateIds: request?.templateIds, templateGroupIds: request?.templateGroupIds, groupIds: request?.groupIds, productType: request?.productType, useWabaTimezone: request?.useWabaTimezone}, undefined, options);
  }

  /** POST /v1/whatsapp/analytics/templateInsights/enable */
  enableTemplateInsights(request: M.WhatsappTemplateInsightsEnableRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/analytics/templateInsights/enable', {}, request, options);
  }

  /** GET /v1/whatsapp/analytics/activities */
  activities(wabaId: string | null, since: M.Int64 | null, until: M.Int64 | null, limit: M.Int64 | null, after: string | null, options?: RequestOptions): Promise<M.WhatsappAnalyticsActivitiesResult | null> {
    return this.http.request<M.WhatsappAnalyticsActivitiesResult>('GET', '/v1/whatsapp/analytics/activities', {wabaId: wabaId, since: since, until: until, limit: limit, after: after}, undefined, options);
  }
}
