const display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    const lastChar = display.value.slice(-1);
    if (display.value !== '' && !isNaN(lastChar)) {
        display.value += op;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}