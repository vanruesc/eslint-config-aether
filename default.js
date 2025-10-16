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
		"camelcase": "off",
		"consistent-return": "error",
		"curly": "warn",
		"dot-notation": "warn",
		"eqeqeq": "error",
		"indent": "off",
		"new-cap": "error",
		"no-array-constructor": "error",
		"no-alert": "warn",
		"no-caller": "error",
		"no-console": "off",
		"no-debugger": "warn",
		"no-else-return": "warn",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "warn",
		"no-loop-func": "warn",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-undef-init": "warn",
		"no-underscore-dangle": ["warn", {
			"allowAfterThis": true
		}],
		"no-unused-vars": ["warn", {
			"vars": "all",
			"args": "none",
			"caughtErrors": "none"
		}],
		"no-var": "error",
		"wrap-iife": "warn",
		"yoda": ["warn", "never"],
		"@stylistic/array-bracket-spacing": ["warn", "never"],
		"@stylistic/block-spacing": ["warn", "always"],
		"@stylistic/brace-style": ["warn", "1tbs", {
			"allowSingleLine": true
		}],
		"@stylistic/comma-dangle": ["warn", "never"],
		"@stylistic/comma-spacing": "warn",
		"@stylistic/comma-style": ["warn", "last"],
		"@stylistic/computed-property-spacing": ["warn", "never"],
		"@stylistic/eol-last": ["warn", "always"],
		"@stylistic/function-call-spacing": ["warn", "never"],
		"@stylistic/indent": ["warn", "tab", {
			"SwitchCase": 1
		}],
		"@stylistic/key-spacing": "warn",
		"@stylistic/keyword-spacing": ["warn", {
			"overrides": {
				"catch": { "after": false },
				"if": { "after": false },
				"for": { "after": false },
				"switch": { "after": false },
				"while": { "after": false }
			}
		}],
		"@stylistic/lines-between-class-members": ["warn", "always", {
			"exceptAfterSingleLine": true
		}],
		"@stylistic/object-curly-spacing": ["warn", "always"],
		"@stylistic/max-len": ["warn", {
			"code": 120,
			"tabWidth": 2,
			"ignoreComments": true
		}],
		"@stylistic/new-parens": "error",
		"@stylistic/no-extra-semi": "warn",
		"@stylistic/no-mixed-spaces-and-tabs": "warn",
		"@stylistic/no-multiple-empty-lines": "warn",
		"@stylistic/no-multi-spaces": "warn",
		"@stylistic/no-trailing-spaces": "warn",
		"@stylistic/no-whitespace-before-property": "warn",
		"@stylistic/padded-blocks": ["warn", "always", {
			"allowSingleLineBlocks": true
		}],
		"@stylistic/quotes": ["warn", "double"],
		"@stylistic/semi": ["error", "always"],
		"@stylistic/semi-spacing": "warn",
		"@stylistic/space-before-blocks": ["warn", "always"],
		"@stylistic/space-before-function-paren": ["warn", "never"],
		"@stylistic/space-in-parens": ["warn", "never"],
		"@stylistic/space-infix-ops": "warn",
		"@stylistic/space-unary-ops": "warn",
		"@stylistic/spaced-comment": ["warn", "always"]
	}
};
