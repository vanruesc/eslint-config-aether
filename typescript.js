module.exports = {

	"plugins": ["@typescript-eslint"],
	"parser": "@typescript-eslint/parser",

	"extends": [
		"aether/default",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],

	"rules": {

		"indent": "off",
		"camelcase": "off",
		"no-unused-vars": "off",

		"@typescript-eslint/indent": ["error", "tab", {
			"SwitchCase": 1
		}],

		"@typescript-eslint/naming-convention": ["error",
			{
				"selector": "default",
				"format": ["camelCase"]
			},
			{
				"selector": "variable",
				"format": ["camelCase", "UPPER_CASE"]
			},
			{
				"selector": "parameter",
				"format": ["camelCase"],
				"leadingUnderscore": "allow"
			},
			{
				"selector": "memberLike",
				"modifiers": ["private"],
				"format": ["camelCase"],
				"leadingUnderscore": "forbid"
			},
			{
				"selector": ["objectLiteralProperty", "objectLiteralMethod"],
				"format": null
			},
			{
				"selector": "typeLike",
				"format": ["PascalCase"]
			}
		],

		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-unused-vars": ["warn", {
			"vars": "all",
			"args": "none"
		}]

	}

};
