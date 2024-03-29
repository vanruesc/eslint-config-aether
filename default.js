module.exports = {
	"extends": "eslint:recommended",
	"env": {
		"es2024": true,
		"browser": true,
		"worker": true,
		"jquery": true,
		"node": true
	},
	"parserOptions": {
		"sourceType": "module",
		"impliedStrict": true
	},
	"rules": {
		"array-bracket-spacing": ["error", "never"],
		"block-spacing": ["error", "always"],
		"brace-style": ["error", "1tbs", {
			"allowSingleLine": true
		}],
		"camelcase": "warn",
		"comma-dangle": ["error", "never"],
		"comma-spacing": "error",
		"comma-style": ["error", "last"],
		"consistent-return": "error",
		"computed-property-spacing": ["error", "never"],
		"curly": "error",
		"dot-notation": "warn",
		"eol-last": ["error", "always"],
		"eqeqeq": "error",
		"func-call-spacing": ["error", "never"],
		"indent": ["error", "tab", {
			"SwitchCase": 1
		}],
		"key-spacing": "error",
		"keyword-spacing": ["error", {
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
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multiple-empty-lines": "warn",
		"no-multi-spaces": "warn",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-trailing-spaces": "warn",
		"no-undef-init": "error",
		"no-underscore-dangle": ["error", {
			"allowAfterThis": true
		}],
		"no-unused-vars": ["warn", {
			"vars": "all",
			"args": "none"
		}],
		"no-var": "error",
		"no-whitespace-before-property": "error",
		"object-curly-spacing": ["error", "always"],
		"padded-blocks": ["warn", "always", {
			"allowSingleLineBlocks": true
		}],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"semi-spacing": "error",
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": ["warn", "always"],
		"wrap-iife": "warn",
		"yoda": ["error", "never"]
	}
};
