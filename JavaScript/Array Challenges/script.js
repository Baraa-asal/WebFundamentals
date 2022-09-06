// %%%%%%%%%%%%     ALWAYS HUNGRY     %%%%%%%%%%%%%%%
function alwaysHungry(arr) {
    var isThereFood = false;     // a flag to test the output!
    for (var i=0; i<=arr.length; i++){
        if (arr[i]=="food"){
        console.log("Yummy!")
        isThereFood = true;      //to indicate that it entered the if statement which means that there is food so i dont want to print i am hungry , or if it is false to print i am hungry if it is false
    }
    if (!isThereFood){
    console.log("I am Hungry!")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);


// %%%%%%%%%%%%     HIGH PASS FILTER     %%%%%%%%%%%%%%%
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<=arr.length; i++){
        if (arr[i]>cutoff){
        filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
var result1 = highPass([55, 0, -3, 20, -12, 3, 11], 10);
console.log(result) 
console.log(result1)


// %%%%%%%%%%%%     BETTER THAN AVERAGE     %%%%%%%%%%%%%%%
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for(var i=0; i<=arr.length-1; i++){
        sum+=i;
    }
    
    var avg = sum/arr.length;
    for(var i=0; i<=arr.length-1; i++){
        if(arr[i] > avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// %%%%%%%%%%%%     ARRAY REVERSE     %%%%%%%%%%%%%%%
function reverse(array){
    var newArr = []; 
    for(var i=array.length-1; i>-1; i--){
        newArr.push(array[i]);
    }
    return newArr;
}
console.log(reverse([1,2,3,4,5,6,7]));


// %%%%%%%%%%%%    FIBBONACI ARRAY     %%%%%%%%%%%%%%%

function Fibonacci(n) {
    var fib = [0,1];
    for(i=2; i<n; i++){
        fib.push(fib[i-2] + fib[i-1])
    }
    console.log(fib);
}
var n = 10;
Fibonacci(n);