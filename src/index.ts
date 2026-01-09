import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";

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

const jsDisableTypeChecked = {
	files: ["**/*.js"],
	extends: [ts.configs.disableTypeChecked]
};

export default defineConfig([
	eslintignore,
	baseConfig,
	typeCheckedConfig,
	jsDisableTypeChecked
]);
