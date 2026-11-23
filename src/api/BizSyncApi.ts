import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class BizSyncApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /open/biz/sync/users */
  syncUsers(request: M.BizSyncUserBatchRequest | null, options?: RequestOptions): Promise<M.BizSyncBatchResponse | null> {
    return this.http.request<M.BizSyncBatchResponse>('POST', '/open/biz/sync/users', {}, request, options);
  }

  /** POST /open/biz/sync/orders */
  syncOrders(request: M.BizSyncOrderBatchRequest | null, options?: RequestOptions): Promise<M.BizSyncBatchResponse | null> {
    return this.http.request<M.BizSyncBatchResponse>('POST', '/open/biz/sync/orders', {}, request, options);
  }

  /** POST /open/biz/sync/products */
  syncProducts(request: M.BizSyncProductBatchRequest | null, options?: RequestOptions): Promise<M.BizSyncBatchResponse | null> {
    return this.http.request<M.BizSyncBatchResponse>('POST', '/open/biz/sync/products', {}, request, options);
  }

  /** POST /open/biz/sync/product/series */
  syncProductSeries(request: M.BizSyncProductSeriesBatchRequest | null, options?: RequestOptions): Promise<M.BizSyncBatchResponse | null> {
    return this.http.request<M.BizSyncBatchResponse>('POST', '/open/biz/sync/product/series', {}, request, options);
  }

  /** POST /open/biz/sync/event */
  reportEvent(request: M.BizSyncEventReportRequest | null, options?: RequestOptions): Promise<M.EmptyResult | null> {
    return this.http.request<M.EmptyResult>('POST', '/open/biz/sync/event', {}, request, options);
  }

  /** POST /v1/ctwa/conversion/events */
  ctwaConversionPostback(request: M.CtwaConversionPostbackRequest | null, options?: RequestOptions): Promise<M.CtwaConversionResult | null> {
    return this.http.request<M.CtwaConversionResult>('POST', '/v1/ctwa/conversion/events', {}, request, options);
  }

  /** POST /v1/ctwa/conversion/dataset/create */
  createCtwaDataset(request: M.CtwaDatasetCreateRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/v1/ctwa/conversion/dataset/create', {}, request, options);
  }

  /** GET /v1/ctwa/conversion/dataset/query */
  queryCtwaDataset(wabaId: string | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('GET', '/v1/ctwa/conversion/dataset/query', {wabaId: wabaId}, undefined, options);
  }
}
