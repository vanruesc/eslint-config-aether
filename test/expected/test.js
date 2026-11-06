const btn = document.getElementById("btn");
let count = 0;

const o = { value: undefined };
const foo = (arg) => o.value ? 1 : 0;

/**
 * doc comment
 *
 * @param {number} timestamp - a timestamp
 */

function render(timestamp) {

	btn.innerText = `Count: ${count}`;

}

btn.addEventListener("click", () => {

	// Count from 1 to 10.
	if(count < 10) {

		count += 1;
		render(performance.now());

	}

	void foo(0);

	if(count === 0 &&
		btn !== undefined) {

		/* test */

	}

});

export default undefined;
