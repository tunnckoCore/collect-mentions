/**
 * @copyright 2017-present, Charlike Mike Reagent (https://i.am.charlike.online)
 * @license Apache-2.0
 */

import assert from 'node:assert/strict';
import { test } from 'bun:test';

import collectMentions from './index.ts';

test('returns array with objects like { handle, mention, index }', () => {
  const mentions = collectMentions('foo @quxie, and @bar  yeah');

  assert.ok(Array.isArray(mentions));
  assert.deepEqual(mentions, [
    { handle: '@quxie', mention: 'quxie', index: 3 },
    { handle: '@bar', mention: 'bar', index: 15 },
  ]);
});

test('should support mentions including dot', () => {
  const arr = collectMentions('some @ok.bar yeah', true);

  assert.deepEqual(arr, [{ handle: '@ok.bar', mention: 'ok.bar', index: 4 }]);
});
