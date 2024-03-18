var animals = ["Dog", "Cat", "Horse"];
console.log("List of animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("\nCharacteristics of these animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("\nAny of these animals would make a great pet!");
