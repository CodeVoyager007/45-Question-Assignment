// Tests for equality and inequality with strings
const string1: string = "hamburger";
const string2: string = "pizza";
console.log("Is string1 equal to string2?");
console.log(string1 === string2); // False
console.log("Is string1 not equal to string2?");
console.log(string1 !== string2); // True

// Tests using the lower case function
const mixedCaseString: string = "French Fries are delicious!";
console.log("Is mixedCaseString equal to 'french fries are delicious!'?");
console.log(mixedCaseString.toLowerCase() === "french fries are delicious!"); // True
console.log("Is mixedCaseString equal to 'French Fries are delicious!'?");
console.log(mixedCaseString.toLowerCase() === "French Fries are delicious!"); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 15;
const num2: number = 7;
console.log("Is num1 equal to num2?");
console.log(num1 === num2); // False
console.log("Is num1 not equal to num2?");
console.log(num1 !== num2); // True
console.log("Is num1 greater than num2?");
console.log(num1 > num2); // True
console.log("Is num1 less than num2?");
console.log(num1 < num2); // False
console.log("Is num1 greater than or equal to num2?");
console.log(num1 >= num2); // True
console.log("Is num1 less than or equal to num2?");
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;
console.log("Is condition1 true and condition2 false?");
console.log(condition1 && condition2); // False
console.log("Is condition1 true or condition2 false?");
console.log(condition1 || condition2); // True

// Test whether an item is in an array
// Test whether an item is not in an array
const items: string[] = ["Burger", "Hot Dog", "French Fries", "Pizza"];
console.log("Is 'Burger' included in the items array?");
console.log(items.includes("Burger")); // True
console.log("Is 'Sushi' included in the items array?");
console.log(items.includes("Sushi")); // False
