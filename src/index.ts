import { defineConfig } from "eslint/config";
import baseConfig from "./base.js";
import typeCheckedConfig from "./typechecked.js";

const eslintignore = {
	ignores: [
		"**/build/**",
		"**/dist/**"
	]
};

export default defineConfig([
	eslintignore,
	baseConfig,
	typeCheckedConfig
]);
