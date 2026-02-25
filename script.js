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
        const result = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
        if (Number(result) === 42 || result === '42') {
            display.value = '42 – Antwort auf alles!';
            setTimeout(() => {
                display.value = '42';
            }, 2000);
        } else {
            display.value = result;
        }
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

function sqrtFunc() {
    if (display.value === '' || display.value === 'Fehler') return;
    const match = display.value.match(/(\-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = parseFloat(match[0]);
        if (number < 0) {
            display.value = 'Fehler';
            return;
        }
        const sqrtValue = Math.sqrt(number).toString();
        const start = match.index;
        const end = start + match[0].length;
        display.value = display.value.substring(0, start) + sqrtValue + display.value.substring(end);
    }
}

function sinFunc() {
    if (display.value === '' || display.value === 'Fehler') return;
    const match = display.value.match(/(\-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = parseFloat(match[0]);
        // Umrechnung in Radiant
        const sinValue = Math.sin(number * Math.PI / 180).toString();
        const start = match.index;
        const end = start + match[0].length;
        display.value = display.value.substring(0, start) + sinValue + display.value.substring(end);
    }
}

function cosFunc() {
    if (display.value === '' || display.value === 'Fehler') return;
    const match = display.value.match(/(\-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = parseFloat(match[0]);
        const cosValue = Math.cos(number * Math.PI / 180).toString();
        const start = match.index;
        const end = start + match[0].length;
        display.value = display.value.substring(0, start) + cosValue + display.value.substring(end);
    }
}

function tanFunc() {
    if (display.value === '' || display.value === 'Fehler') return;
    const match = display.value.match(/(\-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = parseFloat(match[0]);
        const tanValue = Math.tan(number * Math.PI / 180).toString();
        const start = match.index;
        const end = start + match[0].length;
        display.value = display.value.substring(0, start) + tanValue + display.value.substring(end);
    }
}
