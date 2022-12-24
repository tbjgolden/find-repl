import { readFile, writeFile } from "node:fs/promises";
import { execSync } from "node:child_process";
import { globToRegex } from "./glob";

const escapeStringForRegex = (str: string): string => {
  return str.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&");
};

const replaceAll = (str: string, from: string | RegExp, to: string) => {
  return from instanceof RegExp
    ? str.replace(from.global ? from : new RegExp(from.source, from.flags + "g"), to)
    : str.replace(new RegExp(escapeStringForRegex(from), "g"), to);
};

export const findRepl = async (
  find: string | RegExp,
  replace: string,
  inFilesMatching = "**/*"
): Promise<void> => {
  const fileMatcherRegex = globToRegex(inFilesMatching, "");
  for (const result of execSync("git ls-files --cached --others --exclude-standard")
    .toString()
    .split("\n")
    .filter(Boolean))
    try {
      if (fileMatcherRegex.test("./" + result)) {
        await writeFile(result, replaceAll(await readFile(result, "utf8"), find, replace));
      }
    } catch (error) {
      if (error instanceof Error) {
        if ("code" in error && error.code === "ENOENT") {
          continue;
        }
        throw error;
      }
    }
};
