const btn = document.getElementById("btn")!;
let count = 0;

/* block comment */

const o = { value: undefined as HTMLElement | undefined };
const foo = <T>(arg: T) => o.value !== undefined ? 1 : 0;

/**
 * doc comment
 *
 * @param timestamp - a timestamp
 * @param test - test
 */
function render(timestamp: number, test?: unknown): void {

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
