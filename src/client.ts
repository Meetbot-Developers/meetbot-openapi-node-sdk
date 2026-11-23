import { HttpTransport, type ClientOptions } from './http.js';
import { BlockApi } from './api/BlockApi.js';
import { MessageApi } from './api/MessageApi.js';
import { TemplateApi } from './api/TemplateApi.js';
import { CustomerApi } from './api/CustomerApi.js';
import { AccountApi } from './api/AccountApi.js';
import { TagApi } from './api/TagApi.js';
import { BizSyncApi } from './api/BizSyncApi.js';
import { FlowApi } from './api/FlowApi.js';
import { CatalogApi } from './api/CatalogApi.js';
import { CallingApi } from './api/CallingApi.js';
import { GroupApi } from './api/GroupApi.js';
import { WelcomeMessageApi } from './api/WelcomeMessageApi.js';
import { AnalyticsApi } from './api/AnalyticsApi.js';

export class MeetbotClient {
  readonly blocks: BlockApi;
  readonly messages: MessageApi;
  readonly templates: TemplateApi;
  readonly customers: CustomerApi;
  readonly accounts: AccountApi;
  readonly tags: TagApi;
  readonly bizSync: BizSyncApi;
  readonly flows: FlowApi;
  readonly catalogs: CatalogApi;
  readonly calling: CallingApi;
  readonly groups: GroupApi;
  readonly welcomeMessages: WelcomeMessageApi;
  readonly analytics: AnalyticsApi;
  constructor(options: ClientOptions) {
    const http = new HttpTransport(options);
    this.blocks = new BlockApi(http);
    this.messages = new MessageApi(http);
    this.templates = new TemplateApi(http);
    this.customers = new CustomerApi(http);
    this.accounts = new AccountApi(http);
    this.tags = new TagApi(http);
    this.bizSync = new BizSyncApi(http);
    this.flows = new FlowApi(http);
    this.catalogs = new CatalogApi(http);
    this.calling = new CallingApi(http);
    this.groups = new GroupApi(http);
    this.welcomeMessages = new WelcomeMessageApi(http);
    this.analytics = new AnalyticsApi(http);
  }
}
