/**
 * @copyright 2017-present, Charlike Mike Reagent (https://i.am.charlike.online)
 * @license Apache-2.0
 */

import test from 'asia';
import collectMentions from '../src/index';

test('returns array with objects like { handle, mention, index }', (t) => {
  const mentions = collectMentions('foo @quxie, and @bar  yeah');

  t.ok(Array.isArray(mentions));
  t.deepEqual(mentions, [
    { handle: '@quxie', mention: 'quxie', index: 3 },
    { handle: '@bar', mention: 'bar', index: 15 },
  ]);
});

test('should support mentions including dot', (t) => {
  const arr = collectMentions('some @ok.bar yeah', true);

  t.deepEqual(arr, [{ handle: '@ok.bar', mention: 'ok.bar', index: 4 }]);
});
