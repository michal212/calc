currentNumber = null;
currentOpearter = null;
currentResult = 0;

function outputToScreen() {
    const screen = document.getElementById("screen")
    screen.innerHTML = currentResult;
}



function setNumber(num) {
    if (currentOpearter === null) {
        currentNumber = num;
        currentResult = currentNumber;
        outputToScreen();

    }
    else {
        switch (currentOpearter) {
            case '+':
                currentResult = currentResult + num

                break;
            case '-':
                currentResult = currentResult - num
                break;
            case '*':
                currentResult = currentResult * num
                break;
            case '/':
                currentResult = currentResult / num
                break;


        }


    }






}

function setOpreator(operator) {
    currentOpearter = operator;


}

function reset() {
    currentOpearter = null;
    currentResult = 0;
    outputToScreen();

}






