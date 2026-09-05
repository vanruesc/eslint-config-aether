import { defineConfig } from "eslint/config";
import baseConfig from "./base.js";
import typeCheckedConfig from "./typechecked.js";

const eslintignore = {
	ignores: [
		"**/build/**",
		"**/dist/**",
		"**/vendor/**",
		"**/lib/**",
		"**/libs/**"
	]
};

export default defineConfig([
	eslintignore,
	baseConfig,
	typeCheckedConfig
]);
