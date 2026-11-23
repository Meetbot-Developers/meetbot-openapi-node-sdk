import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { MeetbotClient } from '../dist/index.js';

const fixtures = JSON.parse(readFileSync(new URL('./fixtures/contracts.json', import.meta.url)));
const modules = JSON.parse(readFileSync(new URL('./fixtures/modules.json', import.meta.url)));

for (const fixture of fixtures) {
  test(fixture.operationId, async () => {
    let received;
    const server = createServer(async (req, res) => {
      const chunks = []; for await (const chunk of req) chunks.push(chunk);
      received = { method: req.method, url: new URL(req.url, 'http://localhost'), body: Buffer.concat(chunks).toString() };
      res.end(JSON.stringify({ code: 0, result: fixture.result }));
    });
    server.listen(0, '127.0.0.1'); await once(server, 'listening');
    try {
      const client = new MeetbotClient({ apiKey: 'test-key', baseUrl: `http://127.0.0.1:${server.address().port}` });
      const result = await client[modules[fixture.api]][fixture.method](...fixture.argValues);
      assert.deepEqual(result, fixture.result);
      assert.equal(received.method, fixture.verb);
      assert.equal(received.url.pathname, fixture.path);
      assert.deepEqual(Object.fromEntries(received.url.searchParams), Object.fromEntries(Object.entries(fixture.query).map(([key, value]) => [key, String(value)])));
      if (fixture.body !== null) assert.deepEqual(JSON.parse(received.body), fixture.body);
    } finally { await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve())); }
  });
}
