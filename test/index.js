/**
 * @copyright 2017-present, Charlike Mike Reagent (https://i.am.charlike.online)
 * @license Apache-2.0
 */

import test from 'asia';
import getMentions from '../src/index';

test('returns array with objects like { handle, mention, index }', (t) => {
  const mentions = getMentions('foo @quxie, and @bar  yeah');

  t.ok(Array.isArray(mentions));
  t.deepEqual(mentions, [
    { handle: '@quxie', mention: 'quxie', index: 3 },
    { handle: '@bar', mention: 'bar', index: 15 },
  ]);
});
