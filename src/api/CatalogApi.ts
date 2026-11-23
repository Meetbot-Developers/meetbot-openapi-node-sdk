import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class CatalogApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /open/catalog/list */
  list(request: M.CatalogListOpenRequest | null, options?: RequestOptions): Promise<Array<M.OpenCatalogListResponse> | null> {
    return this.http.request<Array<M.OpenCatalogListResponse>>('POST', '/open/catalog/list', {}, request, options);
  }

  /** POST /open/catalog/cart/status */
  cartStatus(request: M.CartStatusOpenRequest | null, options?: RequestOptions): Promise<Array<M.CartStatusResponse> | null> {
    return this.http.request<Array<M.CartStatusResponse>>('POST', '/open/catalog/cart/status', {}, request, options);
  }

  /** POST /open/catalog/cart/toggle */
  toggleCart(request: M.CartToggleOpenRequest | null, options?: RequestOptions): Promise<M.EmptyResult | null> {
    return this.http.request<M.EmptyResult>('POST', '/open/catalog/cart/toggle', {}, request, options);
  }

  /** POST /open/catalog/create */
  create(request: M.CatalogCreateOpenRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/open/catalog/create', {}, request, options);
  }

  /** POST /open/catalog/delete */
  delete(request: M.CatalogDeleteOpenRequest | null, options?: RequestOptions): Promise<M.EmptyResult | null> {
    return this.http.request<M.EmptyResult>('POST', '/open/catalog/delete', {}, request, options);
  }

  /** POST /open/catalog/bindwaba */
  bindWaba(request: M.CatalogBindWabaOpenRequest | null, options?: RequestOptions): Promise<M.EmptyResult | null> {
    return this.http.request<M.EmptyResult>('POST', '/open/catalog/bindwaba', {}, request, options);
  }

  /** POST /open/catalog/unbindwaba */
  unbindWaba(request: M.CatalogUnbindWabaOpenRequest | null, options?: RequestOptions): Promise<M.EmptyResult | null> {
    return this.http.request<M.EmptyResult>('POST', '/open/catalog/unbindwaba', {}, request, options);
  }

  /** POST /open/catalog/product/list */
  listProducts(request: M.ProductListOpenRequest | null, options?: RequestOptions): Promise<M.PageResult<M.CatalogProductListItemResponse> | null> {
    return this.http.request<M.PageResult<M.CatalogProductListItemResponse>>('POST', '/open/catalog/product/list', {}, request, options);
  }

  /** POST /open/catalog/product/detail */
  getProduct(request: M.ProductDetailOpenRequest | null, options?: RequestOptions): Promise<M.CatalogProductResponse | null> {
    return this.http.request<M.CatalogProductResponse>('POST', '/open/catalog/product/detail', {}, request, options);
  }

  /** POST /open/catalog/product/create */
  createProduct(request: M.ProductCreateOpenRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/open/catalog/product/create', {}, request, options);
  }

  /** POST /open/catalog/product/edit */
  editProduct(request: M.ProductEditOpenRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/open/catalog/product/edit', {}, request, options);
  }

  /** POST /open/catalog/product/delete */
  deleteProduct(request: M.ProductDeleteOpenRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/open/catalog/product/delete', {}, request, options);
  }

  /** POST /open/catalog/product/batchImport */
  batchImport(request: M.ProductBatchImportOpenRequest | null, options?: RequestOptions): Promise<M.LongIdResult | null> {
    return this.http.request<M.LongIdResult>('POST', '/open/catalog/product/batchImport', {}, request, options);
  }

  /** POST /open/catalog/product/batchImport/detail */
  batchImportDetail(request: M.ProductBatchImportTaskDetailOpenRequest | null, options?: RequestOptions): Promise<M.ProductBatchImportTaskDetailOpenResponse | null> {
    return this.http.request<M.ProductBatchImportTaskDetailOpenResponse>('POST', '/open/catalog/product/batchImport/detail', {}, request, options);
  }
}
