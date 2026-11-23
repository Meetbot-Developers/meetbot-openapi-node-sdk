import type * as M from './models.js';
import { parseJSON } from './json.js';

export interface WebhookEvent { type: string; messageId?: M.Int64; id?: M.Int64; msg?: unknown; [key: string]: unknown }
export interface WebhookHandlers {
  onSendSuccess?: (event: M.WebhookSendSuccessCallback) => void | Promise<void>;
  onSendError?: (event: M.WebhookSendErrorCallback) => void | Promise<void>;
  onContent?: (event: M.WebhookContentCallback) => void | Promise<void>;
  onContentForBClient?: (event: M.WebhookContentForBClientCallback) => void | Promise<void>;
  onStatusChange?: (event: M.WebhookStatusChangeCallback) => void | Promise<void>;
  onAccountChange?: (event: WebhookEvent) => void | Promise<void>;
  onTemplateChange?: (event: WebhookEvent) => void | Promise<void>;
  onAction?: (event: M.WebhookActionCallback) => void | Promise<void>;
  onCallsConnect?: (event: M.WebhookCallsConnectCallback) => void | Promise<void>;
  onCallsTerminate?: (event: M.WebhookCallsTerminateCallback) => void | Promise<void>;
  onCallsStatus?: (event: M.WebhookCallsStatusCallback) => void | Promise<void>;
  onCallsPermissionReply?: (event: M.WebhookCallsPermissionReplyCallback) => void | Promise<void>;
  onFlowWebhook?: (event: WebhookEvent) => void | Promise<void>;
  onCatalogProductCreate?: (event: M.WebhookCatalogProductCreateCallback) => void | Promise<void>;
  onCatalogProductUpdate?: (event: M.WebhookCatalogProductUpdateCallback) => void | Promise<void>;
  onCatalogProductDelete?: (event: M.WebhookCatalogProductDeleteCallback) => void | Promise<void>;
  onCatalogProductBatchImport?: (event: M.WebhookCatalogProductBatchImportCallback) => void | Promise<void>;
  onUnhandled?: (event: WebhookEvent) => void | Promise<void>;
}

export function parseWebhook(json: string): WebhookEvent {
  const value = parseJSON(json);
  if (!value || typeof value !== 'object' || Array.isArray(value) || !('type' in value) || typeof value.type !== 'string') throw new TypeError('Invalid webhook envelope');
  return value as WebhookEvent;
}

export async function dispatchWebhook(input: string | WebhookEvent, handlers: WebhookHandlers): Promise<void> {
  const event = typeof input === 'string' ? parseWebhook(input) : input;
  switch (event.type) {
    case "SEND_SUCCESS": await handlers.onSendSuccess?.(event as M.WebhookSendSuccessCallback); return;
    case "SEND_ERROR": await handlers.onSendError?.(event as M.WebhookSendErrorCallback); return;
    case "CONTENT": await handlers.onContent?.(event as M.WebhookContentCallback); return;
    case "CONTENT_FOR_B_CLIENT": await handlers.onContentForBClient?.(event as M.WebhookContentForBClientCallback); return;
    case "STATUS_CHANGE": await handlers.onStatusChange?.(event as M.WebhookStatusChangeCallback); return;
    case "ACCOUNT_CHANGE": await handlers.onAccountChange?.(event); return;
    case "TEMPLATE_CHANGE": await handlers.onTemplateChange?.(event); return;
    case "ACTION": await handlers.onAction?.(event as M.WebhookActionCallback); return;
    case "calls_connect": await handlers.onCallsConnect?.(event as M.WebhookCallsConnectCallback); return;
    case "calls_terminate": await handlers.onCallsTerminate?.(event as M.WebhookCallsTerminateCallback); return;
    case "calls_status": await handlers.onCallsStatus?.(event as M.WebhookCallsStatusCallback); return;
    case "calls_call_permission_reply": await handlers.onCallsPermissionReply?.(event as M.WebhookCallsPermissionReplyCallback); return;
    case "FLOW_WEBHOOK": await handlers.onFlowWebhook?.(event); return;
    case "CREATE_CATALOG_PRODUCT_BY_API": await handlers.onCatalogProductCreate?.(event as M.WebhookCatalogProductCreateCallback); return;
    case "UPDATE_CATALOG_PRODUCT_BY_API": await handlers.onCatalogProductUpdate?.(event as M.WebhookCatalogProductUpdateCallback); return;
    case "DELETE_CATALOG_PRODUCT_BY_API": await handlers.onCatalogProductDelete?.(event as M.WebhookCatalogProductDeleteCallback); return;
    case "UPLOAD_CATALOG_PRODUCT_BY_API": await handlers.onCatalogProductBatchImport?.(event as M.WebhookCatalogProductBatchImportCallback); return;
    default: await handlers.onUnhandled?.(event);
  }
}
