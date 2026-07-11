import { ConfigObject } from "@eslint/core";
import ts from "typescript-eslint";

export default {
	files: [
		"**/*.ts"
	],
	plugins: {
		"@typescript-eslint": ts.plugin
	},
	languageOptions: {
		parser: ts.parser,
		parserOptions: {
			project: ["tsconfig.json"]
		}
	},
	extends: [
		"@typescript-eslint/recommended-type-checked",
		"@typescript-eslint/stylistic-type-checked"
	],
	rules: {
		"no-undef": "off",
		"no-underscore-dangle": "off",
		"no-unused-vars": "off",
		"prefer-const": "warn",
		"@typescript-eslint/class-literal-property-style": "warn",
		"@typescript-eslint/dot-notation": "warn",
		"@typescript-eslint/naming-convention": ["warn",
			{
				"selector": "default",
				"format": ["camelCase"]
			},
			{
				"selector": ["import"],
				"format": ["camelCase", "PascalCase"]
			},
			{
				"selector": ["variable", "accessor"],
				"format": ["camelCase", "UPPER_CASE"]
			},
			{
				"selector": ["parameter", "property"],
				"format": ["camelCase"],
				"leadingUnderscore": "allow"
			},
			{
				"selector": "classProperty",
				"modifiers": ["static", "readonly"],
				"format": ["camelCase", "PascalCase", "UPPER_CASE"],
				"leadingUnderscore": "forbid"
			},
			{
				"selector": "typeLike",
				"format": ["PascalCase"]
			},
			{
				"selector": "enumMember",
				"format": ["UPPER_CASE"]
			},
			{
				"selector": ["objectLiteralProperty", "objectLiteralMethod"],
				"format": null
			},
			{
				"selector": "interface",
				"format": ["PascalCase"],
				"custom": {
					"regex": "^I[A-Z]",
					"match": false
				}
			}
		],
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-floating-promises": ["error", {
			"allowForKnownSafeCalls": [
				{
					"from": "package",
					"package": "node:test",
					"name": ["suite", "test"]
				}
			]
		}],
		"@typescript-eslint/no-unnecessary-type-assertion": "warn",
		"@typescript-eslint/no-unused-vars": ["warn", {
			"vars": "all",
			"args": "none",
			"caughtErrors": "none"
		}],
		"@typescript-eslint/prefer-nullish-coalescing": "warn",
		"@typescript-eslint/prefer-optional-chain": "off",
		"@typescript-eslint/strict-boolean-expressions": ["error", {
			"allowNullableObject": false
		}]
	}
} as ConfigObject;
