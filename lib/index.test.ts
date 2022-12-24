import { writeFile, readFile, rm } from "node:fs/promises";
import { findRepl } from ".";

const TEST_FILE = "a-21289128921.txt";
const TEST_FILE_2 = "b-21289128921.txt";

beforeAll(async () => {
  await writeFile(TEST_FILE, `foo\nbar\nbaz\n`);
  await writeFile(TEST_FILE_2, `bah\nbar\nbaz\n`);
});
afterAll(async () => {
  await rm(TEST_FILE);
  await rm(TEST_FILE_2);
});

test("find replace finds and replaces", async () => {
  await findRepl("foo", "baz", "**/*-21289128921.txt");
  expect(await readFile(TEST_FILE, "utf8")).toBe(`baz\nbar\nbaz\n`);
  await findRepl(/\nb/, " b", "**/*-21289128921.txt");
  expect(await readFile(TEST_FILE_2, "utf8")).toBe(`bah bar baz\n`);
});
