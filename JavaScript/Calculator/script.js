var firstOperand = '', secondOperand = '', operator = '';
var output = 0;
function press(key) {
    if (operator == '') {
        firstOperand += key;
        putOnDisplay(firstOperand)
    } else {
       secondOperand += key;
       putOnDisplay(secondOperand)
    }
}
function setOP(op) {
    operator = op;
    putOnDisplay(0)
}

function reset() {
    firstOperand =  '';
    secondOperand = '';
    operator = '';
    output = 0;
}
function clr() {
    reset();
    putOnDisplay(output);
}
function calculate() {
    var firstOperandVal = parseFloat(firstOperand), secondOperandVal = parseFloat(secondOperand);
    if (isNaN(firstOperandVal) || isNaN(secondOperandVal)) return;
    if (output != 0) {
        output = 0;
    } else {
        if (operator == '+') output = firstOperandVal + secondOperandVal;
        if (operator == '-') output = firstOperandVal - secondOperandVal;
        if (operator == '*') output = firstOperandVal * secondOperandVal;
        if (operator == '/') output = firstOperandVal / secondOperandVal;
    }
    
    putOnDisplay(output);
    reset();
}
function putOnDisplay(value) {
    document.querySelector("#display").innerHTML = value;
}


