function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var myAuto = {
        manufacturer: manufacturer,
        model: model,
        make: "",
        year: 0,
        color: ""
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            myAuto[key] = extra[key];
        }
    }
    return myAuto;
}
// Calling the function with required information 
var myAuto = createCar("Toyota", "Corolla", { color: "blue" }, { year: 2023 }, { features: ["GPS", "Bluetooth"] });
console.log("Car Information:");
console.log(myAuto);
