function tailorShirt(type, text) {
    if (type === void 0) { type = "large"; }
    if (text === void 0) { text = "I Love TypeScript"; }
    console.log("Crafting a ".concat(type, " t-shirt with the phrase \"").concat(text, "\" imprinted."));
}
tailorShirt();
tailorShirt("medium");
tailorShirt("small", "Embrace Coding");
