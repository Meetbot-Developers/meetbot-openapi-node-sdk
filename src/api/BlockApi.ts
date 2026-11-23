import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class BlockApi {
  constructor(private readonly http: HttpTransport) {}

  /** GET /block/group/list */
  listGroups(options?: RequestOptions): Promise<Array<M.BlockGroupResponse> | null> {
    return this.http.request<Array<M.BlockGroupResponse>>('GET', '/block/group/list', {}, undefined, options);
  }

  /** POST /block/page/list */
  pageList(request: M.PageBlockRequest | null, options?: RequestOptions): Promise<M.PageResult<M.BlockResponse> | null> {
    return this.http.request<M.PageResult<M.BlockResponse>>('POST', '/block/page/list', {}, request, options);
  }

  /** GET /block/preview/url */
  generatePreviewUrl(request: M.BlockPreviewRequest | null, options?: RequestOptions): Promise<M.PreviewUrlResult | null> {
    return this.http.request<M.PreviewUrlResult>('GET', '/block/preview/url', {}, request, options);
  }

  /** GET /api/v2/whatsapp/message/block/param */
  getDynamicParam(blockId: M.Int64 | null, options?: RequestOptions): Promise<Array<M.BlockDynamicParamResponse> | null> {
    return this.http.request<Array<M.BlockDynamicParamResponse>>('GET', '/api/v2/whatsapp/message/block/param', {blockId: blockId}, undefined, options);
  }
}
