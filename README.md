# Eslint Config Aether

[![npm version](https://badgen.net/npm/v/eslint-config-aether?color=green)](https://www.npmjs.com/package/eslint-config-aether)

An opinionated code style for [ESLint](https://eslint.org/) that provides type-aware linting, formatting, common runtime globals, and sensible defaults out of the box.

## Installation

```sh
npm install eslint-config-aether
``` 

## Usage

#### eslint.config.js

```js
import { default } from "eslint-config-aether";
```

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

## Customization

```js
import { defineConfig } from "eslint/config";
import aether from "eslint-config-aether";

export default defineConfig([
	{
		files: ["**/*.js", "**/*.ts"],
		extends: [aether],

		// anything from here will override the base config
		rules: {
			"@stylistic/padded-blocks": "off"
		}
	}
]);
```
