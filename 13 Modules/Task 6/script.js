// Task 6: Install a third-party (e.g., Iodash) using npm. Import and use a function from this module in a script.
const _ = require("lodash");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const chunkArray = _.chunk(numbers, 3);
console.log("Original Array:", numbers);
console.log("Chunked Array:", chunkArray);

const sum = _.sum(numbers);
console.log("Sum of number of arrays are:", sum);
