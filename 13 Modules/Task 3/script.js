// Task 3: Create a module that exports multiple function using named exports. Import and use this function in another script.

const moreFuncs = require("./moreFunction");
const numOne = 3;
const numTwo = 4;

const resultAdd = moreFuncs.add(numOne, numTwo);
const resultSubtract = moreFuncs.subtract(numOne, numTwo);
const resultMultiply = moreFuncs.multiple(numOne, numTwo);

console.log(`Addition: ${resultAdd}`);
console.log(`Subtraction: ${resultSubtract}`);
console.log(`Multiplication: ${resultMultiply}`);
