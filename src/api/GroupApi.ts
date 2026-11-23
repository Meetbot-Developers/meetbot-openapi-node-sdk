import type * as M from '../models.js';
import { HttpTransport, type RequestOptions, type Upload } from '../http.js';

export class GroupApi {
  constructor(private readonly http: HttpTransport) {}

  /** POST /v1/whatsapp/group/create */
  create(request: M.WhatsappGroupCreateRequest | null, options?: RequestOptions): Promise<M.WhatsappGroupCreateResult | null> {
    return this.http.request<M.WhatsappGroupCreateResult>('POST', '/v1/whatsapp/group/create', {}, request, options);
  }

  /** GET /v1/whatsapp/group/list */
  list(phoneId: string | null, fields: string | null, limit: M.Int64 | null, after: string | null, options?: RequestOptions): Promise<M.WhatsappGroupListResult | null> {
    return this.http.request<M.WhatsappGroupListResult>('GET', '/v1/whatsapp/group/list', {phoneId: phoneId, fields: fields, limit: limit, after: after}, undefined, options);
  }

  /** GET /v1/whatsapp/group/details */
  details(groupId: string | null, fields: string | null, options?: RequestOptions): Promise<M.WhatsappGroupDetailsResult | null> {
    return this.http.request<M.WhatsappGroupDetailsResult>('GET', '/v1/whatsapp/group/details', {groupId: groupId, fields: fields}, undefined, options);
  }

  /** POST /v1/whatsapp/group/update */
  update(request: M.WhatsappGroupUpdateRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/group/update', {}, request, options);
  }

  /** POST /v1/whatsapp/group/delete */
  delete(request: M.WhatsappGroupDeleteRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/group/delete', {}, request, options);
  }

  /** POST /v1/whatsapp/group/participants/remove */
  participantsRemove(request: M.WhatsappGroupParticipantsRemoveRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/group/participants/remove', {}, request, options);
  }

  /** GET /v1/whatsapp/group/inviteLink */
  inviteLink(groupId: string | null, options?: RequestOptions): Promise<M.WhatsappGroupInviteLinkResult | null> {
    return this.http.request<M.WhatsappGroupInviteLinkResult>('GET', '/v1/whatsapp/group/inviteLink', {groupId: groupId}, undefined, options);
  }

  /** POST /v1/whatsapp/group/inviteLink/reset */
  inviteLinkReset(request: M.WhatsappGroupInviteLinkResetRequest | null, options?: RequestOptions): Promise<M.WhatsappGroupInviteLinkResetResult | null> {
    return this.http.request<M.WhatsappGroupInviteLinkResetResult>('POST', '/v1/whatsapp/group/inviteLink/reset', {}, request, options);
  }

  /** GET /v1/whatsapp/group/joinRequests */
  joinRequestList(groupId: string | null, limit: M.Int64 | null, after: string | null, options?: RequestOptions): Promise<M.WhatsappGroupJoinRequestListResult | null> {
    return this.http.request<M.WhatsappGroupJoinRequestListResult>('GET', '/v1/whatsapp/group/joinRequests', {groupId: groupId, limit: limit, after: after}, undefined, options);
  }

  /** POST /v1/whatsapp/group/joinRequests/approve */
  joinRequestApprove(request: M.WhatsappGroupJoinRequestApproveRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/group/joinRequests/approve', {}, request, options);
  }

  /** POST /v1/whatsapp/group/joinRequests/reject */
  joinRequestReject(request: M.WhatsappGroupJoinRequestRejectRequest | null, options?: RequestOptions): Promise<M.MetaSuccessResult | null> {
    return this.http.request<M.MetaSuccessResult>('POST', '/v1/whatsapp/group/joinRequests/reject', {}, request, options);
  }
}
