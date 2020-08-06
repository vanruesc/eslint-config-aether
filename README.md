# Eslint Config Aether

[![npm version](https://badgen.net/npm/v/eslint-config-aether?color=green)](https://www.npmjs.com/package/eslint-config-aether)

A custom code style for [ESLint](https://eslint.org/).


## Installation

```sh
npm install eslint-config-aether
``` 

This package includes optional TypeScript variants that rely on the TypeScript ESLint [plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) and [parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser):

```sh
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Included Configurations

| Config                  | Parent Configs                                                                   |
|-------------------------|----------------------------------------------------------------------------------|
| aether                  | `eslint:recommended`                                                             |
| aether/typescript       | `aether`, `plugin:@typescript-eslint/eslint-recommended-requiring-type-checking` |
| aether/typescript-basic | `aether`, `plugin:@typescript-eslint/eslint-recommended`                         |


## Usage

Choose one of the following options to load a configuration.

#### package.json

```json
{
	"eslintConfig": {
		"extends": "aether"
	}
}
```

#### package.json (TypeScript)

```json
{
	"eslintConfig": {
		"extends": "aether/typescript",
		"parserOptions": {
			"project": [
				"tsconfig.json"
			]
		}
	}
}
```

#### .eslintrc

```json
{
	"extends": "aether"
}
```

#### .eslintrc (TypeScript)

```json
{
	"extends": "aether/typescript",
	"parserOptions": {
		"project": [
			"tsconfig.json"
		]
	}
}
```
