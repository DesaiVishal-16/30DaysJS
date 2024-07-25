// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another scrpit and use its properties.

const mathUtils = require("./multiExport");

console.log(mathUtils.PI);
console.log(mathUtils.GRAVITY);

console.log(mathUtils.square(4));
console.log(mathUtils.cube(3));
