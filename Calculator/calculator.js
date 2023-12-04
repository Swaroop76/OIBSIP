let ans = 0;
function handleButtonClick(event) {
    const clickedButton = event.target;
    const display = document.getElementById('display');

    if (clickedButton.tagName === 'BUTTON') {
        const buttonText = clickedButton.textContent;

        if (buttonText === 'del') {
            // Handle delete logic
            display.value = display.value.slice(0, -1);
        } else if (buttonText === 'clear') {
            // Handle clear logic
            display.value = '';
        } else if (buttonText === '=') {
            // Handle equals logic
            try {
                display.value = eval(display.value);
                ans = display.value;
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === '√'){
            display.value = display.value ** 0.5
            ans = display.value
        } else if (buttonText === 'ans') {
            display.value = 'ans';
        }
        else {
            // Append the button text to the display
            display.value += buttonText;
        }
    }
}