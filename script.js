let currentInput = '';
let operation = null;
let previousInput = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    previousInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    if (previousInput === '' || currentInput === '' || operation === null) return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
