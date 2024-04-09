document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const buttonValue = event.target.innerHTML;
            
            if (buttonValue === '=') {
                try {
                    inputField.value = evaluateExpression(inputField.value);
                } catch (error) {
                    inputField.value = 'Error';
                }
            } else if (buttonValue === 'C') {
                inputField.value = '';
            } else if (buttonValue === '00') {
                inputField.value += '00'; 
            } else if (buttonValue === '←') {
                inputField.value = inputField.value.slice(0, -1);
            } else {
                inputField.value += buttonValue;
            }
        });
    });
});

function evaluateExpression(expression) {
    return eval(expression);
}
