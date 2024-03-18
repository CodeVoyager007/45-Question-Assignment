const animals: string[] = ["Dog", "Cat", "Horse"];

console.log("List of animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.log("\nCharacteristics of these animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");
