# Eslint Config Aether

[![npm version](https://badgen.net/npm/v/eslint-config-aether?color=green)](https://www.npmjs.com/package/eslint-config-aether)

A custom code style for [ESLint](https://eslint.org/).

## Preview

```js
const btn = document.getElementById("btn");
let count = 0;

function render() {

	btn.innerText = `Count: ${count}`;

}

btn.addEventListener("click", () => {

	// Count from 1 to 10.
	if(count < 10) {

		count += 1;
		render();

	}

});
```


## Installation

```sh
npm install eslint-config-aether
``` 

This package includes optional configurations for TypeScript which require the TypeScript ESLint [plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) and [parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser):

```sh
npm install @typescript-eslint/eslint-plugin
npm install @typescript-eslint/parser
```

## Included Configurations

The `aether` configuration is intended to be used for JavaScript projects, `aether/typescript-basic` is a compatibility configuration for TypeScript projects and `aether/typescript` adds rules that are based on type information.

| Config                    | Parent Configs                                                                   |
|---------------------------|----------------------------------------------------------------------------------|
| `aether`                  | `eslint:recommended`                                                             |
| `aether/typescript`       | `aether`, `plugin:@typescript-eslint/eslint-recommended-requiring-type-checking` |
| `aether/typescript-basic` | `aether`, `plugin:@typescript-eslint/eslint-recommended`                         |


## Usage

Note: The config `aether/typescript` sets `parserOptions.project` to `"tsconfig.json"` by default.

#### package.json

```json
{
	"eslintConfig": {
		"extends": "aether/typescript"
	}
}
```

#### .eslintrc

```json
{
	"extends": "aether/typescript"
}
```
