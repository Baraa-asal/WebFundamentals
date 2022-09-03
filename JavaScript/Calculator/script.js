var firstOperand = 0 , factor = 1;
function press(key){
    if(key == "." && factor == 1) factor = 0.1;
    console.log(factor)
    firstOperand = firstOperand*10 + key*factor;
    console.log(firstOperand)

    factor*=factor; 

}
