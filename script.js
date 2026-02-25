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

function toggleSign() {
    if (display.value === '' || display.value === 'Fehler') return;
    // Finde die letzte Zahl im Display
    const match = display.value.match(/(-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = match[0];
        const start = match.index;
        const end = start + number.length;
        let newNumber;
        if (number.startsWith('-')) {
            newNumber = number.substring(1);
        } else {
            newNumber = '-' + number;
        }
        display.value = display.value.substring(0, start) + newNumber + display.value.substring(end);
    }
}

function percent() {
    if (display.value === '' || display.value === 'Fehler') return;
    // Finde die letzte Zahl im Display
    const match = display.value.match(/(\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = match[0];
        const start = match.index;
        const end = start + number.length;
        const percentValue = (parseFloat(number) / 100).toString();
        display.value = display.value.substring(0, start) + percentValue + display.value.substring(end);
    }
}
