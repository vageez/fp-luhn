[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](http://makeapullrequest.com)

# fp-luhn

> Functional Implementation of the Luhn Algorithm. No variable declaration, No mutation. A simple, lightweight implementation using composition. Used for testing a credit cards checksum value. [Most credit cards and many government identification numbers use the algorithm as a simple method of distinguishing valid numbers from mistyped or otherwise incorrect numbers](https://en.wikipedia.org/wiki/Luhn_algorithm).


## Why another LUHN library
> The goal was to write a LUHN Algorithm using a functional programming paradigm. A series of composable lambas that are processed right to left. Not a single if / else statement. All branching is handled by ternary functions with implicit returns.

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
### // luhn :: Numeric String -> Boolean

## Usage

> Accepts a numeric string. Eg: '4111111111111111'

```
import luhn from 'fp-luhn'

luhn('4916737743057301') // true

```