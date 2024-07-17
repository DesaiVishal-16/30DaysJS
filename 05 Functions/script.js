//Feature Request:

//1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even Number`);
  } else {
    console.log(`${num} is Odd Number`);
  }
}
checkEvenOdd(44);

//2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.

function squareOfNum(num) {
  console.log(`Square of ${num} is ${num * num}`);
}
squareOfNum(2);

//3. Concatenation function Script : Write a script that includes a function expression to concatenate two strings and returns the result.

function concatStrings(str1, str2) {
  const concat = str1.concat(str2);
  console.log(`The Concat of ${str1} and ${str2} is ${concat}`);
}
concatStrings("Hi", " welcome");

//4. Sum Calculation Arrow function Script : Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

const sumOfNum = (num1, num2) => {
  const sum = num1 + num2;
  console.log(`The Sum of ${num1} and ${num2} is ${sum}`);
};
sumOfNum(3, 6);

//5. Higher-Order Function Script : Write a script that includes a higher-order function to apply a given function multiple times.

function repeatFunc(fun, times) {
  for (let i = 1; i <= times; i++) {
    fun();
  }
}
function fun() {
  console.log(`Function repeated.`);
}
repeatFunc(fun, 4);
