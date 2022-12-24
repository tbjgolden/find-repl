#!/usr/bin/env node
/* eslint-disable no-console */

import { findRepl } from "../lib";

const [_cmd, _fileName, from, to, ...inFiles] = process.argv;

if (!from || to === undefined) {
  console.log("USAGE:");
  console.log("  find-repl \\");
  console.log("    string-to-search-for \\ # (or regex:/js-regex-to-search-for/i)");
  console.log("    string-to-replace-with \\");
  console.log("    [glob-of-files-to-search-in] # (optional; default all files known to git)");
  console.log();
  console.log("EXAMPLES:");
  console.log("  find-repl string-to-find string-to-replace-with '**/file-matcher-glob.ts'");
  console.log("  find-repl regex:\\/\\\\bfoo\\\\b\\/ bar");
  process.exit(1);
} else {
  if (inFiles.length > 1) {
    console.log("glob of files must be passed to find-repl as a single arg");
    console.log("  is your shell expanding it? perhaps encase it in single quotes? '**/*.json'");
    process.exit(1);
  }
  findRepl(from, to, inFiles[0]).catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
}
