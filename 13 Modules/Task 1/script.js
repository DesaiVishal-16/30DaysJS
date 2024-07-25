// Task 1: Create a module that exports a function to add two numbers. import and use this module in another script.

const sum = require("./sum");
const num1 = 4;
const num2 = 2;
const result = sum(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${result}`);
