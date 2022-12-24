# find-repl

![npm](https://img.shields.io/npm/v/find-repl)
![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Ftbjgolden%2Ffind-repl%2Fmain%2Fcoverage.json&label=coverage&query=$.total.lines.pct&color=brightgreen&suffix=%25)
![npm type definitions](https://img.shields.io/npm/types/find-repl)
![license](https://img.shields.io/npm/l/find-repl)
[![install size](https://packagephobia.com/badge?p=find-repl)](https://packagephobia.com/result?p=find-repl)

Find and replace text in your project files ✍️

- does not modify files that git is ignoring
- will replace all instances in a file, not just the first
- supports regex in both CLI and API
- can pass in a glob to scope the files to be searched/modified
- **zero dependencies, tiny footprint**

## Install

This package is available from the `npm` registry.

```sh
npm install find-repl
```

## Usage (CLI)

When running directly from the CLI, run with `npx find-repl`.

```txt
USAGE:
  find-repl \
    string-to-search-for \ # (or regex:/js-regex-to-search-for/i)
    string-to-replace-with \
    [glob-of-files-to-search-in] # (optional; default all files known to git)

EXAMPLES:
  find-repl string-to-find string-to-replace-with '**/file-matcher-glob.ts'
  find-repl regex:\/\\bfoo\\b\/ bar
```

## API

Supports JavaScript + TypeScript:

```ts
import { findRepl } from "find-repl";

await findRepl(/\bLorem\s+ipsum\b/, "Loremus ipsumus", "**/*.md");
```

Can also be imported via `require("find-repl")`.

## Contributing

GitHub issues / PRs welcome.

Dev environment requires:

- node >= 16.14.0
- npm >= 6.8.0
- git >= 2.11

## Licence

Apache-2.0
