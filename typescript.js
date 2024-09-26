import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";

export default {
	"files": [
		"**/*.ts",
	],
	"plugins": {
		"@typescript-eslint": ts
	},
	"languageOptions": {
		"parser": tsParser,
		"parserOptions": {
			"project": ["tsconfig.json"]
		}
	},
	"rules": {
		...ts.configs["recommended-requiring-type-checking"].rules,
		...ts.configs["stylistic-type-checked"].rules,
		"camelcase": "off",
		"indent": "off",
		"no-undef": "off",
		"no-underscore-dangle": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-unused-vars": ["warn", {
			"vars": "all",
			"args": "none"
		}],
		"@typescript-eslint/prefer-optional-chain": "off",
		"@typescript-eslint/strict-boolean-expressions": "error",
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
		]
	}
};
