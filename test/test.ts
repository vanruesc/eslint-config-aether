import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "fs/promises";

describe("Aether Config", () => {

	it("produces the expected result when linting JavaScript files", async() => {

		const actual = await readFile("test/generated/test.js", "utf8");
		const expected = await readFile("test/expected/test.js", "utf8");

		assert.equal(actual, expected);

	});

	it("produces the expected result when linting TypeScript files", async() => {

		const actual = await readFile("test/generated/test.ts", "utf8");
		const expected = await readFile("test/expected/test.ts", "utf8");

		assert.equal(actual, expected);

	});

});
