const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eslint-disable-next-line no-eval
        display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
    } catch {
        display.value = 'Fehler';
    }
}
