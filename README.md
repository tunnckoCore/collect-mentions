# collect-mentions [![npm version][npmv-img]][npmv-url] [![License][license-img]][license-url] [![Libera Manifesto][libera-manifesto-img]][libera-manifesto-url]

[npmv-url]: https://www.npmjs.com/package/collect-mentions
[npmv-img]: https://badgen.net/npm/v/collect-mentions?icon=npm
[license-url]: https://github.com/tunnckoCore/collect-mentions/blob/master/LICENSE
[license-img]: https://badgen.net/npm/license/collect-mentions
[libera-manifesto-url]: https://liberamanifesto.com
[libera-manifesto-img]: https://badgen.net/badge/libera/manifesto/grey
[prs-welcome-img]: https://badgen.net/badge/PRs/welcome/green
[prs-welcome-url]: http://makeapullrequest.com
[last-commit-img]: https://badgen.net/github/last-commit/tunnckoCore/collect-mentions
[last-commit-url]: https://github.com/tunnckoCore/collect-mentions/commits/master
[codestyle-url]: https://github.com/airbnb/javascript
[codestyle-img]: https://badgen.net/badge/code%20style/airbnb%20%2B%20prettier/ff5a5f?icon=airbnb

[![Code style][codestyle-img]][codestyle-url]
[![bunning](https://github.com/tunnckoCore/collect-mentions/actions/workflows/ci.yml/badge.svg)](https://github.com/tunnckoCore/collect-mentions/actions/workflows/ci.yml)
[![Make A Pull Request][prs-welcome-img]][prs-welcome-url]
[![Time Since Last Commit][last-commit-img]][last-commit-url]

<!-- When logo is needed
<p align="center">
  <a href="https://github.com/username/repo">
    <img src="./logo.png">
  </a>
</p>
<br>
-->

> Collect mentions from a given text string, using battle-tested [mentions-regex][] package

<div id="thetop"></div>

If you have any _how-to_ kind of questions, please read the [Contributing Guide](./CONTRIBUTING.md)
and [Code of Conduct](./CODE_OF_CONDUCT.md) documents.  
For bugs reports and feature requests, [please create an issue][open-issue-url] or ping
[@tunnckoCore](https://twitter.com/tunnckoCore) at Twitter.

[![Conventional Commits][ccommits-img]][ccommits-url]
[![PayPal Author Support][paypal-donate-img]][paypal-donate-url]
[![Share Love Tweet][shareb]][shareu] [![NPM Downloads Weekly][downloads-weekly-img]][npmv-url]
[![NPM Downloads Monthly][downloads-monthly-img]][npmv-url]
[![NPM Downloads Total][downloads-total-img]][npmv-url]

<!-- Project is [semantically](https://semver.org) & automatically released on
[CircleCI][codecoverage-url] with [new-release][] and its
[New Release](https://github.com/apps/new-release) GitHub App. -->

## Table of Contents

- [Install](#install)
- [API](#api)
  - [collectMentions](#collectmentions)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Users](#users)
- [License](#license)

## Install

This project requires [**Node.js**](https://nodejs.org) **>=20**. Install it using
[**yarn**](https://yarnpkg.com) or [**npm**](https://npmjs.com).  
_We highly recommend to use Yarn when you think to contribute to this project._

```bash
$ yarn add collect-mentions
```

## API

### [collectMentions](src/index.js#L37)

> Collect all mentions from string. Returns array of objects with properties
> `{ handle, mention, index }`.

**Params**

- `str` **{String}**: string to collect mentions from
- `dot` **{Boolean}**: if it is `true`, it will support mentions including dot
- `returns` **{Array}**: array of objects

**Example**

```js
import collectMentions from 'collect-mentions';

const mentions = collectMentions('foo @tunnckoCore and yeah @bar, right?');

console.log(mentions);
// => [
//   { handle: '@tunnckoCore', mention: 'tunnckoCore', index: 3 },
//   { handle: '@bar', mention: 'bar', index: 25 },
// ]

// If `dot` boolean is `true`
console.log(collectMentions('some @ok.bar yeah', true));
// => [{ handle: '@ok.bar', mention: 'ok.bar', index: 4 }]
```

**[back to top](#thetop)**

## Related Projects

Some of these projects are used here or were inspiration for this one, others are just related. So,
thanks for your existance!

- [asia](https://www.npmjs.com/package/asia): Blazingly fast, magical and minimalist testing
  framework, for Today and Tomorrow |
  [homepage](https://github.com/tunnckocore/asia#readme 'Blazingly fast, magical and minimalist testing framework, for Today and Tomorrow')
- [charlike](https://www.npmjs.com/package/charlike): Small, fast, simple and streaming project
  scaffolder for myself, but not… [more](https://github.com/tunnckoCore/charlike) |
  [homepage](https://github.com/tunnckoCore/charlike 'Small, fast, simple and streaming project scaffolder for myself, but not only. Supports hundreds of template engines through the @JSTransformers API or if you want custom `render` function passed through options')
- [gitcommit](https://www.npmjs.com/package/gitcommit): Lightweight and joyful `git commit`
  replacement. Conventional Commits compliant. |
  [homepage](https://github.com/tunnckoCore/gitcommit 'Lightweight and joyful `git commit` replacement. Conventional Commits compliant.')
- [new-release](https://www.npmjs.com/package/new-release): A stable alternative to
  [semantic-release][]. Only handles NPM publishing and nothing…
  [more](https://github.com/tunnckoCore/new-release#readme) |
  [homepage](https://github.com/tunnckoCore/new-release#readme 'A stable alternative to [semantic-release][]. Only handles NPM publishing and nothing more. For creating GitHub releases use the Semantic Release GitHub App')
- [xaxa](https://www.npmjs.com/package/xaxa): Zero-config linting, powered by few amazing unicorns,
  AirBnB & Prettier. |
  [homepage](https://github.com/tunnckocore/xaxa 'Zero-config linting, powered by few amazing unicorns, AirBnB & Prettier.')

**[back to top](#thetop)**

## Contributing

Please read the [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md)
documents for advices.  
For bugs reports and feature requests, [please create an issue][open-issue-url] or ping
[@tunnckoCore](https://twitter.com/tunnckoCore) at Twitter.

## Contributors

Thanks to the hard work of [these wonderful people](./CONTRIBUTORS.md) this project is alive and it
also follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.  
[Pull requests](https://github.com/tunnckoCore/contributing#opening-a-pull-request), stars and all
kind of [contributions](https://opensource.guide/how-to-contribute/#what-it-means-to-contribute) are
always welcome. :stars:

## Users

You can see who uses `collect-mentions` in the [USERS.md](./USERS.md) file. Please feel free adding
this file if it not exists.  
If you or your organization are using this project, consider adding yourself to the list of users.  
**Thank You!** :heart:

## License

Copyright (c) 2017-present, [Charlike Mike Reagent][author-link].  
Released under the [Apache-2.0 License][license-url].

---

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme),
v0.7.0, on July 25, 2018._

<!-- Front line badges -->

[ccommits-url]: https://conventionalcommits.org/
[ccommits-img]: https://badgen.net/badge/conventional%20commits/v1.0.0/dfb317
[new-release-url]: https://github.com/tunnckoCore/new-release
[new-release-img]: https://badgen.net/badge/semantically/released/05c5ff
[downloads-weekly-img]: https://badgen.net/npm/dw/collect-mentions
[downloads-monthly-img]: https://badgen.net/npm/dm/collect-mentions
[downloads-total-img]: https://badgen.net/npm/dt/collect-mentions
[paypal-donate-url]: https://paypal.me/tunnckoCore/10
[paypal-donate-img]: https://badgen.net/badge/$/support/purple
[shareu]:
  https://twitter.com/intent/tweet?text=https://github.com/tunnckocore/collect-mentions&via=tunnckoCore
[shareb]: https://badgen.net/badge/twitter/share/1da1f2
[open-issue-url]: https://github.com/tunnckocore/collect-mentions/issues/new
[author-link]: https://twitter.com/wgw_eth
[mentions-regex]: https://github.com/regexps/mentions-regex
[new-release]: https://github.com/tunnckoCore/new-release
[semantic-release]: https://github.com/semantic-release/semantic-release
