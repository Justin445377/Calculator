// ===== Retro Calculator =====
const retroDisplay = document.getElementById('retro-display');

function retroAppendToDisplay(value) {
    retroDisplay.value += value;
}

function retroClearDisplay() {
    retroDisplay.value = '';
}

function retroDeleteLast() {
    retroDisplay.value = retroDisplay.value.slice(0, -1);
}

function retroCalculate() {
    try {
        const result = eval(retroDisplay.value.replace(/÷/g, '/').replace(/×/g, '*'));
        if (Number(result) === 42 || result === '42') {
            retroDisplay.value = '42 – Antwort auf alles!';
            triggerRetroFlash();
            setTimeout(() => {
                retroDisplay.value = '42';
            }, 700);
        } else {
            retroDisplay.value = result;
            triggerRetroFlash();
        }
    } catch {
        retroDisplay.value = 'Fehler';
        triggerRetroFlash();
    }
}

function retroToggleSign() {
    if (retroDisplay.value === '' || retroDisplay.value === 'Fehler') return;
    const match = retroDisplay.value.match(/(-?\d*\.?\d+)(?!.*\d)/);
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
        retroDisplay.value = retroDisplay.value.substring(0, start) + newNumber + retroDisplay.value.substring(end);
    }
}

function retroPercent() {
    if (retroDisplay.value === '' || retroDisplay.value === 'Fehler') return;
    const match = retroDisplay.value.match(/(\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = match[0];
        const start = match.index;
        const end = start + number.length;
        const percentValue = (parseFloat(number) / 100).toString();
        retroDisplay.value = retroDisplay.value.substring(0, start) + percentValue + retroDisplay.value.substring(end);
    }
}

function retroSqrtFunc() {
    if (retroDisplay.value === '' || retroDisplay.value === 'Fehler') return;
    const match = retroDisplay.value.match(/(\-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = parseFloat(match[0]);
        if (number < 0) {
            retroDisplay.value = 'Fehler';
            return;
        }
        const sqrtValue = Math.sqrt(number).toString();
        const start = match.index;
        const end = start + match[0].length;
        retroDisplay.value = retroDisplay.value.substring(0, start) + sqrtValue + retroDisplay.value.substring(end);
    }
}

function retroSinFunc() {
    if (retroDisplay.value === '' || retroDisplay.value === 'Fehler') return;
    const match = retroDisplay.value.match(/(\-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = parseFloat(match[0]);
        const sinValue = Math.sin(number * Math.PI / 180).toString();
        const start = match.index;
        const end = start + match[0].length;
        retroDisplay.value = retroDisplay.value.substring(0, start) + sinValue + retroDisplay.value.substring(end);
    }
}

function retroCosFunc() {
    if (retroDisplay.value === '' || retroDisplay.value === 'Fehler') return;
    const match = retroDisplay.value.match(/(\-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = parseFloat(match[0]);
        const cosValue = Math.cos(number * Math.PI / 180).toString();
        const start = match.index;
        const end = start + match[0].length;
        retroDisplay.value = retroDisplay.value.substring(0, start) + cosValue + retroDisplay.value.substring(end);
    }
}

function retroTanFunc() {
    if (retroDisplay.value === '' || retroDisplay.value === 'Fehler') return;
    const match = retroDisplay.value.match(/(\-?\d*\.?\d+)(?!.*\d)/);
    if (match) {
        const number = parseFloat(match[0]);
        const tanValue = Math.tan(number * Math.PI / 180).toString();
        const start = match.index;
        const end = start + match[0].length;
        retroDisplay.value = retroDisplay.value.substring(0, start) + tanValue + retroDisplay.value.substring(end);
    }
}

function triggerRetroFlash() {
    retroDisplay.classList.remove('retro-flash');
    // Force reflow to restart animation
    void retroDisplay.offsetWidth;
    retroDisplay.classList.add('retro-flash');
    setTimeout(() => {
        retroDisplay.classList.remove('retro-flash');
    }, 400);
}
