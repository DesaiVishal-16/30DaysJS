# Day 13: Modules

## Tasks/Activities:

### Activity 1: Creating and Exporting Modules

#### Task 1: Create a module that exports a function to add two numbers. import and use this module in another script.

```js
//sum.js
function sum(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
module.exports = sum;

//script.js
const sum = require("./sum");
const num1 = 4;
const num2 = 2;
const result = sum(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${result}`);
```

#### Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

```js
//personObject.js
const personObject = {
  FirstName: "Vishal",
  LastName: "Desai",
  isMale: true,
};
module.exports = personObject;

//script.js
const personObject = require("./personObject");
console.log(personObject);
```

### Activity 2: Named and Default Exports

#### Task 3: Create a module that exports multiple function using named exports. Import and use this function in another script.

```js
//moreFunction.js
function add(numOne, numTwo) {
return num1 + num2;
}
function subtract(numOne, numTwo) {
return num1 - num2;
}
function multiple(numOne, numTwo) {
return num1 \* num2;
}
module.exports = {
add,
subtract,
multiple,
};

//script.js
const moreFuncs = module("./moreFunction");
const numOne = 3;
const numTwo = 4;

const resultAdd = moreFuncs.add(numOne, numTwo);
const resultSubtract = moreFuncs.subtract(numOne, numTwo);
const resultMultiply = moreFuncs.multiple(numOne, numTwo);

console.log(`Addition: ${resultAdd}`);
console.log(`Subtraction: ${resultSubtract}`);
console.log(`Multiplication: ${resultMultiply}`);
```

#### Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

```js
//singleFunc.js
function singleFunc() {
  return `This is a single function`;
}
export default singleFunc;

//script.js
import singleFunction from "./singleFunc";
console.log(singleFunction());
```

### Activity 3: Importing Entire Modules

#### Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another scrpit and use its properties.

```js
// multiExport.js
const PI = 3.14159;
const GRAVITY = 9.81;

function square(x) {
return x \* x;
}

function cube(x) {
return x _ x _ x;
}

// script.js
const mathUtils = require("./multiExport.js");

console.log(mathUtils.PI);
console.log(mathUtils.GRAVITY);

console.log(mathUtils.square(4));
console.log(mathUtils.cube(3));
```

### Activity 4: Using Third-Party Modules

#### Task 6: Install a third-party (e.g., Iodash) using npm. Import and use a function from this module in a script.

```js
const _ = require("lodash");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const chunkArray = \_.chunk(numbers, 3);
console.log("Original Array:", numbers);
console.log("Chunked Array:", chunkArray);

const sum = \_.sum(numbers);
console.log("Sum of number of arrays are:", sum);
```

#### Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in script.

```js
const axios = require("axios");

async function fetchUser(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
}
async function main() {
  const userId = 1;

  console.log(`Fetching data for user ${userId}...`);

  const user = await fetchUser(userId);
  console.log("User:", user.name);
}
main();
```

### Activity 5: Module Bunding (Optional)

#### Task 8: Use a module bundle like Webpack or parcel to bundle multiple JavaScript files into a single file. write a script to demonstrate the bunding process.

```js
// src/math.js

export function add(a, b) {
  return a + b;
}

export function subtract() {
  return a - b;
}

// src/greeting.js

export function greet(name) {
  return `hello, ${name}`;
}

// src/index.js
import { add, subtract } from "./math.js";
import { greet } from "./greeting.js";

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(greet("Webpack"));
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Webpack Demo</title>
  </head>
  <body>
    <h1>Webpack Bundling Demo</h1>
    <script src="bundle.js"></script>
  </body>
</html>
`;
```

```js
//webpack.config.js
const path = require("path");

module.exports = {
entry: "./src/index.js",
output: {
filename: "bundle.js",
path: path.resolve(\_\_dirname, "dist"),
},
mode: "development",
};

//package.json
"scripts": {
  "build": "webpack"
};
```
