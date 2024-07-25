// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another scrpit and use its properties.

const PI = 3.14159;
const GRAVITY = 9.81;

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

module.exports = {
  PI,
  GRAVITY,
  square,
  cube,
};
