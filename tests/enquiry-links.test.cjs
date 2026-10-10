// [ADDED] Cover the previously broken email/newline encoding and bilingual handoff payloads.
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const source = fs.readFileSync(path.join(__dirname, '../src/lib/enquiry-links.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const moduleResult = { exports: {} };
new Function('exports', 'require', 'module', compiled)(moduleResult.exports, require, moduleResult);
const { createEnquiryLinks } = moduleResult.exports;
const contact = { email: 'restaurant@example.com', whatsappNumber: '918421102810' };
const details = {
  name: '  Asha & family  ', phone: '+91 99999 99999', email: 'asha+food@example.com',
  enquiryType: 'Bulk Order', date: '2026-10-20', message: 'नमस्कार!\nPoha & tea: 50% mild + extra lemon?',
};
test('WhatsApp and email decode to the same complete bilingual plaintext', () => {
  const links = createEnquiryLinks(details, contact);
  const text = new URL(links.whatsapp).searchParams.get('text');
  const body = new URL(links.email).searchParams.get('body');
  assert.equal(text, body);
  assert.ok(text.includes('Name: Asha & family\n'));
  assert.ok(text.includes('Email: asha+food@example.com\n'));
  assert.ok(text.includes('नमस्कार!\nPoha & tea: 50% mild + extra lemon?'));
});
test('email subject preserves reserved characters without adding query parameters', () => {
  const email = new URL(createEnquiryLinks(details, contact).email);
  assert.equal(email.pathname, contact.email);
  assert.equal(email.searchParams.get('subject'), 'Enquiry: Bulk Order from Asha & family');
  assert.deepEqual([...email.searchParams.keys()], ['subject', 'body']);
});
test('optional empty fields have explicit defaults and contact values are configurable', () => {
  const links = createEnquiryLinks({ ...details, email: '', date: '', message: '  ' }, { email: 'new@example.com', whatsappNumber: '911234567890' });
  assert.equal(new URL(links.whatsapp).pathname, '/911234567890');
  assert.equal(new URL(links.email).pathname, 'new@example.com');
  const text = new URL(links.whatsapp).searchParams.get('text');
  assert.ok(text.includes('Email: Not provided\n'));
  assert.ok(text.includes('Preferred date: Not specified\n'));
  assert.ok(text.includes('Message: I would like to enquire about your menu / bulk orders.'));
});
