# Meetbot OpenAPI Node.js SDK

支持 JavaScript 和 TypeScript，提供内容、消息、模板、客户、账号、标签、业务同步、Flow、Catalog、通话、群组、欢迎消息及分析接口，以及 Webhook 解析和分发。

## 环境与依赖

Node.js 24+，推荐 Node.js 26 LTS；使用 npm 管理包、TypeScript 7 编译并生成类型声明。HTTP 和 multipart 使用 Node.js 标准库，无第三方运行时依赖。采用 ESM 包格式。

## 本地安装

在 SDK 目录执行：

```shell
npm install
npm run build
```

在应用目录引用本地 SDK：

```shell
npm install ../meetbot-openapi-node-sdk
```

## 快速开始

```javascript
import { MeetbotClient } from '@meetbot/openapi-node-sdk';

const client = new MeetbotClient({ apiKey: process.env.MEETBOT_API_KEY });
const groups = await client.blocks.listGroups();
for (const group of groups ?? []) {
  console.log(group.groupId, group.groupName);
}
```

默认地址 `https://openapi.meetbot.com`，鉴权头 `APIKEY`，请求总超时 60 秒。构造参数支持 `baseUrl`、`timeoutMs`、`httpAgent` 和 `httpsAgent`；调用方拥有自定义 Agent 的生命周期。接口调用末尾可传入 `{ signal, timeoutMs }`，用于取消和单次超时。SDK 不自动重试或跟随重定向。

## 参数与类型

请求使用普通对象，属性名对应 JSON 协议字段。TypeScript 类型和枚举均从包入口导出。模块入口例如 `client.messages`、`client.templates`、`client.flows`，完整列表见 [API 索引](docs/api-reference.md)。

```typescript
import { MeetbotClient, type PageBlockRequest } from '@meetbot/openapi-node-sdk';

const client = new MeetbotClient({ apiKey: process.env.MEETBOT_API_KEY ?? '' });
const request: PageBlockRequest = { pageNo: 1, pageSize: 20, includeTotal: true };
const page = await client.blocks.pageList(request);
```

接口直接返回响应 `result`，没有结果时返回 `null`。JSON 对象中的未知字段会保留。多个位置参数的查询接口可传 `null` 省略某个参数；对象字段为 `undefined` 时不参与 JSON 序列化，`null` 会显式发送。发送 WhatsApp 原生消息和更新商业资料时，SDK 为 param 默认设置 `messaging_product: 'whatsapp'`。

超出 JavaScript 安全整数范围的响应 ID 自动保留为十进制字符串。请求中的大整数 ID 请传字符串，SDK 会拒绝不安全的 number；不要先把 ID 转成 number 再转字符串。接口模型使用 `Int64 = number | string`。

内容预览接口 `generatePreviewUrl` 支持 GET JSON body。Flow 上传示例：

```javascript
import { readFile } from 'node:fs/promises';

const result = await client.flows.updateJson('flow-id', {
  filename: 'flow.json',
  content: await readFile('./flow.json'),
});
```

上传内容为 `Uint8Array` 或 Buffer，默认上传和响应大小限制为 64 MiB，通过 `maxUploadBytes`、`maxResponseBytes` 配置。

## 异常处理

`MeetbotHttpError` 提供 `statusCode`、`headers`、`responseBody`；`MeetbotApiError` 提供 `code`、`message`、`traceId`、`responseBody`。网络和响应解析错误使用 `MeetbotError`。响应正文可能包含业务数据，记录日志时应脱敏。

## Webhook

```javascript
import { dispatchWebhook } from '@meetbot/openapi-node-sdk';

await dispatchWebhook(requestBody, {
  async onSendSuccess(event) {
    // 处理发送成功通知。
  },
  async onUnhandled(event) {
    // 处理未知事件。
  },
});
```

`parseWebhook` 可单独解析事件。应用自行实现 Webhook 鉴权、去重及 HTTP 应答。
