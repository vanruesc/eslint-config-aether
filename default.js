import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default {
	"files": [
		"**/*.js",
		"**/*.ts",
	],
	"plugins": {
		"@stylistic": stylistic,
	},
	"languageOptions": {
		"globals": {
			...globals.browser,
			...globals.es2025,
			...globals.jquery,
			...globals.node,
			...globals.worker
		}
	},
	"rules": {
		...js.configs.recommended.rules,
		"array-bracket-spacing": ["warn", "never"],
		"block-spacing": ["warn", "always"],
		"brace-style": ["warn", "1tbs", {
			"allowSingleLine": true
		}],
		"camelcase": "off",
		"comma-dangle": ["warn", "never"],
		"comma-spacing": "warn",
		"comma-style": ["warn", "last"],
		"consistent-return": "error",
		"computed-property-spacing": ["warn", "never"],
		"curly": "warn",
		"dot-notation": "warn",
		"eol-last": ["warn", "always"],
		"eqeqeq": "error",
		"func-call-spacing": ["warn", "never"],
		"key-spacing": "warn",
		"keyword-spacing": ["warn", {
			"overrides": {
				"catch": { "after": false },
				"if": { "after": false },
				"for": { "after": false },
				"switch": { "after": false },
				"while": { "after": false },
			}
		}],
		"lines-between-class-members": ["warn", "always", {
			"exceptAfterSingleLine": true
		}],
		"max-len": ["warn", {
			"code": 120,
			"tabWidth": 2,
			"ignoreComments": true
		}],
		"new-cap": "error",
		"new-parens": "error",
		"no-array-constructor": "error",
		"no-alert": "warn",
		"no-caller": "error",
		"no-console": "off",
		"no-debugger": "warn",
		"no-else-return": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-semi": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "warn",
		"no-loop-func": "warn",
		"no-mixed-spaces-and-tabs": "error",
		"no-multiple-empty-lines": "warn",
		"no-multi-spaces": "warn",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-trailing-spaces": "warn",
		"no-undef-init": "error",
		"no-underscore-dangle": ["warn", {
			"allowAfterThis": true
		}],
		"no-unused-vars": ["warn", {
			"vars": "all",
			"args": "none"
		}],
		"no-var": "error",
		"no-whitespace-before-property": "warn",
		"object-curly-spacing": ["warn", "always"],
		"padded-blocks": ["warn", "always", {
			"allowSingleLineBlocks": true
		}],
		"quotes": ["warn", "double"],
		"semi-spacing": "warn",
		"space-before-blocks": ["warn", "always"],
		"space-before-function-paren": ["warn", "never"],
		"space-in-parens": ["warn", "never"],
		"space-infix-ops": "warn",
		"space-unary-ops": "warn",
		"spaced-comment": ["warn", "always"],
		"wrap-iife": "warn",
		"yoda": ["warn", "never"],
		"@stylistic/indent": ["warn", "tab", {
			"SwitchCase": 1
		}],
		'@stylistic/semi': ['error', 'always']
	}
};
