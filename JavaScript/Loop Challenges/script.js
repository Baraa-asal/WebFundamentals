// -----------Print odds 1-20------------
console.log("Print odds 1-20")
for(i=1; i<21; i++){
if(i%2 !== 0){
    console.log(i)
    }
}
console.log("\n")

// -----------Decreasing Multiples of 3------------
console.log("Decreasing Multiples of 3")
for(i=100; i>=0; i--){
    if(i%3==0){
    console.log(i)
    }
}
console.log("\n")

// -----------Print the sequence------------
console.log("Print the sequence")
for(i=4; i>=-3.5; i-=1.5){
    console.log(i)
}
console.log("\n")

// -----------Sigma------------
console.log("Sigma")
var sum = 0
for(i=1; i<=100; i+=1){
    sum+=i
}
console.log(sum)
console.log("\n")

// -----------Factorial------------
console.log("Factorial")
var fact = 1;
for(i=1; i<=12; i+=1){
    fact = fact * i
}
console.log(fact)
console.log("\n")
