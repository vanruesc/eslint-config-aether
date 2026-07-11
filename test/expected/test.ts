const btn = document.getElementById("btn")!;
let count = 0;

const o = { value: undefined as HTMLElement | undefined };
const foo = <T>(arg: T) => o.value !== undefined ? 1 : 0;

function render(): void {

	btn.innerText = `Count: ${count}`;

}

btn.addEventListener("click", () => {

	// Count from 1 to 10.
	if(count < 10) {

		count += 1;
		render();

	}

	void foo(0);

});

export default undefined;
