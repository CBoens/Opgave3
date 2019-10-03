let word: string;

let inputManipulation: HTMLInputElement = <HTMLInputElement>document.getElementById("userInput");

let goBtn: HTMLInputElement = <HTMLInputElement>document.getElementById("convText");
goBtn.addEventListener("click", convString);

function convString(): void {
    if (optToUpper.selected != null && optToLower != null) {
        if (optToLower.selected) {
            var word = inputManipulation.value;
            output.innerHTML = word.toLocaleLowerCase();
        }

        console.log("To lower Selected: "+optToLower.selected);

        if(optToUpper.selected)
        {
            var word = inputManipulation.value;
            output.innerHTML = word.toLocaleUpperCase();
        }

        console.log("To Upper Selected: "+optToUpper.selected); 
    }
}

let output: HTMLElement = <HTMLElement>document.getElementById("outputManipulation");

let optToUpper: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Upper");
let optToLower: HTMLOptionElement = <HTMLOptionElement>document.getElementById("Lower");