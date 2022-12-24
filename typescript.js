module.exports = require("./typescript-basic.js");

module.exports.extends.push(
	"plugin:@typescript-eslint/recommended-requiring-type-checking"
);

Object.assign(module.exports.rules, {
	"camelcase": "off",
	"no-underscore-dangle": "off",
	"@typescript-eslint/naming-convention": ["error",
		{
			"selector": "default",
			"format": ["camelCase"]
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
			selector: "typeLike",
			format: ["PascalCase"]
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
			selector: "interface",
			format: ["PascalCase"],
			custom: {
				regex: "^I[A-Z]",
				match: false
			}
		}
	]
});
