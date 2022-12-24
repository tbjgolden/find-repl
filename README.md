```sh
git clone https://github.com/tbjgolden/find-repl.git cool-package-name
cd cool-package-name
npm install
# One time init function to convert template to new project
npx xnr .scripts/name.ts
```

---

# find-repl

![banner](banner.svg)

![npm](https://img.shields.io/npm/v/find-repl)
![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftbjgolden%2Ffind-repl%2Fmain%2Fcoverage.json&label=coverage&query=$.total.lines.pct&color=brightgreen&suffix=%25)
![npm type definitions](https://img.shields.io/npm/types/find-repl)
![license](https://img.shields.io/npm/l/find-repl)
[![install size](https://packagephobia.com/badge?p=find-repl)](https://packagephobia.com/result?p=find-repl)

A npm library that does exactly what it says on the tin.

## Table of Contents

## Background

- Cover motivation.
- Cover abstract dependencies.
- Cover compatible versions of Node, npm and ECMAScript.
- Cover similar packages and alternatives.

## Install

This package is available from the `npm` registry.

```sh
npm install find-repl
```

## Usage

```sh
npx find-repl ...
```

Supports JavaScript + TypeScript:

```ts
import { foo } from "find-repl";

foo();
```

Can also be imported via `require("find-repl")`.

## API

...

## Credits

...

## Contributing

- State where users can ask questions.
- State whether PRs are accepted.
- List any requirements for contributing; for instance, having a sign-off on commits.

Dev environment requires:

- node >= 16.14.0
- npm >= 6.8.0
- git >= 2.11

## Licence

Apache-2.0
