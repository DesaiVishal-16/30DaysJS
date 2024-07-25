// Task 1: Create a module that exports a function to add two numbers. import and use this module in another script.

function sum(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
module.exports = sum;
