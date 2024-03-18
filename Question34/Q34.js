var favoritePizzas = ["Cheese", "Pepperoni", "Vegetarian"];
console.log("My favorite pizzas:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("\nWhy I love these pizzas:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log("I really like ".concat(pizza, " pizza."));
}
console.log("\nPizza is simply amazing!");
