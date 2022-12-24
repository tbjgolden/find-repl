import { ensureEndsWithSlash, escapeStringForRegex, globToRegex } from "./glob";

test("globToRegex", () => {
  expect(globToRegex(`./**/*.{ts,tsx}`).test(process.cwd() + "/wow/test.tsx")).toBe(true);
  expect(globToRegex(`./nothing/much.here`).test(process.cwd() + "/nothing/much.here")).toBe(true);
  expect(globToRegex(`./**/*.{ts,tsx}`).test("/wow/test.tsx")).toBe(false);
  expect(globToRegex(`./nothing/much.here`).test("/nothing/much.here")).toBe(false);
  expect(globToRegex(`./**/*.{ts,tsx}`).test(process.cwd() + "/wow/test.ts")).toBe(true);
  expect(globToRegex(`./**/*.{ts,tsx}`).test(process.cwd() + "/wow/test.t")).toBe(false);
  expect(globToRegex(`./**/*.{ts,tsx}`).test(process.cwd() + "/wow/foo/bar/test.ts")).toBe(true);
  expect(globToRegex(`./**/*.{ts,tsx}`).test(process.cwd() + "/a/.ts")).toBe(true);
  expect(globToRegex(`./**/*.{ts,tsx}`).test(process.cwd() + "/.ts")).toBe(true);
  expect(globToRegex(`./**/*.{ts,tsx}`).test(process.cwd() + "ss/.ts")).toBe(false);
  expect(globToRegex(`./**/*.{ts,tsx}`).test(process.cwd() + "/test.ts")).toBe(true);
  expect(globToRegex(`./**/{.keep,.*.tmp}`).test(process.cwd() + "/.keep")).toBe(true);
  expect(globToRegex(`./**/{.keep,.*.tmp}`).test(process.cwd() + "/.tmp")).toBe(false);
  expect(globToRegex(`./**/{.keep,.*.tmp}`).test(process.cwd() + "/.keep.temp")).toBe(false);
  expect(globToRegex(`./**/{.keep,.*.tmp}`).test(process.cwd() + "/.keep.tmp")).toBe(true);
  expect(globToRegex(`./**/{.keep,.*.tmp}`).test(process.cwd() + "/a/.hi.tmp")).toBe(true);
});

test("escapeStringForRegex", () => {
  expect(escapeStringForRegex(`///`)).toBe("///");
  expect(escapeStringForRegex(`\\`)).toBe("\\\\");
  expect(escapeStringForRegex(`hello.world*`)).toBe("hello\\.world\\*");
});

test("ensureEndsWithSlash", () => {
  expect(ensureEndsWithSlash("/hello/world")).toBe("/hello/world/");
  expect(ensureEndsWithSlash("/hello/world/")).toBe("/hello/world/");
  expect(ensureEndsWithSlash("/hello")).toBe("/hello/");
  expect(ensureEndsWithSlash("/")).toBe("/");
});
