let btn = document.getElementById('btn') !;
var count = 0 ;

function render (): void {

		btn["innerText"] = `Count: ${count}`;
	}

btn!.addEventListener(`click`, () => {

	//Count from 1 to 10.
	if(count < 10) {

	  count += 1; 
		render()

	}

});

export default undefined;
