module.exports = require("./typescript-basic.js");

module.exports.extends.push(
	"plugin:@typescript-eslint/recommended-requiring-type-checking"
);

Object.assign(module.exports.rules, {

	"camelcase": "off",

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
			"selector": "enumMember",
			"format": ["UPPER_CASE"]
		},
		{
			"selector": "typeLike",
			"format": ["PascalCase"]
		}
	]

});
