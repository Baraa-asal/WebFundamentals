var firstOperand = '', secondOperand = '', operator = '' , dotFlag = false;
var output = 0;
function press(key) {
    if (operator == '') {
        firstOperand = setOperand(key, firstOperand);
        putOnDisplay(firstOperand)
    } else {
       secondOperand = setOperand(key, secondOperand); 
       putOnDisplay(secondOperand)
    }
}
function setOP(op) {
    operator = op;
    dotFlag = false;
    putOnDisplay(0)
}
function setOperand(key, value) {
    if (key === '.' && dotFlag) return;
    if (key === '.') dotFlag = true;
    value = '' + value + key;
    return value;
}
function reset() {
    firstOperand =  '';
    secondOperand = '';
    operator = '';
    dotFlag = '';
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
firstOperand (operator) secondOperand = 


