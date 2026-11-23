import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { MeetbotClient, MeetbotHttpError, MeetbotApiError, dispatchWebhook } from '../dist/index.js';

async function withServer(handler, run) {
  const server = createServer(handler);
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  try { await run(new MeetbotClient({ apiKey: 'test-key', baseUrl: `http://127.0.0.1:${server.address().port}` })); }
  finally { await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve())); }
}
async function body(req) { const chunks = []; for await (const chunk of req) chunks.push(chunk); return Buffer.concat(chunks).toString(); }

test('group list preserves large integer IDs and extension fields', async () => {
  await withServer((req, res) => {
    assert.equal(req.headers.apikey, 'test-key');
    assert.equal(req.method, 'GET'); assert.equal(req.url, '/block/group/list');
    res.end('{"code":0,"result":[{"groupId":9223372036854775807,"groupName":"Example","extra":true}]}');
  }, async client => {
    const groups = await client.blocks.listGroups();
    assert.equal(groups[0].groupId, '9223372036854775807'); assert.equal(groups[0].extra, true);
  });
});

test('GET JSON body is transmitted', async () => {
  await withServer(async (req, res) => {
    assert.equal(req.method, 'GET'); assert.deepEqual(JSON.parse(await body(req)), { blockId: '123' });
    res.end('{"success":true,"result":{}}');
  }, client => client.blocks.generatePreviewUrl({ blockId: '123' }));
});

test('HTTP errors and business errors are distinct', async () => {
  await withServer((_req, res) => { res.writeHead(503); res.end('unavailable'); }, client => assert.rejects(client.blocks.listGroups(), MeetbotHttpError));
  await withServer((_req, res) => res.end('{"code":401,"message":"denied","traceId":"example"}'), client => assert.rejects(client.blocks.listGroups(), error => error instanceof MeetbotApiError && error.traceId === 'example'));
});

test('upload includes flowId and file content', async () => {
  await withServer(async (req, res) => {
    assert.equal(req.url, '/v1/flow/update/json?flowId=123');
    const data = await body(req); assert.match(data, /filename="flow.json"/); assert.match(data, /\{"version":"7.0"\}/);
    res.end('{"code":0,"result":{"success":true}}');
  }, client => client.flows.updateJson('123', { filename: 'flow.json', content: Buffer.from('{"version":"7.0"}') }));
});

test('unsafe integer requests are rejected', () => {
  const client = new MeetbotClient({ apiKey: 'test-key' });
  assert.throws(() => client.blocks.generatePreviewUrl({ blockId: Number.MAX_SAFE_INTEGER + 1 }), /decimal strings/);
});

test('unknown webhook is retained and dispatched', async () => {
  let event;
  await dispatchWebhook('{"type":"FUTURE","msg":{"custom":true}}', { onUnhandled(value) { event = value; } });
  assert.equal(event.msg.custom, true);
});
