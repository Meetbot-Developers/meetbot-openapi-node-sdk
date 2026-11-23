/** Integer IDs outside the safe number range are represented as decimal strings. */
export type Int64 = number | string;

export const BizSyncCancelReason = {
  "CUSTOMER": "CUSTOMER",
  "DECLINED": "DECLINED",
  "FRAUD": "FRAUD",
  "INVENTORY": "INVENTORY",
  "OTHER": "OTHER",
  "STAFF": "STAFF"
} as const;
export type BizSyncCancelReason = typeof BizSyncCancelReason[keyof typeof BizSyncCancelReason] | (string & {});

export const BizSyncEventType = {
  "CHECKOUT_STARTED": "CHECKOUT_STARTED",
  "PRODUCT_ADDED_TO_CART": "PRODUCT_ADDED_TO_CART",
  "ORDER_PAID": "ORDER_PAID",
  "ORDER_FULFILLED": "ORDER_FULFILLED",
  "ORDERS_CANCELLED": "ORDERS_CANCELLED",
  "REFUNDS_CREATE": "REFUNDS_CREATE",
  "DELIVERED": "DELIVERED",
  "REGISTRATION_COMPLETED": "REGISTRATION_COMPLETED",
  "LEAD_SUBMITTED": "LEAD_SUBMITTED"
} as const;
export type BizSyncEventType = typeof BizSyncEventType[keyof typeof BizSyncEventType] | (string & {});

export const BizSyncFinancialStatus = {
  "AUTHORIZED": "AUTHORIZED",
  "PENDING": "PENDING",
  "PAID": "PAID",
  "PARTIALLY_PAID": "PARTIALLY_PAID",
  "PARTIALLY_REFUNDED": "PARTIALLY_REFUNDED",
  "REFUNDED": "REFUNDED",
  "VOIDED": "VOIDED"
} as const;
export type BizSyncFinancialStatus = typeof BizSyncFinancialStatus[keyof typeof BizSyncFinancialStatus] | (string & {});

export const BizSyncFulfillmentStatus = {
  "UNFULFILLED": "UNFULFILLED",
  "FULFILLED": "FULFILLED",
  "PARTIALLY_FULFILLED": "PARTIALLY_FULFILLED",
  "IN_PROGRESS": "IN_PROGRESS",
  "ON_HOLD": "ON_HOLD",
  "SCHEDULED": "SCHEDULED",
  "REQUEST_DECLINED": "REQUEST_DECLINED",
  "OPEN": "OPEN",
  "PENDING_FULFILLMENT": "PENDING_FULFILLMENT",
  "RESTOCKED": "RESTOCKED"
} as const;
export type BizSyncFulfillmentStatus = typeof BizSyncFulfillmentStatus[keyof typeof BizSyncFulfillmentStatus] | (string & {});

export const CapabilityToVisitStatus = {
  "VISIBLE": "VISIBLE",
  "INVISIBLE": "INVISIBLE"
} as const;
export type CapabilityToVisitStatus = typeof CapabilityToVisitStatus[keyof typeof CapabilityToVisitStatus] | (string & {});

export const CatalogReviewStatus = {
  "PENDING": "PENDING",
  "REJECTED": "REJECTED",
  "APPROVED": "APPROVED",
  "OUTDATED": "OUTDATED"
} as const;
export type CatalogReviewStatus = typeof CatalogReviewStatus[keyof typeof CatalogReviewStatus] | (string & {});

export const Channel = {
  "MESSENGER": "messenger",
  "INSTAGRAM": "instagram",
  "WHATSAPP": "whatsapp"
} as const;
export type Channel = typeof Channel[keyof typeof Channel] | (string & {});

export const CustomerChatStatus = {
  "PASS_THREAD_CONTROL": "PASS_THREAD_CONTROL",
  "TAKE_THREAD_CONTROL": "TAKE_THREAD_CONTROL"
} as const;
export type CustomerChatStatus = typeof CustomerChatStatus[keyof typeof CustomerChatStatus] | (string & {});

export const MessageOriginType = {
  "OPEN_API": "OPEN_API",
  "GROUP_SEND": "GROUP_SEND",
  "EDIT_TEST": "EDIT_TEST",
  "TEST": "TEST",
  "DEFAULT_REPLY": "DEFAULT_REPLY",
  "QUICK_SHOT_MENTION": "QUICK_SHOT_MENTION",
  "CUSTOM_KEYWORD": "CUSTOM_KEYWORD",
  "CUSTOM_NLP": "CUSTOM_NLP",
  "CUSTOM_EVENT": "CUSTOM_EVENT",
  "SEATS": "SEATS",
  "COMMENT": "COMMENT",
  "FACEBOOK_POST_COMMENT": "FACEBOOK_POST_COMMENT",
  "INSTAGRAM_POST_COMMENT": "INSTAGRAM_POST_COMMENT",
  "INSTAGRAM_STORY_MENTION": "INSTAGRAM_STORY_MENTION",
  "USER_INPUT": "USER_INPUT",
  "REFERRAL": "REFERRAL",
  "SHORTLINK": "SHORTLINK",
  "CUSTOMER_CHAT": "CUSTOMER_CHAT",
  "AD": "AD",
  "CHECKBOX": "CHECKBOX",
  "SEND_TO_MESSENGER": "SEND_TO_MESSENGER",
  "BUTTON_CLICK": "BUTTON_CLICK",
  "QUICK_REPLY_CLICK": "QUICK_REPLY_CLICK",
  "OPTIN": "OPTIN",
  "WELCOME": "WELCOME",
  "MARKETING_CAMPAIGN": "MARKETING_CAMPAIGN",
  "MARKETING_CAMPAIGN_PRE_ORDER": "MARKETING_CAMPAIGN_PRE_ORDER",
  "SYSTEM": "SYSTEM",
  "SMPP": "SMPP",
  "ORDER_NOTICE_STRATEGY": "ORDER_NOTICE_STRATEGY",
  "SHOPIFY_MARKETING_PLUGIN": "SHOPIFY_MARKETING_PLUGIN",
  "ABANDONED_PURCHASE_STRATEGY": "ABANDONED_PURCHASE_STRATEGY",
  "ORDER_UPDATE_NOTICE_STRATEGY": "ORDER_UPDATE_NOTICE_STRATEGY",
  "PERIODIC_GROUP_CUSTOMER_STRATEGY": "PERIODIC_GROUP_CUSTOMER_STRATEGY",
  "NEW_CUSTOMER_ACTIVATION_STRATEGY": "NEW_CUSTOMER_ACTIVATION_STRATEGY",
  "USER_INFO_STRATEGY": "USER_INFO_STRATEGY",
  "APP_SYNC": "APP_SYNC",
  "CTWA_SESSION_OPENED_STRATEGY": "CTWA_SESSION_OPENED_STRATEGY",
  "OPEN_API_V2": "OPEN_API_V2",
  "OPEN_API_V2_CUSTOMIZE": "OPEN_API_V2_CUSTOMIZE",
  "CUSTOM_PERIODICALLY": "CUSTOM_PERIODICALLY",
  "OTHER_APP": "OTHER_APP",
  "DIALOGUE": "DIALOGUE"
} as const;
export type MessageOriginType = typeof MessageOriginType[keyof typeof MessageOriginType] | (string & {});

export const ProductAvailability = {
  "IN_STOCK": "in stock",
  "OUT_OF_STOCK": "out of stock"
} as const;
export type ProductAvailability = typeof ProductAvailability[keyof typeof ProductAvailability] | (string & {});

export const ProductCondition = {
  "NEW": "new",
  "REFURBISHED": "refurbished",
  "USED": "used",
  "USED_LIKE_NEW": "used_like_new",
  "USED_GOOD": "used_good",
  "USED_FAIR": "used_fair"
} as const;
export type ProductCondition = typeof ProductCondition[keyof typeof ProductCondition] | (string & {});

export const ProductType = {
  "PHYSICAL": "PHYSICAL",
  "VIRTUAL": "VIRTUAL"
} as const;
export type ProductType = typeof ProductType[keyof typeof ProductType] | (string & {});

export const SceneType = {
  "CUSTOMER_SERVICE_SESSION": "CUSTOMER_SERVICE_SESSION",
  "MARKETING": "MARKETING",
  "TRANSACTION_NOTIFICATION": "TRANSACTION_NOTIFICATION",
  "PRIVATE_DOMAIN_PAYMENT": "PRIVATE_DOMAIN_PAYMENT",
  "AUTHENTICATION": "AUTHENTICATION",
  "NO_SCENE": "NO_SCENE"
} as const;
export type SceneType = typeof SceneType[keyof typeof SceneType] | (string & {});

export const SdpType = {
  "OFFER": "offer",
  "ANSWER": "answer"
} as const;
export type SdpType = typeof SdpType[keyof typeof SdpType] | (string & {});

export const TagValueType = {
  "STRING": "STRING",
  "NUMBER": "NUMBER",
  "TIME": "TIME"
} as const;
export type TagValueType = typeof TagValueType[keyof typeof TagValueType] | (string & {});

export const WebhookActionType = {
  "ADD_USER_LABEL": "ADD_USER_LABEL",
  "REMOVE_USER_LABEL": "REMOVE_USER_LABEL",
  "PASS_THREAD_CONTROL": "PASS_THREAD_CONTROL",
  "TAKE_THREAD_CONTROL": "TAKE_THREAD_CONTROL",
  "JSON_API": "JSON_API"
} as const;
export type WebhookActionType = typeof WebhookActionType[keyof typeof WebhookActionType] | (string & {});

export const WebhookCallbackType = {
  "SEND_SUCCESS": "SEND_SUCCESS",
  "SEND_ERROR": "SEND_ERROR",
  "CONTENT": "CONTENT",
  "CONTENT_FOR_B_CLIENT": "CONTENT_FOR_B_CLIENT",
  "STATUS_CHANGE": "STATUS_CHANGE",
  "ACCOUNT_CHANGE": "ACCOUNT_CHANGE",
  "TEMPLATE_CHANGE": "TEMPLATE_CHANGE",
  "ACTION": "ACTION",
  "CALLS_CONNECT": "calls_connect",
  "CALLS_TERMINATE": "calls_terminate",
  "CALLS_STATUS": "calls_status",
  "CALLS_CALL_PERMISSION_REPLY": "calls_call_permission_reply",
  "FLOW_WEBHOOK": "FLOW_WEBHOOK",
  "CREATE_CATALOG_PRODUCT_BY_API": "CREATE_CATALOG_PRODUCT_BY_API",
  "UPDATE_CATALOG_PRODUCT_BY_API": "UPDATE_CATALOG_PRODUCT_BY_API",
  "DELETE_CATALOG_PRODUCT_BY_API": "DELETE_CATALOG_PRODUCT_BY_API",
  "UPLOAD_CATALOG_PRODUCT_BY_API": "UPLOAD_CATALOG_PRODUCT_BY_API"
} as const;
export type WebhookCallbackType = typeof WebhookCallbackType[keyof typeof WebhookCallbackType] | (string & {});

export const WhatsappAnalyticsField = {
  "ANALYTICS": "analytics",
  "CONVERSATION_ANALYTICS": "conversation_analytics",
  "PRICING_ANALYTICS": "pricing_analytics",
  "TEMPLATE_ANALYTICS": "template_analytics",
  "TEMPLATE_GROUP_ANALYTICS": "template_group_analytics",
  "CALL_ANALYTICS": "call_analytics",
  "GROUP_ANALYTICS": "group_analytics"
} as const;
export type WhatsappAnalyticsField = typeof WhatsappAnalyticsField[keyof typeof WhatsappAnalyticsField] | (string & {});

export const WhatsappBusinessVertical = {
  "ALCOHOL": "ALCOHOL",
  "APPAREL": "APPAREL",
  "AUTO": "AUTO",
  "BEAUTY": "BEAUTY",
  "EDU": "EDU",
  "ENTERTAIN": "ENTERTAIN",
  "EVENT_PLAN": "EVENT_PLAN",
  "FINANCE": "FINANCE",
  "GOVT": "GOVT",
  "GROCERY": "GROCERY",
  "HEALTH": "HEALTH",
  "HOTEL": "HOTEL",
  "NONPROFIT": "NONPROFIT",
  "ONLINE_GAMBLING": "ONLINE_GAMBLING",
  "OTC_DRUGS": "OTC_DRUGS",
  "OTHER": "OTHER",
  "PHYSICAL_GAMBLING": "PHYSICAL_GAMBLING",
  "PROF_SERVICES": "PROF_SERVICES",
  "RESTAURANT": "RESTAURANT",
  "RETAIL": "RETAIL",
  "TRAVEL": "TRAVEL"
} as const;
export type WhatsappBusinessVertical = typeof WhatsappBusinessVertical[keyof typeof WhatsappBusinessVertical] | (string & {});

export const WhatsappFlowCategory = {
  "SIGN_UP": "SIGN_UP",
  "SIGN_IN": "SIGN_IN",
  "APPOINTMENT_BOOKING": "APPOINTMENT_BOOKING",
  "LEAD_GENERATION": "LEAD_GENERATION",
  "CONTACT_US": "CONTACT_US",
  "CUSTOMER_SUPPORT": "CUSTOMER_SUPPORT",
  "SURVEY": "SURVEY",
  "OTHER": "OTHER"
} as const;
export type WhatsappFlowCategory = typeof WhatsappFlowCategory[keyof typeof WhatsappFlowCategory] | (string & {});

export const WhatsappMessageType = {
  "TEXT": "text",
  "IMAGE": "image",
  "AUDIO": "audio",
  "DOCUMENT": "document",
  "VIDEO": "video",
  "STICKER": "sticker",
  "LOCATION": "location",
  "CONTACTS": "contacts",
  "INTERACTIVE": "interactive",
  "TEMPLATE": "template",
  "REACTION": "reaction"
} as const;
export type WhatsappMessageType = typeof WhatsappMessageType[keyof typeof WhatsappMessageType] | (string & {});

export const WhatsappRecipientType = {
  "INDIVIDUAL": "individual",
  "GROUP": "group"
} as const;
export type WhatsappRecipientType = typeof WhatsappRecipientType[keyof typeof WhatsappRecipientType] | (string & {});

export const WhatsappTemplateCategory = {
  "MARKETING": "MARKETING",
  "UTILITY": "UTILITY",
  "AUTHENTICATION": "AUTHENTICATION"
} as const;
export type WhatsappTemplateCategory = typeof WhatsappTemplateCategory[keyof typeof WhatsappTemplateCategory] | (string & {});

export interface ApiResponse<T = unknown> {
  code?: number | null;
  message?: string | null;
  result?: T | null;
  traceId?: string | null;
  success?: boolean | null;
  [key: string]: unknown;
}

export interface BizSyncBatchResponse {
  acceptedCount?: Int64 | null;
  errors?: Array<BizSyncErrorDetail> | null;
  [key: string]: unknown;
}

export interface BizSyncCheckoutCommodity {
  checkoutUrl?: string | null;
  checkoutToken?: string | null;
  totalPrice?: number | string | null;
  currencyCode?: string | null;
  lineItems?: Array<BizSyncCheckoutLineItem> | null;
  [key: string]: unknown;
}

export interface BizSyncCheckoutLineItem {
  productId?: string | null;
  title?: string | null;
  sku?: string | null;
  num?: Int64 | null;
  price?: number | string | null;
  currency?: string | null;
  img?: string | null;
  [key: string]: unknown;
}

export interface BizSyncErrorDetail {
  index?: Int64 | null;
  code?: Int64 | null;
  message?: string | null;
  [key: string]: unknown;
}

export interface BizSyncEventData {
  userId?: string | null;
  leadId?: string | null;
  formId?: string | null;
  clientId?: string | null;
  initPhone?: string | null;
  orderPhone?: string | null;
  addressPhone?: string | null;
  country?: string | null;
  orderId?: string | null;
  user?: BizSyncUserData | null;
  order?: BizSyncOrderData | null;
  fulfillments?: Array<BizSyncFulfillmentSnapshot> | null;
  checkoutCommodity?: BizSyncCheckoutCommodity | null;
  cancelledLineItems?: Array<BizSyncSkuItem> | null;
  refundLineItems?: Array<BizSyncSkuItem> | null;
  refundTransactions?: Array<BizSyncMoney> | null;
  [key: string]: unknown;
}

export interface BizSyncEventReportRequest {
  eventId?: string | null;
  eventType?: BizSyncEventType | null;
  eventTime?: Int64 | null;
  eventData?: BizSyncEventData | null;
  [key: string]: unknown;
}

export interface BizSyncFulfillmentSnapshot {
  trackingCompany?: string | null;
  trackingNumber?: string | null;
  trackingNumbers?: Array<string> | null;
  trackingUrl?: string | null;
  lineItems?: Array<BizSyncSkuItem> | null;
  [key: string]: unknown;
}

export interface BizSyncMoney {
  amount?: string | null;
  currencyCode?: string | null;
  [key: string]: unknown;
}

export interface BizSyncOrderBatchRequest {
  data?: Array<BizSyncOrderData> | null;
  [key: string]: unknown;
}

export interface BizSyncOrderData {
  id?: string | null;
  userId?: string | null;
  financialStatus?: BizSyncFinancialStatus | null;
  fulfillmentStatus?: BizSyncFulfillmentStatus | null;
  cancelReason?: BizSyncCancelReason | null;
  totalPriceSet?: BizSyncPriceSet | null;
  orderCreateTime?: Int64 | null;
  orderPayTime?: Int64 | null;
  orderCancelTime?: Int64 | null;
  orderName?: string | null;
  orderPhone?: string | null;
  billingPhone?: string | null;
  contactEmail?: string | null;
  shippingAddress?: BizSyncShippingAddress | null;
  skuPaid?: Array<BizSyncSkuItem> | null;
  skuRefunded?: Array<BizSyncRefundGroup> | null;
  orderStatusUrl?: string | null;
  createTime?: Int64 | null;
  updateTime?: Int64 | null;
  [key: string]: unknown;
}

export interface BizSyncPriceSet {
  shopMoney?: BizSyncMoney | null;
  presentmentMoney?: BizSyncMoney | null;
  [key: string]: unknown;
}

export interface BizSyncProductBatchRequest {
  data?: Array<BizSyncProductData> | null;
  [key: string]: unknown;
}

export interface BizSyncProductData {
  id?: string | null;
  updateTime?: Int64 | null;
  productHandle?: string | null;
  productTitle?: string | null;
  productStatus?: string | null;
  productTags?: Array<string> | null;
  collections?: Array<string> | null;
  productType?: string | null;
  variantsSkus?: Array<BizSyncVariantSku> | null;
  productCreateTime?: Int64 | null;
  createTime?: Int64 | null;
  [key: string]: unknown;
}

export interface BizSyncProductSeriesBatchRequest {
  data?: Array<BizSyncProductSeriesData> | null;
  [key: string]: unknown;
}

export interface BizSyncProductSeriesData {
  id?: string | null;
  updateTime?: Int64 | null;
  collectionHandle?: string | null;
  collectionTitle?: string | null;
  collectionType?: string | null;
  createTime?: Int64 | null;
  [key: string]: unknown;
}

export interface BizSyncRefundGroup {
  refundId?: string | null;
  refundTime?: Int64 | null;
  items?: Array<BizSyncSkuItem> | null;
  [key: string]: unknown;
}

export interface BizSyncShippingAddress {
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  province?: string | null;
  zip?: string | null;
  country?: string | null;
  phone?: string | null;
  [key: string]: unknown;
}

export interface BizSyncSkuItem {
  productId?: string | null;
  title?: string | null;
  sku?: string | null;
  num?: Int64 | null;
  priceSet?: BizSyncPriceSet | null;
  [key: string]: unknown;
}

export interface BizSyncUserBatchRequest {
  data?: Array<BizSyncUserData> | null;
  [key: string]: unknown;
}

export interface BizSyncUserData {
  id?: string | null;
  updateTime?: Int64 | null;
  mobile?: string | null;
  userEmail?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  country?: string | null;
  city?: string | null;
  company?: string | null;
  createTime?: Int64 | null;
  [key: string]: unknown;
}

export interface BizSyncVariantSku {
  productId?: string | null;
  sku?: string | null;
  num?: string | null;
  [key: string]: unknown;
}

export interface BlockDynamicParamInfoResponse {
  type?: string | null;
  key?: string | null;
  value?: string | null;
  [key: string]: unknown;
}

export interface BlockDynamicParamResponse {
  blockId?: Int64 | null;
  blockName?: string | null;
  paramList?: Array<BlockDynamicParamInfoResponse> | null;
  [key: string]: unknown;
}

export interface BlockGroupResponse {
  groupId?: Int64 | null;
  groupName?: string | null;
  [key: string]: unknown;
}

export interface BlockPreviewRequest {
  blockId?: Int64 | null;
  [key: string]: unknown;
}

export interface BlockResponse {
  blockId?: Int64 | null;
  blockName?: string | null;
  sceneType?: string | null;
  messageType?: string | null;
  groupId?: Int64 | null;
  groupName?: string | null;
  wabaId?: string | null;
  wabaName?: string | null;
  createTime?: Int64 | null;
  updateTime?: Int64 | null;
  [key: string]: unknown;
}

export type BooleanResult = boolean | { success?: boolean };
export interface CartStatusOpenRequest {
  whatsappBusinessAccountId?: string | null;
  [key: string]: unknown;
}

export interface CartStatusResponse {
  phoneNumberId?: string | null;
  enabled?: boolean | null;
  [key: string]: unknown;
}

export interface CartToggleOpenRequest {
  phoneNumberId?: string | null;
  enabled?: boolean | null;
  [key: string]: unknown;
}

export interface CatalogBindWabaOpenRequest {
  whatsappBusinessAccountId?: string | null;
  catalogId?: string | null;
  [key: string]: unknown;
}

export interface CatalogCreateOpenRequest {
  businessId?: string | null;
  catalogName?: string | null;
  [key: string]: unknown;
}

export interface CatalogDeleteOpenRequest {
  catalogId?: string | null;
  [key: string]: unknown;
}

export interface CatalogItemDTO {
  catalogId?: string | null;
  catalogName?: string | null;
  boundWabaId?: string | null;
  boundWabaName?: string | null;
  availability?: boolean | null;
  [key: string]: unknown;
}

export interface CatalogListOpenRequest {
  businessId?: string | null;
  [key: string]: unknown;
}

export interface CatalogProductHandleResultMessage {
  success?: boolean | null;
  failReason?: string | null;
  [key: string]: unknown;
}

export interface CatalogProductListItemResponse {
  extendFields?: Array<CommerceOrderExtendFieldDefResponse> | null;
  description?: string | null;
  capabilityToVisitStatus?: CapabilityToVisitStatus | null;
  createdAt?: Int64 | null;
  imageKey?: string | null;
  imageUrl?: string | null;
  retailerId?: string | null;
  productType?: ProductType | null;
  archived?: boolean | null;
  title?: string | null;
  updatedAt?: Int64 | null;
  priceValue?: number | string | null;
  reviewStatus?: CatalogReviewStatus | null;
  brand?: string | null;
  productCondition?: ProductCondition | null;
  id?: Int64 | null;
  catalogId?: string | null;
  priceCurrency?: string | null;
  link?: string | null;
  availability?: ProductAvailability | null;
  metaProductId?: string | null;
  [key: string]: unknown;
}

export interface CatalogProductResponse {
  id?: Int64 | null;
  catalogId?: string | null;
  retailerId?: string | null;
  metaProductId?: string | null;
  title?: string | null;
  imageUrl?: string | null;
  imageKey?: string | null;
  productType?: ProductType | null;
  productCondition?: ProductCondition | null;
  brand?: string | null;
  description?: string | null;
  priceValue?: number | string | null;
  priceCurrency?: string | null;
  availability?: ProductAvailability | null;
  link?: string | null;
  reviewStatus?: CatalogReviewStatus | null;
  capabilityToVisitStatus?: CapabilityToVisitStatus | null;
  createdAt?: Int64 | null;
  updatedAt?: Int64 | null;
  extendFields?: Array<CommerceOrderExtendFieldDefResponse> | null;
  [key: string]: unknown;
}

export interface CatalogProductUploadResultMessage {
  taskId?: Int64 | null;
  storeId?: Int64 | null;
  catalogId?: string | null;
  total?: Int64 | null;
  success?: Int64 | null;
  fail?: Int64 | null;
  failFileUrl?: string | null;
  errorMsg?: string | null;
  [key: string]: unknown;
}

export interface CatalogUnbindWabaOpenRequest {
  whatsappBusinessAccountId?: string | null;
  [key: string]: unknown;
}

export interface CategoryNodeResponse {
  id?: string | null;
  name?: string | null;
  system?: boolean | null;
  description?: string | null;
  children?: Array<CategoryNodeResponse> | null;
  [key: string]: unknown;
}

export interface CommerceOrderExtendFieldDefResponse {
  fieldKey?: string | null;
  fieldName?: string | null;
  required?: boolean | null;
  sort?: Int64 | null;
  value?: string | null;
  [key: string]: unknown;
}

export interface ConversionCustomData {
  value?: number | string | null;
  currency?: string | null;
  content_name?: string | null;
  content_category?: string | null;
  content_ids?: Array<string> | null;
  num_items?: number | null;
  order_id?: string | null;
  search_string?: string | null;
  status?: string | null;
  [key: string]: unknown;
}

export interface ConversionEvent {
  event_name?: string | null;
  event_time?: Int64 | null;
  event_id?: string | null;
  event_source_url?: string | null;
  action_source?: string | null;
  opt_out?: boolean | null;
  user_data?: ConversionUserData | null;
  custom_data?: ConversionCustomData | null;
  data_processing_options?: Array<string> | null;
  data_processing_options_country?: number | null;
  data_processing_options_state?: number | null;
  [key: string]: unknown;
}

export interface ConversionUserData {
  em?: Array<string> | null;
  ph?: Array<string> | null;
  fn?: Array<string> | null;
  ln?: Array<string> | null;
  ge?: Array<string> | null;
  db?: Array<string> | null;
  ct?: Array<string> | null;
  st?: Array<string> | null;
  zp?: Array<string> | null;
  country?: Array<string> | null;
  external_id?: Array<string> | null;
  client_ip_address?: string | null;
  client_user_agent?: string | null;
  fbc?: string | null;
  fbp?: string | null;
  subscription_id?: string | null;
  fb_login_id?: string | null;
  lead_id?: string | null;
  ctwa_clid?: string | null;
  [key: string]: unknown;
}

export interface CreateCategoryRequest {
  name?: string | null;
  parentCategoryId?: string | null;
  [key: string]: unknown;
}

export interface CreateStaticTagRequest {
  name?: string | null;
  categoryId?: string | null;
  valueType?: TagValueType | null;
  description?: string | null;
  values?: Array<CreateStaticTagRequestValuesItem> | null;
  syncToCustomerService?: boolean | null;
  [key: string]: unknown;
}

export interface CreateStaticTagRequestValuesItem {
  value?: string | null;
  description?: string | null;
  [key: string]: unknown;
}

export interface CtwaConversionPostbackParam {
  data?: Array<ConversionEvent> | null;
  test_event_code?: string | null;
  [key: string]: unknown;
}

export interface CtwaConversionPostbackRequest {
  wabaId?: string | null;
  datasetId?: string | null;
  param?: CtwaConversionPostbackParam | null;
  [key: string]: unknown;
}

export interface CtwaConversionResult {
  events_received?: number | null;
  messages?: Array<Record<string, unknown>> | null;
  fbtrace_id?: string | null;
  [key: string]: unknown;
}

export interface CtwaDatasetCreateParam {
  dataset_name?: string | null;
  [key: string]: unknown;
}

export interface CtwaDatasetCreateRequest {
  wabaId?: string | null;
  param?: CtwaDatasetCreateParam | null;
  [key: string]: unknown;
}

export interface CustomerChannelUserAddRequest {
  userMobile?: string | null;
  whatsappMobile?: string | null;
  userId?: string | null;
  tags?: Array<CustomerChannelUserAddTagRequest> | null;
  [key: string]: unknown;
}

export interface CustomerChannelUserAddTagRequest {
  tagName?: string | null;
  tagValue?: string | null;
  replaceIfPresent?: boolean | null;
  [key: string]: unknown;
}

export interface CustomerChatStatusRequest {
  customerId?: string | null;
  [key: string]: unknown;
}

export interface CustomerChatStatusResponse {
  chatStatus?: CustomerChatStatus | null;
  [key: string]: unknown;
}

export interface CustomerConsultantAllocationAddUserRequest {
  userMobile?: string | null;
  whatsappMobile?: string | null;
  allocationUser?: string | null;
  labelList?: Array<string> | null;
  [key: string]: unknown;
}

export interface DeleteCategoryRequest {
  categoryId?: string | null;
  [key: string]: unknown;
}

export interface DeleteStaticTagRequest {
  tagId?: string | null;
  [key: string]: unknown;
}

export interface DownloadUrlResult {
  downloadUrl?: string | null;
  [key: string]: unknown;
}

export interface EmptyResult {

  [key: string]: unknown;
}

export interface EventTaskIdResult {
  eventTaskId?: Int64 | null;
  [key: string]: unknown;
}

export interface FlowMonitoringWebhookData {
  type?: string | null;
  msg?: FlowMonitoringWebhookDataMsg | null;
  [key: string]: unknown;
}

export interface FlowMonitoringWebhookDataMsg {
  object?: string | null;
  entry?: Array<FlowMonitoringWebhookDataMsgEntryItem> | null;
  [key: string]: unknown;
}

export interface FlowMonitoringWebhookDataMsgEntryItem {
  id?: string | null;
  time?: Int64 | null;
  changes?: Array<FlowMonitoringWebhookDataMsgEntryItemChangesItem> | null;
  [key: string]: unknown;
}

export interface FlowMonitoringWebhookDataMsgEntryItemChangesItem {
  field?: string | null;
  value?: unknown | null;
  [key: string]: unknown;
}

export interface FlowsClientErrorRateWebhookPayload {
  object?: string | null;
  entry?: Array<FlowsClientErrorRateWebhookPayloadEntryItem> | null;
  [key: string]: unknown;
}

export interface FlowsClientErrorRateWebhookPayloadEntryItem {
  id?: string | null;
  changes?: Array<FlowsClientErrorRateWebhookPayloadEntryItemChangesItem> | null;
  [key: string]: unknown;
}

export interface FlowsClientErrorRateWebhookPayloadEntryItemChangesItem {
  field?: string | null;
  value?: unknown | null;
  [key: string]: unknown;
}

export interface FlowsStatusChangeWebhookPayload {
  object?: string | null;
  entry?: Array<FlowsStatusChangeWebhookPayloadEntryItem> | null;
  [key: string]: unknown;
}

export interface FlowsStatusChangeWebhookPayloadEntryItem {
  id?: string | null;
  changes?: Array<FlowsStatusChangeWebhookPayloadEntryItemChangesItem> | null;
  [key: string]: unknown;
}

export interface FlowsStatusChangeWebhookPayloadEntryItemChangesItem {
  field?: string | null;
  value?: FlowsStatusChangeWebhookPayloadEntryItemChangesItemValue | null;
  [key: string]: unknown;
}

export interface FlowsStatusChangeWebhookPayloadEntryItemChangesItemValue {
  flow_id?: string | null;
  flow_name?: string | null;
  old_status?: string | null;
  new_status?: string | null;
  event_time?: Int64 | null;
  [key: string]: unknown;
}

export interface FlowStatusChangeWebhookData {
  type?: string | null;
  msg?: FlowStatusChangeWebhookDataMsg | null;
  [key: string]: unknown;
}

export interface FlowStatusChangeWebhookDataMsg {
  object?: string | null;
  entry?: Array<FlowStatusChangeWebhookDataMsgEntryItem> | null;
  [key: string]: unknown;
}

export interface FlowStatusChangeWebhookDataMsgEntryItem {
  id?: string | null;
  time?: Int64 | null;
  changes?: Array<FlowStatusChangeWebhookDataMsgEntryItemChangesItem> | null;
  [key: string]: unknown;
}

export interface FlowStatusChangeWebhookDataMsgEntryItemChangesItem {
  field?: string | null;
  value?: FlowStatusChangeWebhookDataMsgEntryItemChangesItemValue | null;
  [key: string]: unknown;
}

export interface FlowStatusChangeWebhookDataMsgEntryItemChangesItemValue {
  flow_id?: string | null;
  old_status?: string | null;
  new_status?: string | null;
  event?: string | null;
  message?: string | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookData {
  type?: string | null;
  msg?: FlowUserReplyWebhookDataMsg | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsg {
  object?: string | null;
  entry?: Array<FlowUserReplyWebhookDataMsgEntryItem> | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItem {
  id?: string | null;
  changes?: Array<FlowUserReplyWebhookDataMsgEntryItemChangesItem> | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItemChangesItem {
  field?: string | null;
  value?: FlowUserReplyWebhookDataMsgEntryItemChangesItemValue | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItemChangesItemValue {
  metadata?: unknown | null;
  messaging_product?: string | null;
  messages?: Array<FlowUserReplyWebhookDataMsgEntryItemChangesItemValueMessagesItem> | null;
  contacts?: Array<FlowUserReplyWebhookDataMsgEntryItemChangesItemValueContactsItem> | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItemChangesItemValueContactsItem {
  user_id?: string | null;
  profile?: FlowUserReplyWebhookDataMsgEntryItemChangesItemValueContactsItemProfile | null;
  wa_id?: string | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItemChangesItemValueContactsItemProfile {
  name?: string | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItemChangesItemValueMessagesItem {
  context?: FlowUserReplyWebhookDataMsgEntryItemChangesItemValueMessagesItemContext | null;
  interactive?: FlowUserReplyWebhookDataMsgEntryItemChangesItemValueMessagesItemInteractive | null;
  from?: string | null;
  id?: string | null;
  type?: string | null;
  from_user_id?: string | null;
  timestamp?: string | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItemChangesItemValueMessagesItemContext {
  from?: string | null;
  id?: string | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItemChangesItemValueMessagesItemInteractive {
  type?: string | null;
  nfm_reply?: FlowUserReplyWebhookDataMsgEntryItemChangesItemValueMessagesItemInteractiveNfmReply | null;
  [key: string]: unknown;
}

export interface FlowUserReplyWebhookDataMsgEntryItemChangesItemValueMessagesItemInteractiveNfmReply {
  name?: string | null;
  response_json?: string | null;
  body?: string | null;
  [key: string]: unknown;
}

export interface GraphIdRef {
  id?: string | null;
  [key: string]: unknown;
}

export type LongIdResult = Int64 | { id?: Int64 };
export interface MediaFileDownloadRequest {
  mediaId?: string | null;
  mineType?: string | null;
  [key: string]: unknown;
}

export interface MediaFileUploadRequest {
  fileUrl?: string | null;
  type?: string | null;
  phoneNumberId?: string | null;
  [key: string]: unknown;
}

export interface MediaIdResult {
  id?: string | null;
  [key: string]: unknown;
}

export interface MessageIdResult {
  id?: Int64 | null;
  [key: string]: unknown;
}

export interface MessageOriginBatchQueryRequest {
  channel?: Channel | null;
  channelMids?: Array<string> | null;
  [key: string]: unknown;
}

export interface MessageOriginBatchQueryResponse {
  list?: Array<MessageOriginItemResponse> | null;
  [key: string]: unknown;
}

export interface MessageOriginItemResponse {
  channelMid?: string | null;
  sendSceneCode?: MessageOriginType | null;
  sendScene?: string | null;
  sendSceneBusinessId?: string | null;
  [key: string]: unknown;
}

export interface MetaCursors {
  before?: string | null;
  after?: string | null;
  [key: string]: unknown;
}

export interface MetaPaging {
  cursors?: MetaCursors | null;
  [key: string]: unknown;
}

export interface MetaSuccessResult {
  success?: boolean | null;
  messaging_product?: string | null;
  [key: string]: unknown;
}

export interface MetaValidationError {
  error_code?: string | null;
  error_description?: string | null;
  possible_solution?: string | null;
  message?: string | null;
  pointers?: Array<Record<string, unknown>> | null;
  [key: string]: unknown;
}

export interface MoveCategoryRequest {
  categoryId?: string | null;
  beforeCategoryId?: string | null;
  parentCategoryId?: string | null;
  [key: string]: unknown;
}

export interface MoveStaticTagRequest {
  tagId?: string | null;
  beforeTagId?: string | null;
  categoryId?: string | null;
  [key: string]: unknown;
}

export interface OpenCatalogListResponse {
  businessId?: string | null;
  catalogs?: Array<CatalogItemDTO> | null;
  [key: string]: unknown;
}

export interface PageBlockRequest {
  blockId?: Int64 | null;
  blockName?: string | null;
  sceneTypeList?: Array<SceneType> | null;
  messageType?: string | null;
  wabaIdList?: Array<string> | null;
  groupIdList?: Array<string> | null;
  templateName?: string | null;
  createTimeStart?: Int64 | null;
  createTimeEnd?: Int64 | null;
  updateTimeStart?: Int64 | null;
  updateTimeEnd?: Int64 | null;
  pageNo?: Int64 | null;
  pageSize?: Int64 | null;
  includeTotal?: boolean | null;
  [key: string]: unknown;
}

export interface PageResult<T = unknown> {
  total?: Int64 | null;
  list?: Array<T> | null;
  [key: string]: unknown;
}

export interface PreviewUrlResult {
  previewUrl?: string | null;
  [key: string]: unknown;
}

export interface ProductBatchImportOpenRequest {
  catalogId?: string | null;
  url?: string | null;
  [key: string]: unknown;
}

export interface ProductBatchImportTaskDetailOpenRequest {
  taskId?: Int64 | null;
  [key: string]: unknown;
}

export interface ProductBatchImportTaskDetailOpenResponse {
  id?: Int64 | null;
  finishTime?: Int64 | null;
  importFileName?: string | null;
  total?: Int64 | null;
  success?: Int64 | null;
  fail?: Int64 | null;
  errorDetailStoryKey?: string | null;
  errorDetailUrl?: string | null;
  status?: Int64 | null;
  statusDesc?: string | null;
  [key: string]: unknown;
}

export interface ProductCreateOpenRequest {
  catalogId?: string | null;
  title?: string | null;
  productType?: ProductType | null;
  productCondition?: ProductCondition | null;
  availability?: ProductAvailability | null;
  description?: string | null;
  brand?: string | null;
  imageUrl?: string | null;
  link?: string | null;
  priceValue?: number | string | null;
  priceCurrency?: string | null;
  [key: string]: unknown;
}

export interface ProductDeleteOpenRequest {
  catalogId?: string | null;
  retailerId?: string | null;
  [key: string]: unknown;
}

export interface ProductDetailOpenRequest {
  catalogId?: string | null;
  retailerId?: string | null;
  [key: string]: unknown;
}

export interface ProductEditOpenRequest {
  productType?: ProductType | null;
  imageUrl?: string | null;
  retailerId?: string | null;
  priceCurrency?: string | null;
  description?: string | null;
  title?: string | null;
  priceValue?: number | string | null;
  brand?: string | null;
  productCondition?: ProductCondition | null;
  catalogId?: string | null;
  updateExtendFields?: boolean | null;
  link?: string | null;
  availability?: ProductAvailability | null;
  [key: string]: unknown;
}

export interface ProductListOpenRequest {
  catalogId?: string | null;
  title?: string | null;
  retailerId?: string | null;
  availability?: ProductAvailability | null;
  reviewStatus?: CatalogReviewStatus | null;
  capabilityToVisitStatus?: CapabilityToVisitStatus | null;
  pageNum?: Int64 | null;
  pageSize?: Int64 | null;
  [key: string]: unknown;
}

export interface SendBlockMessageRequest {
  blockId?: Int64 | null;
  to?: string | null;
  sentAccount?: string | null;
  blockParamList?: Array<BlockDynamicParamResponse> | null;
  [key: string]: unknown;
}

export interface SendMessageRequest {
  phoneNumberId?: string | null;
  param?: WhatsappMessageSendParam | null;
  [key: string]: unknown;
}

export type StringIdResult = string | { id?: string };
export interface TagDetailResponse {
  tagId?: string | null;
  name?: string | null;
  description?: string | null;
  categoryId?: string | null;
  categoryName?: string | null;
  valueType?: TagValueType | null;
  syncToCustomerService?: boolean | null;
  createTime?: Int64 | null;
  updateTime?: Int64 | null;
  tagValues?: Array<TagValueResponse> | null;
  system?: boolean | null;
  [key: string]: unknown;
}

export interface TagStaticListItemResponse {
  tagId?: string | null;
  name?: string | null;
  description?: string | null;
  valueType?: TagValueType | null;
  categoryId?: string | null;
  syncToCustomerService?: boolean | null;
  system?: boolean | null;
  createTime?: Int64 | null;
  updateTime?: Int64 | null;
  [key: string]: unknown;
}

export interface TagUserItemResponse {
  userId?: string | null;
  channel?: Channel | null;
  [key: string]: unknown;
}

export interface TagUsersPageResponse {
  list?: Array<TagUserItemResponse> | null;
  lastId?: string | null;
  hasMore?: boolean | null;
  [key: string]: unknown;
}

export interface TagUsersQueryRequest {
  tagValueId?: string | null;
  lastId?: string | null;
  pageSize?: Int64 | null;
  [key: string]: unknown;
}

export interface TagValueResponse {
  id?: string | null;
  value?: string | null;
  description?: string | null;
  [key: string]: unknown;
}

export interface UpdateCategoryRequest {
  categoryId?: string | null;
  name?: string | null;
  [key: string]: unknown;
}

export interface UpdateStaticTagRequest {
  tagId?: string | null;
  name?: string | null;
  categoryId?: string | null;
  description?: string | null;
  values?: Array<UpdateStaticTagRequestValuesItem> | null;
  syncToCustomerService?: boolean | null;
  updateTime?: Int64 | null;
  [key: string]: unknown;
}

export interface UpdateStaticTagRequestValuesItem {
  id?: string | null;
  value?: string | null;
  description?: string | null;
  [key: string]: unknown;
}

export interface UserSeatResponse {
  id?: Int64 | null;
  phone?: string | null;
  email?: string | null;
  [key: string]: unknown;
}

export interface UserSeatSessionRequest {
  seatId?: Int64 | null;
  customerId?: string | null;
  [key: string]: unknown;
}

export interface UserTagResponse {
  tagId?: string | null;
  name?: string | null;
  system?: boolean | null;
  syncToCustomerService?: boolean | null;
  description?: string | null;
  tagValues?: Array<UserTagValueResponse> | null;
  [key: string]: unknown;
}

export interface UserTagsAttachRequest {
  userId?: string | null;
  channel?: Channel | null;
  valueId?: string | null;
  [key: string]: unknown;
}

export interface UserTagsDetachRequest {
  userId?: string | null;
  channel?: Channel | null;
  valueId?: string | null;
  [key: string]: unknown;
}

export interface UserTagValueResponse {
  valueId?: string | null;
  value?: string | null;
  description?: string | null;
  [key: string]: unknown;
}

export interface WebhookAccountChangeCallback {
  type?: string | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WebhookActionCallback {
  type?: string | null;
  msg?: WebhookActionMsg | null;
  [key: string]: unknown;
}

export interface WebhookActionMsg {
  actionType?: WebhookActionType | null;
  receiver?: string | null;
  value?: string | null;
  [key: string]: unknown;
}

export interface WebhookCallsConnectCallback {
  type?: string | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WebhookCallsPermissionReplyCallback {
  type?: string | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WebhookCallsStatusCallback {
  type?: string | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WebhookCallsTerminateCallback {
  type?: string | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WebhookCatalogProductBatchImportCallback {
  id?: Int64 | null;
  type?: string | null;
  msg?: CatalogProductUploadResultMessage | null;
  [key: string]: unknown;
}

export interface WebhookCatalogProductCreateCallback {
  id?: Int64 | null;
  type?: string | null;
  msg?: CatalogProductHandleResultMessage | null;
  [key: string]: unknown;
}

export interface WebhookCatalogProductDeleteCallback {
  id?: Int64 | null;
  type?: string | null;
  msg?: CatalogProductHandleResultMessage | null;
  [key: string]: unknown;
}

export interface WebhookCatalogProductUpdateCallback {
  id?: Int64 | null;
  type?: string | null;
  msg?: CatalogProductHandleResultMessage | null;
  [key: string]: unknown;
}

export interface WebhookContentCallback {
  type?: string | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WebhookContentForBClientCallback {
  type?: string | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WebhookSendErrorCallback {
  type?: string | null;
  messageId?: Int64 | null;
  msg?: WebhookSendErrorMsg | null;
  [key: string]: unknown;
}

export interface WebhookSendErrorMsg {
  receiver?: string | null;
  reason?: string | null;
  [key: string]: unknown;
}

export interface WebhookSendSuccessCallback {
  type?: string | null;
  messageId?: Int64 | null;
  msg?: WebhookSendSuccessMsg | null;
  [key: string]: unknown;
}

export interface WebhookSendSuccessMsg {
  receiver?: string | null;
  mid?: string | null;
  [key: string]: unknown;
}

export interface WebhookStatusChangeCallback {
  type?: string | null;
  messageId?: Int64 | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WebhookTemplateChangeCallback {
  type?: string | null;
  msg?: unknown | null;
  [key: string]: unknown;
}

export interface WhatAppAccountBusinessInfoRequest {
  whatsappBusinessAccountId?: string | null;
  fields?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatAppAccountBusinessManagerInfoRequest {
  businessId?: string | null;
  fields?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatAppAccountPhoneNumbersRequest {
  whatsappBusinessAccountId?: string | null;
  fields?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatAppAccountProfileRequest {
  phoneNumberId?: string | null;
  fields?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatsAppAccountPhoneVerifyCheckRequest {
  phoneNumberId?: string | null;
  code?: string | null;
  [key: string]: unknown;
}

export interface WhatsAppAccountPhoneVerifySendRequest {
  language?: string | null;
  phoneNumberId?: string | null;
  codeMethod?: string | null;
  [key: string]: unknown;
}

export interface WhatsappAccountProfileResult {
  data?: Array<WhatsappBusinessProfileItem> | null;
  [key: string]: unknown;
}

export interface WhatsAppAccountProfileUpdateRequest {
  phoneNumberId?: string | null;
  param?: WhatsappBusinessProfileUpdateParam | null;
  [key: string]: unknown;
}

export interface WhatsappAnalyticsActivitiesResult {
  data?: Array<WhatsappAnalyticsActivitiesResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappAnalyticsActivitiesResultDataItem {
  id?: string | null;
  event_time?: Int64 | null;
  event_type?: string | null;
  [key: string]: unknown;
}

export interface WhatsappAnalyticsQueryRequest {
  wabaId?: string | null;
  field?: WhatsappAnalyticsField | null;
  start?: Int64 | null;
  end?: Int64 | null;
  granularity?: string | null;
  phoneNumbers?: string | null;
  countryCodes?: string | null;
  productTypes?: string | null;
  metricTypes?: string | null;
  pricingTypes?: string | null;
  pricingCategories?: string | null;
  dimensions?: string | null;
  conversationCategories?: string | null;
  conversationTypes?: string | null;
  conversationDirections?: string | null;
  directions?: string | null;
  templateIds?: string | null;
  templateGroupIds?: string | null;
  groupIds?: string | null;
  productType?: string | null;
  useWabaTimezone?: boolean | null;
  [key: string]: unknown;
}

export interface WhatsappAnalyticsQueryResult {
  conversation_analytics?: WhatsappAnalyticsQueryResultConversationAnalytics | null;
  id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappAnalyticsQueryResultConversationAnalytics {
  data?: Array<WhatsappAnalyticsQueryResultConversationAnalyticsDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappAnalyticsQueryResultConversationAnalyticsDataItem {
  start?: Int64 | null;
  end?: Int64 | null;
  conversation?: Int64 | null;
  [key: string]: unknown;
}

export interface WhatsappBusinessAccountResult {
  message_template_namespace?: string | null;
  name?: string | null;
  timezone_id?: string | null;
  currency?: string | null;
  id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappBusinessManagerResult {
  id?: string | null;
  name?: string | null;
  [key: string]: unknown;
}

export interface WhatsappBusinessProfileItem {
  address?: string | null;
  profile_picture_url?: string | null;
  messaging_product?: string | null;
  about?: string | null;
  description?: string | null;
  email?: string | null;
  websites?: Array<string> | null;
  vertical?: string | null;
  [key: string]: unknown;
}

export interface WhatsappBusinessProfileUpdateParam {
  messaging_product?: string | null;
  about?: string | null;
  address?: string | null;
  description?: string | null;
  email?: string | null;
  vertical?: WhatsappBusinessVertical | null;
  websites?: Array<string> | null;
  profile_picture_handle?: string | null;
  [key: string]: unknown;
}

export interface WhatsappCallingAcceptParam {
  messaging_product?: string | null;
  call_id?: string | null;
  action?: string | null;
  session?: WhatsappCallingSession | null;
  [key: string]: unknown;
}

export interface WhatsappCallingAcceptRequest {
  phoneNumberId?: string | null;
  param?: WhatsappCallingAcceptParam | null;
  [key: string]: unknown;
}

export interface WhatsappCallingConnectParam {
  messaging_product?: string | null;
  to?: string | null;
  recipient?: string | null;
  action?: string | null;
  session?: WhatsappCallingSession | null;
  [key: string]: unknown;
}

export interface WhatsappCallingConnectRequest {
  phoneNumberId?: string | null;
  param?: WhatsappCallingConnectParam | null;
  [key: string]: unknown;
}

export interface WhatsappCallingPreAcceptParam {
  messaging_product?: string | null;
  call_id?: string | null;
  action?: string | null;
  session?: WhatsappCallingSession | null;
  [key: string]: unknown;
}

export interface WhatsappCallingPreAcceptRequest {
  phoneNumberId?: string | null;
  param?: WhatsappCallingPreAcceptParam | null;
  [key: string]: unknown;
}

export interface WhatsappCallingRejectParam {
  messaging_product?: string | null;
  call_id?: string | null;
  action?: string | null;
  [key: string]: unknown;
}

export interface WhatsappCallingRejectRequest {
  phoneNumberId?: string | null;
  param?: WhatsappCallingRejectParam | null;
  [key: string]: unknown;
}

export interface WhatsappCallingResult {
  success?: boolean | null;
  messaging_product?: string | null;
  calls?: Array<WhatsappCallRef> | null;
  [key: string]: unknown;
}

export interface WhatsappCallingSession {
  sdp_type?: SdpType | null;
  sdp?: string | null;
  [key: string]: unknown;
}

export interface WhatsappCallingTerminateParam {
  messaging_product?: string | null;
  call_id?: string | null;
  action?: string | null;
  [key: string]: unknown;
}

export interface WhatsappCallingTerminateRequest {
  phoneNumberId?: string | null;
  param?: WhatsappCallingTerminateParam | null;
  [key: string]: unknown;
}

export interface WhatsappCallRef {
  id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappContactAddress {
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  country?: string | null;
  country_code?: string | null;
  type?: string | null;
  [key: string]: unknown;
}

export interface WhatsappContactUrl {
  url?: string | null;
  type?: string | null;
  [key: string]: unknown;
}

export interface WhatsappContactEmail {
  email?: string | null;
  type?: string | null;
  [key: string]: unknown;
}

export interface WhatsappContactPhone {
  phone?: string | null;
  type?: string | null;
  wa_id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappContactOrg {
  company?: string | null;
  department?: string | null;
  title?: string | null;
  [key: string]: unknown;
}

export interface WhatsappContactName {
  formatted_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  middle_name?: string | null;
  suffix?: string | null;
  prefix?: string | null;
  [key: string]: unknown;
}

export interface WhatsappContactObject {
  name?: WhatsappContactName | null;
  birthday?: string | null;
  org?: WhatsappContactOrg | null;
  phones?: Array<WhatsappContactPhone> | null;
  emails?: Array<WhatsappContactEmail> | null;
  urls?: Array<WhatsappContactUrl> | null;
  addresses?: Array<WhatsappContactAddress> | null;
  [key: string]: unknown;
}

export interface WhatsappContextObject {
  message_id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappFlowAssetItem {
  name?: string | null;
  asset_type?: string | null;
  download_url?: string | null;
  id?: string | null;
  url?: string | null;
  [key: string]: unknown;
}

export interface WhatsappFlowAssetsResult {
  data?: Array<WhatsappFlowAssetItem> | null;
  paging?: MetaPaging | null;
  [key: string]: unknown;
}

export interface WhatsappFlowCreateParam {
  name?: string | null;
  categories?: Array<WhatsappFlowCategory> | null;
  flow_json?: string | null;
  endpoint_uri?: string | null;
  publish?: boolean | null;
  clone_flow_id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappFlowCreateRequest {
  wabaId?: string | null;
  param?: WhatsappFlowCreateParam | null;
  [key: string]: unknown;
}

export interface WhatsappFlowEncryptionResult {
  business_public_key?: string | null;
  business_public_key_status?: string | null;
  [key: string]: unknown;
}

export interface WhatsappFlowEncryptionSetRequest {
  phoneNumberId?: string | null;
  businessPublicKey?: string | null;
  [key: string]: unknown;
}

export interface WhatsappFlowHealthEntity {
  entity_type?: string | null;
  id?: string | null;
  can_send_message?: string | null;
  errors?: Array<MetaValidationError> | null;
  [key: string]: unknown;
}

export interface WhatsappFlowHealthStatus {
  can_send_message?: string | null;
  entities?: Array<WhatsappFlowHealthEntity> | null;
  [key: string]: unknown;
}

export interface WhatsappFlowIdRequest {
  flowId?: string | null;
  [key: string]: unknown;
}

export interface WhatsappFlowItem {
  id?: string | null;
  name?: string | null;
  status?: string | null;
  categories?: Array<string> | null;
  validation_errors?: Array<MetaValidationError> | null;
  update_time?: string | null;
  json_version?: string | null;
  data_api_version?: string | null;
  endpoint_uri?: string | null;
  preview?: WhatsappFlowPreviewInfo | null;
  whatsapp_business_account?: GraphIdRef | null;
  application?: GraphIdRef | null;
  health_status?: WhatsappFlowHealthStatus | null;
  [key: string]: unknown;
}

export interface WhatsappFlowListResult {
  data?: Array<WhatsappFlowItem> | null;
  paging?: MetaPaging | null;
  [key: string]: unknown;
}

export interface WhatsappFlowMigrateRequest {
  destinationWabaId?: string | null;
  sourceWabaId?: string | null;
  sourceFlowNames?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatsappFlowMutationResult {
  id?: string | null;
  success?: boolean | null;
  validation_errors?: Array<MetaValidationError> | null;
  [key: string]: unknown;
}

export interface WhatsappFlowPreviewInfo {
  preview_url?: string | null;
  expires_at?: string | null;
  [key: string]: unknown;
}

export interface WhatsappFlowPreviewResult {
  id?: string | null;
  preview?: WhatsappFlowPreviewInfo | null;
  [key: string]: unknown;
}

export interface WhatsappFlowUpdateParam {
  name?: string | null;
  categories?: Array<WhatsappFlowCategory> | null;
  endpoint_uri?: string | null;
  [key: string]: unknown;
}

export interface WhatsappFlowUpdateRequest {
  flowId?: string | null;
  param?: WhatsappFlowUpdateParam | null;
  [key: string]: unknown;
}

export interface WhatsappGroupCreateRequest {
  phoneId?: string | null;
  param?: unknown | null;
  [key: string]: unknown;
}

export interface WhatsappGroupCreateResult {
  messaging_product?: string | null;
  groups?: Array<WhatsappGroupCreateResultGroupsItem> | null;
  [key: string]: unknown;
}

export interface WhatsappGroupCreateResultGroupsItem {
  id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupDeleteRequest {
  groupId?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupDetailsResult {
  id?: string | null;
  subject?: string | null;
  participants?: WhatsappGroupDetailsResultParticipants | null;
  [key: string]: unknown;
}

export interface WhatsappGroupDetailsResultParticipants {
  data?: Array<unknown> | null;
  [key: string]: unknown;
}

export interface WhatsappGroupInviteLinkResetParam {
  messaging_product?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupInviteLinkResetRequest {
  groupId?: string | null;
  param?: WhatsappGroupInviteLinkResetParam | null;
  [key: string]: unknown;
}

export interface WhatsappGroupInviteLinkResetResult {
  invite_link?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupInviteLinkResult {
  invite_link?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupJoinRequestApproveParam {
  messaging_product?: string | null;
  join_requests?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatsappGroupJoinRequestApproveRequest {
  groupId?: string | null;
  param?: WhatsappGroupJoinRequestApproveParam | null;
  [key: string]: unknown;
}

export interface WhatsappGroupJoinRequestListResult {
  data?: Array<WhatsappGroupJoinRequestListResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappGroupJoinRequestListResultDataItem {
  phone_number?: string | null;
  requested_at?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupJoinRequestRejectParam {
  messaging_product?: string | null;
  join_requests?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatsappGroupJoinRequestRejectRequest {
  groupId?: string | null;
  param?: WhatsappGroupJoinRequestRejectParam | null;
  [key: string]: unknown;
}

export interface WhatsappGroupListResult {
  data?: Array<WhatsappGroupListResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappGroupListResultDataItem {
  id?: string | null;
  subject?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupParticipantsRemoveParam {
  messaging_product?: string | null;
  participants?: Array<WhatsappGroupParticipantsRemoveParamParticipantsItem> | null;
  [key: string]: unknown;
}

export interface WhatsappGroupParticipantsRemoveParamParticipantsItem {
  user?: string | null;
  user_id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupParticipantsRemoveRequest {
  groupId?: string | null;
  param?: WhatsappGroupParticipantsRemoveParam | null;
  [key: string]: unknown;
}

export interface WhatsappGroupUpdateParam {
  messaging_product?: string | null;
  subject?: string | null;
  description?: string | null;
  [key: string]: unknown;
}

export interface WhatsappGroupUpdateRequest {
  groupId?: string | null;
  param?: WhatsappGroupUpdateParam | null;
  [key: string]: unknown;
}

export interface WhatsappInteractiveRow {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  [key: string]: unknown;
}

export interface WhatsappInteractiveSection {
  title?: string | null;
  rows?: Array<WhatsappInteractiveRow> | null;
  [key: string]: unknown;
}

export interface WhatsappInteractiveButton {
  type?: string | null;
  title?: string | null;
  id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappInteractiveAction {
  button?: string | null;
  buttons?: Array<WhatsappInteractiveButton> | null;
  sections?: Array<WhatsappInteractiveSection> | null;
  name?: string | null;
  catalog_id?: string | null;
  product_retailer_id?: string | null;
  [key: string]: unknown;
}

export interface WhatsappInteractiveFooter {
  text?: string | null;
  [key: string]: unknown;
}

export interface WhatsappInteractiveBody {
  text?: string | null;
  [key: string]: unknown;
}

export interface WhatsappInteractiveHeader {
  type?: string | null;
  text?: string | null;
  image?: WhatsappMediaObject | null;
  video?: WhatsappMediaObject | null;
  document?: WhatsappMediaObject | null;
  [key: string]: unknown;
}

export interface WhatsappInteractiveObject {
  type?: string | null;
  header?: WhatsappInteractiveHeader | null;
  body?: WhatsappInteractiveBody | null;
  footer?: WhatsappInteractiveFooter | null;
  action?: WhatsappInteractiveAction | null;
  [key: string]: unknown;
}

export interface WhatsappLocationObject {
  longitude?: number | null;
  latitude?: number | null;
  name?: string | null;
  address?: string | null;
  [key: string]: unknown;
}

export interface WhatsappMediaDeleteRequest {
  mediaId?: string | null;
  [key: string]: unknown;
}

export interface WhatsappMediaObject {
  id?: string | null;
  link?: string | null;
  caption?: string | null;
  filename?: string | null;
  [key: string]: unknown;
}

export interface WhatsappMessageParameter {
  type?: string | null;
  text?: string | null;
  payload?: string | null;
  parameter_name?: string | null;
  coupon_code?: string | null;
  image?: WhatsappMediaObject | null;
  video?: WhatsappMediaObject | null;
  document?: WhatsappMediaObject | null;
  audio?: WhatsappMediaObject | null;
  [key: string]: unknown;
}

export interface WhatsappMessageSendParam {
  messaging_product?: string | null;
  recipient_type?: WhatsappRecipientType | null;
  to?: string | null;
  recipient?: string | null;
  type?: WhatsappMessageType | null;
  context?: WhatsappContextObject | null;
  biz_opaque_callback_data?: string | null;
  text?: WhatsappTextObject | null;
  image?: WhatsappMediaObject | null;
  audio?: WhatsappMediaObject | null;
  document?: WhatsappMediaObject | null;
  video?: WhatsappMediaObject | null;
  sticker?: WhatsappMediaObject | null;
  location?: WhatsappLocationObject | null;
  contacts?: Array<WhatsappContactObject> | null;
  interactive?: WhatsappInteractiveObject | null;
  template?: WhatsappTemplateSendObject | null;
  reaction?: WhatsappReactionObject | null;
  [key: string]: unknown;
}

export interface WhatsappMessageTemplateParam {
  name?: string | null;
  language?: string | null;
  category?: WhatsappTemplateCategory | null;
  parameter_format?: string | null;
  allow_category_change?: boolean | null;
  library_template_name?: string | null;
  message_send_ttl_seconds?: number | null;
  components?: Array<WhatsappTemplateComponent> | null;
  [key: string]: unknown;
}

export interface WhatsappPhoneNumberItem {
  display_phone_number?: string | null;
  name_status?: string | null;
  certificate?: string | null;
  verified_name?: string | null;
  new_name_status?: string | null;
  id?: string | null;
  code_verification_status?: string | null;
  status?: string | null;
  profile_picture_url?: string | null;
  [key: string]: unknown;
}

export interface WhatsappPhoneNumbersResult {
  data?: Array<WhatsappPhoneNumberItem> | null;
  paging?: MetaPaging | null;
  [key: string]: unknown;
}

export interface WhatsappPhoneQualityQueryResult {
  id?: string | null;
  quality_rating?: string | null;
  throughput?: WhatsappPhoneQualityQueryResultThroughput | null;
  [key: string]: unknown;
}

export interface WhatsappPhoneQualityQueryResultThroughput {
  level?: string | null;
  [key: string]: unknown;
}

export interface WhatsappPreverifiedPhoneListResult {
  data?: Array<WhatsappPreverifiedPhoneListResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappPreverifiedPhoneListResultDataItem {
  id?: string | null;
  display_phone_number?: string | null;
  code_verification_status?: string | null;
  [key: string]: unknown;
}

export interface WhatsappReactionObject {
  message_id?: string | null;
  emoji?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateArchiveParam {
  hsm_ids?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateArchiveRequest {
  wabaId?: string | null;
  param?: WhatsappTemplateArchiveParam | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateArchiveResult {
  archived_templates?: Array<string> | null;
  failed_templates?: WhatsappTemplateArchiveResultFailedTemplates | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateArchiveResultFailedTemplates {

  [key: string]: unknown;
}

export interface WhatsappTemplateButton {
  type?: string | null;
  text?: string | null;
  url?: string | null;
  phone_number?: string | null;
  example?: Array<string> | null;
  otp_type?: string | null;
  autofill_text?: string | null;
  package_name?: string | null;
  signature_hash?: string | null;
  flow_id?: string | null;
  flow_action?: string | null;
  navigate_screen?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateCompareResult {
  data?: Array<WhatsappTemplateCompareResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateCompareResultDataItem {
  metric?: string | null;
  order_by_relative_metric?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateComponent {
  type?: string | null;
  text?: string | null;
  format?: string | null;
  example?: WhatsappTemplateExample | null;
  buttons?: Array<WhatsappTemplateButton> | null;
  add_security_recommendation?: boolean | null;
  code_expiration_minutes?: number | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateCreateRequest {
  whatsappBusinessAccountId?: string | null;
  param?: WhatsappMessageTemplateParam | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateCreateResult {
  id?: string | null;
  category?: string | null;
  status?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateDeleteRequest {
  whatsappBusinessAccountId?: string | null;
  name?: string | null;
  hsmId?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateDetailsResult {
  id?: string | null;
  name?: string | null;
  status?: string | null;
  category?: string | null;
  language?: string | null;
  components?: Array<unknown> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateEditRequest {
  whatsappBusinessAccountId?: string | null;
  templateId?: string | null;
  param?: WhatsappMessageTemplateParam | null;
  [key: string]: unknown;
}

export interface WhatsappNamedParamExample {
  param_name?: string | null;
  example?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateExample {
  header_text?: Array<string> | null;
  header_handle?: Array<string> | null;
  body_text?: Array<Array<string>> | null;
  body_text_named_params?: Array<WhatsappNamedParamExample> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateFileUploadResult {
  headerHandle?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateFileUplodRequest {
  whatsappBusinessAccountId?: string | null;
  fileUrl?: string | null;
  fileType?: string | null;
  fileLength?: Int64 | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupCreateRequest {
  wabaId?: string | null;
  param?: unknown | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupDeleteRequest {
  templateGroupId?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupDetailsResult {
  id?: string | null;
  name?: string | null;
  status?: string | null;
  whatsapp_business_templates?: WhatsappTemplateGroupDetailsResultWhatsappBusinessTemplates | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupDetailsResultWhatsappBusinessTemplates {
  data?: Array<unknown> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupListResult {
  data?: Array<WhatsappTemplateGroupListResultDataItem> | null;
  paging?: WhatsappTemplateGroupListResultPaging | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupListResultDataItem {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  status?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupListResultPaging {
  cursors?: WhatsappTemplateGroupListResultPagingCursors | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupListResultPagingCursors {
  after?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateGroupUpdateRequest {
  templateGroupId?: string | null;
  param?: unknown | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateInsightsEnableRequest {
  wabaId?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateItem {
  id?: string | null;
  name?: string | null;
  language?: string | null;
  category?: string | null;
  status?: string | null;
  parameter_format?: string | null;
  components?: Array<WhatsappTemplateComponent> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateLanguageObject {
  code?: string | null;
  policy?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateLibraryRequest {
  category?: string | null;
  search?: string | null;
  topic?: string | null;
  usecase?: string | null;
  industry?: string | null;
  language?: string | null;
  name?: string | null;
  limit?: Int64 | null;
  after?: string | null;
  before?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateLibraryResult {
  data?: Array<WhatsappTemplateLibraryResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateLibraryResultDataItem {
  name?: string | null;
  language?: string | null;
  category?: string | null;
  topic?: string | null;
  usecase?: string | null;
  industry?: Array<string> | null;
  components?: Array<unknown> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateMigrateParam {
  source_waba_id?: string | null;
  page_number?: Int64 | null;
  count?: Int64 | null;
  template_ids?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateMigrateRequest {
  destinationWabaId?: string | null;
  param?: WhatsappTemplateMigrateParam | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateMigrateResult {
  migrated_templates?: Array<string> | null;
  failed_templates?: Array<unknown> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplatePreviewRequest {
  wabaId?: string | null;
  category?: string | null;
  languages?: string | null;
  addSecurityRecommendation?: boolean | null;
  codeExpirationMinutes?: Int64 | null;
  buttonTypes?: string | null;
  businessName?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplatePreviewResult {
  data?: Array<WhatsappTemplatePreviewResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplatePreviewResultDataItem {
  body?: string | null;
  buttons?: Array<WhatsappTemplatePreviewResultDataItemButtonsItem> | null;
  footer?: string | null;
  language?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplatePreviewResultDataItemButtonsItem {
  autofill_text?: string | null;
  text?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateQueryRequest {
  whatsappBusinessAccountId?: string | null;
  accessToken?: string | null;
  before?: string | null;
  after?: string | null;
  fields?: Array<string> | null;
  limit?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateQueryResponse {
  before?: string | null;
  after?: string | null;
  accessToken?: string | null;
  data?: Array<WhatsappTemplateItem> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateSendComponent {
  type?: string | null;
  sub_type?: string | null;
  index?: string | null;
  parameters?: Array<WhatsappMessageParameter> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateSendObject {
  name?: string | null;
  language?: WhatsappTemplateLanguageObject | null;
  components?: Array<WhatsappTemplateSendComponent> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateUnarchiveParam {
  hsm_ids?: Array<string> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateUnarchiveRequest {
  wabaId?: string | null;
  param?: WhatsappTemplateUnarchiveParam | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateUnarchiveResult {
  unarchived_templates?: Array<string> | null;
  failed_templates?: WhatsappTemplateUnarchiveResultFailedTemplates | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateUnarchiveResultFailedTemplates {

  [key: string]: unknown;
}

export interface WhatsappTemplateUpsertParam {
  name?: string | null;
  languages?: Array<string> | null;
  category?: string | null;
  components?: Array<unknown> | null;
  message_send_ttl_seconds?: Int64 | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateUpsertRequest {
  wabaId?: string | null;
  param?: WhatsappTemplateUpsertParam | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateUpsertResult {
  data?: Array<WhatsappTemplateUpsertResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappTemplateUpsertResultDataItem {
  id?: string | null;
  language?: string | null;
  status?: string | null;
  [key: string]: unknown;
}

export interface WhatsappTextObject {
  preview_url?: boolean | null;
  body?: string | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageCreateParam {
  name?: string | null;
  welcomeMessageSequence?: unknown | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageCreateRequest {
  wabaId?: string | null;
  param?: WhatsappWelcomeMessageCreateParam | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageDeleteRequest {
  wabaId?: string | null;
  sequenceId?: string | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageListResult {
  data?: Array<WhatsappWelcomeMessageListResultDataItem> | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageListResultDataItem {
  id?: string | null;
  name?: string | null;
  welcome_message_sequence?: WhatsappWelcomeMessageListResultDataItemWelcomeMessageSequence | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageListResultDataItemWelcomeMessageSequence {
  text?: string | null;
  autofill_message?: WhatsappWelcomeMessageListResultDataItemWelcomeMessageSequenceAutofillMessage | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageListResultDataItemWelcomeMessageSequenceAutofillMessage {
  content?: string | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageUpdateParam {
  sequenceId?: string | null;
  name?: string | null;
  welcomeMessageSequence?: unknown | null;
  [key: string]: unknown;
}

export interface WhatsappWelcomeMessageUpdateRequest {
  wabaId?: string | null;
  param?: WhatsappWelcomeMessageUpdateParam | null;
  [key: string]: unknown;
}
