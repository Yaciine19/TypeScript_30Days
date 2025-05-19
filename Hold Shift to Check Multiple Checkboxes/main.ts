const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked: HTMLInputElement;

function handleCheck(this: HTMLInputElement, e: MouseEvent): void {

    let inBetween: boolean = false;
    // Check if they had the shif key down
    // And check that they are checking it
    if(e.shiftKey && this.checked) {
        // Loop over every single checkbox
        checkboxes.forEach((checkbox => {
            console.log(checkbox);

            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                // console.log('Starting to check them inBetween!')
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        }))
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
})