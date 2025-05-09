# iltools-frontend-interview

[![NPM version](https://img.shields.io/npm/v/iltools-frontend-interview.svg?style=flat)](https://npmjs.org/package/iltools-frontend-interview)
[![NPM downloads](http://img.shields.io/npm/dm/iltools-frontend-interview.svg?style=flat)](https://npmjs.org/package/iltools-frontend-interview)

前端面试题

## Usage

First, introduce css file:

```ts
import 'iltools-frontend-interview/dist/style.css';
```

Then, introduce components:

```html
<script setup lang="ts">
  import { Foo, Bar } from 'iltools-frontend-interview';
</script>
```

## Options

TODO

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor

# Test
$ pnpm test

# Coverage
$ pnpm test:cov

# Lint
$ pnpm lint
```

## LICENSE

MIT
