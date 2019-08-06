[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](http://makeapullrequest.com)

# fp-luhn

> Functional Implementation of the Luhn Algorithm. No variable declaration, No mutation. A simple, lightweight implementation using composition. Used for testing a credit cards checksum value. [Most credit cards and many government identification numbers use the algorithm as a simple method of distinguishing valid numbers from mistyped or otherwise incorrect numbers](https://en.wikipedia.org/wiki/Luhn_algorithm).

## Install

Yarn:

```sh
yarn add fp-luhn
```

NPM:

```sh
npm i fp-luhn
```

## Hindley–Milner
### // luhn :: Number -> Boolean

## Usage

> Accepts either a number or numeric string.

```
import luhn from 'fp-luhn'

luhn(4916737743057301) // true

luhn('4916737743057301') // true

```