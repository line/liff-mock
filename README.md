# LIFF Mock

LIFF Mock is a LIFF Plugin that make testing your LIFF app easy.

**※ LIFF Plugin feature is available since LIFF SDK v2.19.0.**

# Usage

## NPM

<!-- TODO: Update after the repository is made public -->

<!-- [example]() -->

<!-- npm url -->

```sh
$ npm install @line/liff-mock
```

```ts
import liff from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';

liff.use(new LiffMockPlugin());

liff.init({
  liffId: 'liff-xxxx',
  mock: true, // enable mock mode
});

const profile = await liff.getProfile();
// { displayName: 'Brown', userId: '123456789', statusMessage: 'hello' }
console.log(profile);
```

## CDN

<!-- TODO: Update after the repository is made public -->
<!-- [example]() -->

<!-- cdn url -->

<!-- ```html -->
<!-- in <head> tag -->
<!-- <script src="cdn url"></script> -->
<!-- ``` -->

```js
const liff = window.liff;
const liffMockPlugin = window.liffMock;

liff.use(new LiffMockPlugin());

liff.init({
  liffId: 'liff-xxxx',
  mock: true, // enable mock mode
});

const profile = await liff.getProfile();
// { displayName: 'Brown', userId: '123456789', statusMessage: 'hello' }
console.log(profile);
```

# API

## liff.$mock.set

Set mock data

```ts
type set = (
  data: Partial<MockData> | ((prev: Partial<MockData>) => Partial<MockData>)
) => void;
```

```js
const profile = await liff.getProfile();
// { displayName: 'Brown', userId: '123456789', statusMessage: 'hello' }
console.log(profile);

liff.$mock.set((p) => ({
  ...p,
  getProfile: { displayName: 'Cony', userId: '1111111' },
}));

const profile = await liff.getProfile();
// { displayName: 'Cony', userId: '1111111' }
console.log(profile);
```

## liff.$mock.clear

Restore default mock data

```ts
type clear: () => void;
```

```js
// liff.$mock.set(...)
const profile = await liff.getProfile();
// { displayName: 'Cony', userId: '1111111' }
console.log(profile);

liff.$mock.clear();

const profile = await liff.getProfile();
// { displayName: 'Brown', userId: '123456789', statusMessage: 'hello' }
console.log(profile);
```

# Example

<!-- WIP -->

# Contribution

<!-- TBD -->

```sh
$ nvm use
$ npm ci
```
