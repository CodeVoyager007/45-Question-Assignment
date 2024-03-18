const favoritePizzas: string[] = ["Cheese", "Pepperoni", "Vegetarian"];

console.log("My favorite pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("\nWhy I love these pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I really like ${pizza} pizza.`);
}

console.log("\nPizza is simply amazing!");
