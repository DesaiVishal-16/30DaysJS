// Task 3: Create a module that exports multiple function using named exports. Import and use this function in another script.

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiple(num1, num2) {
  return num1 * num2;
}
module.exports = {
  add,
  subtract,
  multiple,
};
