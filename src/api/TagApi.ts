import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class TagApi {
  constructor(private readonly http: HttpTransport) {}

  /** GET /tags/categories/tree */
  getCategoryTree(options?: RequestOptions): Promise<Array<M.CategoryNodeResponse> | null> {
    return this.http.request<Array<M.CategoryNodeResponse>>('GET', '/tags/categories/tree', {}, undefined, options);
  }

  /** POST /tags/categories/create */
  createCategory(request: M.CreateCategoryRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/tags/categories/create', {}, request, options);
  }

  /** POST /tags/categories/update */
  updateCategory(request: M.UpdateCategoryRequest | null, options?: RequestOptions): Promise<M.BooleanResult | null> {
    return this.http.request<M.BooleanResult>('POST', '/tags/categories/update', {}, request, options);
  }

  /** POST /tags/categories/delete */
  deleteCategory(request: M.DeleteCategoryRequest | null, options?: RequestOptions): Promise<M.BooleanResult | null> {
    return this.http.request<M.BooleanResult>('POST', '/tags/categories/delete', {}, request, options);
  }

  /** POST /tags/categories/move */
  moveCategory(request: M.MoveCategoryRequest | null, options?: RequestOptions): Promise<M.BooleanResult | null> {
    return this.http.request<M.BooleanResult>('POST', '/tags/categories/move', {}, request, options);
  }

  /** GET /tags/static/list */
  listStaticTags(categoryId: string | null, name: string | null, pageNo: number | null, pageSize: number | null, options?: RequestOptions): Promise<M.PageResult<M.TagStaticListItemResponse> | null> {
    return this.http.request<M.PageResult<M.TagStaticListItemResponse>>('GET', '/tags/static/list', {categoryId: categoryId, name: name, pageNo: pageNo, pageSize: pageSize}, undefined, options);
  }

  /** GET /tags/static/detail */
  getStaticTagDetail(tagId: string | null, options?: RequestOptions): Promise<M.TagDetailResponse | null> {
    return this.http.request<M.TagDetailResponse>('GET', '/tags/static/detail', {tagId: tagId}, undefined, options);
  }

  /** POST /tags/static/create */
  createStaticTag(request: M.CreateStaticTagRequest | null, options?: RequestOptions): Promise<M.StringIdResult | null> {
    return this.http.request<M.StringIdResult>('POST', '/tags/static/create', {}, request, options);
  }

  /** POST /tags/static/update */
  updateStaticTag(request: M.UpdateStaticTagRequest | null, options?: RequestOptions): Promise<M.BooleanResult | null> {
    return this.http.request<M.BooleanResult>('POST', '/tags/static/update', {}, request, options);
  }

  /** POST /tags/static/delete */
  deleteStaticTag(request: M.DeleteStaticTagRequest | null, options?: RequestOptions): Promise<M.BooleanResult | null> {
    return this.http.request<M.BooleanResult>('POST', '/tags/static/delete', {}, request, options);
  }

  /** POST /tags/static/move */
  moveStaticTag(request: M.MoveStaticTagRequest | null, options?: RequestOptions): Promise<M.BooleanResult | null> {
    return this.http.request<M.BooleanResult>('POST', '/tags/static/move', {}, request, options);
  }

  /** GET /tags/user/tags */
  getUserTags(userId: string | null, channel: string | null, options?: RequestOptions): Promise<Array<M.UserTagResponse> | null> {
    return this.http.request<Array<M.UserTagResponse>>('GET', '/tags/user/tags', {userId: userId, channel: channel}, undefined, options);
  }

  /** POST /tags/user/tags/attach */
  attachUserTag(request: M.UserTagsAttachRequest | null, options?: RequestOptions): Promise<M.BooleanResult | null> {
    return this.http.request<M.BooleanResult>('POST', '/tags/user/tags/attach', {}, request, options);
  }

  /** POST /tags/user/tags/detach */
  detachUserTag(request: M.UserTagsDetachRequest | null, options?: RequestOptions): Promise<M.BooleanResult | null> {
    return this.http.request<M.BooleanResult>('POST', '/tags/user/tags/detach', {}, request, options);
  }

  /** POST /tags/users/query */
  queryUsersByTagValue(request: M.TagUsersQueryRequest | null, options?: RequestOptions): Promise<M.TagUsersPageResponse | null> {
    return this.http.request<M.TagUsersPageResponse>('POST', '/tags/users/query', {}, request, options);
  }
}
