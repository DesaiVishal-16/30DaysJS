//Feature Request

// 1. Arithemetic Operations Script : Write a script that performs basic artimetic operations (addition,subtraction,multiplication,division,remainder) on two numbers and logs the results.

const a = 3;
const b = 5;

console.log(`Addition of Numbers is ${a + b}`);

console.log(`Subtraction of Numbers is ${a - b}`);

console.log(`Multiplication of Numbers is ${a * b}`);

console.log(`Division of Numbers is ${a / b}`);

console.log(`Remainder of Numbers is ${a % b}`);

//2. Comparsion and Logical Operators Script : Create a script that compares two numbers using different comparison operators and combines conditions using logical operators,logging the results.

// Define two numbers
const num1 = 5;
const num2 = 10;

// Comparison Operators
console.log(`num1 = ${num1}, num2 = ${num2}`);

// Equal to (==)
console.log(`num1 == num2: ${num1 == num2}`);

// Not equal to (!=)
console.log(`num1 != num2: ${num1 != num2}`);

// Strict equal to (===)
console.log(`num1 === num2: ${num1 === num2}`);

// Strict not equal to (!==)
console.log(`num1 !== num2: ${num1 !== num2}`);

// Greater than (>)
console.log(`num1 > num2: ${num1 > num2}`);

// Less than (<)
console.log(`num1 < num2: ${num1 < num2}`);

// Greater than or equal to (>=)
console.log(`num1 >= num2: ${num1 >= num2}`);

// Less than or equal to (<=)
console.log(`num1 <= num2: ${num1 <= num2}`);

// Logical Operators
// AND (&&)
console.log(`(num1 < num2) && (num1 == 10): ${num1 < num2 && num1 == 10}`);
console.log(`(num1 > num2) && (num1 == 10): ${num1 > num2 && num1 == 10}`);

// OR (||)
console.log(`(num1 < num2) || (num1 == 10): ${num1 < num2 || num1 == 10}`);
console.log(`(num1 > num2) || (num1 == 10): ${num1 > num2 || num1 == 10}`);

// NOT (!)
console.log(`!(num1 < num2): ${!(num1 < num2)}`);
console.log(`!(num1 > num2): ${!(num1 > num2)}`);

//3. Ternary Opertor Script : Write a script that uses the ternary opertor to determine if a number is positive or negative and logd the result.

const x = 5;
const y = 0;

console.log(`${x > y ? "is Positive" : "is Neagtive"}`);
