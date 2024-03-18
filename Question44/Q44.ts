function orderSandwich(...items: string[]): void {
    console.log("Sandwich ordered with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

orderSandwich("Ham", "Cheese");
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
orderSandwich("Peanut Butter", "Jelly");