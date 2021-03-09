let firstNumber = null;
let secondNumber = null;
let isSecondNumber = false;
let currentOperator = null;
let isDotClicked = false;
let currentResult = 0;

function outputToScreen(numberToShow) {
    const screen = document.getElementById("screen-content");
    screen.innerHTML = numberToShow;
}

function setCurrentNumber(number) {
    if (currentOperator === null && !isDotClicked) {
        if (firstNumber === null) { firstNumber = 0; }
        firstNumber = parseInt(firstNumber.toString() + number.toString())
        outputToScreen(firstNumber);
    }
    else {
        if (isDotClicked) {
            if (isSecondNumber) {
                if (secondNumber.toString().split(".").length > 1) {
                    secondNumber = parseFloat(secondNumber.toString().split(".")[0] + "." + secondNumber.toString().split(".")[1] + number);
                }
                else {
                    secondNumber = parseFloat(secondNumber.toString().split(".")[0] + "." + number);
                }
                outputToScreen(secondNumber);
            }
            else {
                if (firstNumber === null) {
                    firstNumber = 0;
                }
                if (firstNumber.toString().split(".").length > 1) {
                    firstNumber = parseFloat(firstNumber.toString().split(".")[0] + "." + firstNumber.toString().split(".")[1] + number);
                }
                else {
                    firstNumber = parseFloat(firstNumber.toString().split(".")[0] + "." + number);
                }
                outputToScreen(firstNumber);
            }
            return;
        }
        if (secondNumber === null) { secondNumber = 0; }
        secondNumber = parseInt(secondNumber.toString() + number.toString())
        outputToScreen(secondNumber);
    }
}

function makeCalculation() {
    switch (currentOperator) {
        case "+":
            currentResult = firstNumber + secondNumber;
            break;
        case "*":
            currentResult = firstNumber * secondNumber;
            break;
        case "/":
            currentResult = firstNumber / secondNumber;
            break;
        case "-":
            currentResult = firstNumber - secondNumber;
            break;
    }
    currentOperator = null;
    secondNumber = null;
    firstNumber = currentResult;
    outputToScreen(currentResult)
}

function clearAll() {
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    isSecondNumber = false;
    currentResult = 0;
    outputToScreen(0);
}

function setOperator(operator) {
    if (operator === ".") {
        isDotClicked = true;
        return true;
    }
    isDotClicked = false;
    currentOperator = operator;
    isSecondNumber = true;
}

outputToScreen(0);