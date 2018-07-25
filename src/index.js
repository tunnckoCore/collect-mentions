/**
 * @copyright 2017-present, Charlike Mike Reagent (https://i.am.charlike.online)
 * @license Apache-2.0
 */

import mentionsRegex from 'mentions-regex';

/**
 * > Collect all mentions from string. Returns array of objects
 * with properties `{ handle, mention, index }`.
 *
 * **Example**
 *
 * ```js
 * import collectMentions from 'collect-mentions';
 *
 * const mentions = collectMentions('foo @tunnckoCore and yeah @bar, right?')
 *
 * console.log(mentions)
 * // => [
 * //   { handle: '@tunnckoCore', mention: 'tunnckoCore', index: 3 },
 * //   { handle: '@bar', mention: 'bar', index: 25 },
 * // ]
 *
 * // If `dot` boolean is `true`
 * console.log(collectMentions('some @ok.bar yeah', true))
 * // => [{ handle: '@ok.bar', mention: 'ok.bar', index: 4 }]
 * ```
 *
 * @name  collectMentions
 * @param {String} `str` string to collect mentions from
 * @param {Boolean} `dot` if it is `true`, it will support mentions including dot
 * @returns {Array} array of objects
 * @api public
 */

export default function getMentions(str, dot) {
  const result = [];
  const regex = new RegExp(mentionsRegex(dot), 'g');
  let m = null;

  /* eslint-disable no-cond-assign */
  while ((m = regex.exec(str))) {
    result.push({ handle: m[0].trim(), mention: m[1], index: m.index });
  }

  return result;
}
