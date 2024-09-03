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

## Usage

#### eslint.config.js

```js
import aether from "eslint-config-aether";
export default [...aether];
```
