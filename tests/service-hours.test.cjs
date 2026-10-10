// [ADDED] Observable service-window boundary coverage without an additional test framework.
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const source = fs.readFileSync(path.join(__dirname, '../src/lib/service-hours.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const moduleResult = { exports: {} };
new Function('exports', 'require', 'module', compiled)(moduleResult.exports, require, moduleResult);
const { getServingStatus } = moduleResult.exports;
const timings = {
  breakfast: '7:30 AM – 11:30 AM', lunch: '12:00 PM – 3:30 PM',
  evening: '4:00 PM – 9:30 PM', allDays: 'All days',
};

for (const [time, expected] of [
  ['07:29', 'Breakfast from 7:30 AM'], ['07:30', 'Breakfast is being served'],
  ['11:29', 'Breakfast is being served'], ['11:30', 'Lunch from 12:00 PM'],
  ['12:00', 'Lunch is being served'], ['15:29', 'Lunch is being served'],
  ['15:30', 'Evening snacks from 4:00 PM'], ['16:00', 'Evening snacks are being served'],
  ['21:29', 'Evening snacks are being served'], ['21:30', 'Breakfast from 7:30 AM tomorrow'],
  ['00:00', 'Breakfast from 7:30 AM'],
]) {
  test(`Asia/Kolkata service status at ${time}`, () => {
    assert.equal(getServingStatus(new Date(`2026-10-11T${time}:00+05:30`), timings), expected);
  });
}
test('uses restaurant timezone for a UTC instant', () => {
  assert.equal(getServingStatus(new Date('2026-10-11T02:00:00Z'), timings), 'Breakfast is being served');
});
test('updated configured windows change the status', () => {
  assert.equal(getServingStatus(new Date('2026-10-11T07:30:00+05:30'), { ...timings, breakfast: '8:00 AM – 11:30 AM' }), 'Breakfast from 8:00 AM');
});
test('malformed configured hours do not claim the kitchen is serving', () => {
  assert.equal(getServingStatus(new Date(), { ...timings, lunch: 'Call for hours' }), 'See our daily serving hours');
});
