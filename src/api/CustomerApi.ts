import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class CustomerApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /customer/channel/user/add */
  addChannelUser(request: M.CustomerChannelUserAddRequest | null, options?: RequestOptions): Promise<M.EmptyResult | null> {
    return this.http.request<M.EmptyResult>('POST', '/customer/channel/user/add', {}, request, options);
  }

  /** POST /consultant/allocation/add/user */
  addConsultantAllocationUser(request: M.CustomerConsultantAllocationAddUserRequest | null, options?: RequestOptions): Promise<M.EmptyResult | null> {
    return this.http.request<M.EmptyResult>('POST', '/consultant/allocation/add/user', {}, request, options);
  }

  /** GET /open/user/seat/list */
  listSeats(options?: RequestOptions): Promise<Array<M.UserSeatResponse> | null> {
    return this.http.request<Array<M.UserSeatResponse>>('GET', '/open/user/seat/list', {}, undefined, options);
  }

  /** POST /open/user/chatStatus */
  getChatStatus(request: M.CustomerChatStatusRequest | null, options?: RequestOptions): Promise<M.CustomerChatStatusResponse | null> {
    return this.http.request<M.CustomerChatStatusResponse>('POST', '/open/user/chatStatus', {}, request, options);
  }

  /** POST /open/user/seat/createSession */
  createSession(request: M.UserSeatSessionRequest | null, options?: RequestOptions): Promise<boolean | null> {
    return this.http.request<boolean>('POST', '/open/user/seat/createSession', {}, request, options);
  }

  /** POST /open/user/seat/closeSession */
  closeSession(request: M.UserSeatSessionRequest | null, options?: RequestOptions): Promise<boolean | null> {
    return this.http.request<boolean>('POST', '/open/user/seat/closeSession', {}, request, options);
  }
}
