interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): Car {
    const myAuto: Car = {
        manufacturer,
        model,
        make: "",
        year: 0,
        color: ""
    };

    for (const extra of extras) {
        for (const key in extra) {
            myAuto[key] = extra[key];
        }
    }

    return myAuto;
}

// Calling the function with required information 
const myAuto = createCar("Toyota", "Corolla", { color: "blue" }, { year: 2023 }, { features: ["GPS", "Bluetooth"] });

console.log("Car Information:");
console.log(myAuto);
