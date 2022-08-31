function pizzaOven (crustType, sauceType, cheeses, toppings) {
    return {crustType, sauceType, cheeses, toppings};
}
function randomPizza() {
    var argNames = ["crustType", "sauceType", "cheeses", "toppings"]
    var options = [
        ["deep dish", "hand tossed", "something 1", "something 2"],
        ["traditional", "marianara", "hot sausce", "barbecue"],
        ["mozzarella", "feta", "some cheese 1", "some cheese 2"],
        ["mushrooms", "olives", "onions", "pepperoni","sausage", "chicken"]
    ]
    var args = {};
    for (var i =0; i< 4; i++) {
        var random = Math.floor(Math.random()*100 % options[i].length);
        var argName = argNames[i];
        if (i == 2 || i == 3) {
            var randomlength = Math.floor(Math.random()*100 % (options[i].length-1)) + 1;
            args[argName] = [];
            for (var j = 0 ; j < randomlength; j++) {
                var randomElement = Math.floor(Math.random()*100 % options[i].length);
                if (args[argName].indexOf(options[i][randomElement]) == -1) {
                    args[argName].push(options[i][randomElement])
                 }
            }
        } else {
            args[argName] = options[i][random]; 
        }
         
    }
    return pizzaOven(args["crustType"], args["sauceType"], args["cheeses"], args["toppings"])
}
var firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);
var secondPizza = pizzaOven("hand tossed", "marianara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var thirdPizza = pizzaOven("something", "hot sausce", ["feta"], ["olives", "onions"]);
var forthPizza = pizzaOven("deep dish", "barbecue", ["mozzarella"], ["chicken", "onions"]);

console.log(firstPizza);
console.log(secondPizza);
console.log(thirdPizza);
console.log(forthPizza);

for (var i =0; i< 1; i++) {
    console.log("Random Pizz #"+ (i+1), randomPizza());
}