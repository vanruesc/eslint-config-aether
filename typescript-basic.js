module.exports = {
	"plugins": ["@typescript-eslint"],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": [
			"tsconfig.json"
		]
	},
	"extends": [
		"aether/default",
		"plugin:@typescript-eslint/recommended"
	],
	"rules": {
		"indent": "off",
		"no-undef": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/indent": ["error", "tab", {
			"SwitchCase": 1
		}],
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-unused-vars": ["warn", {
			"vars": "all",
			"args": "none"
		}],
		"@typescript-eslint/strict-boolean-expressions": "warn"
	}
};
