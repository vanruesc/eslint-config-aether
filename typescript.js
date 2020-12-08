module.exports = {

	"plugins": ["@typescript-eslint"],
	"parser": "@typescript-eslint/parser",

	"extends": [
		"aether/default",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],

	"rules": {

		"indent": "off",
		"no-unused-vars": "off",

		"@typescript-eslint/indent": ["error", "tab", {
			"SwitchCase": 1
		}],

		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-unused-vars": ["warn", {
			"vars": "all",
			"args": "none"
		}]

	}

};
