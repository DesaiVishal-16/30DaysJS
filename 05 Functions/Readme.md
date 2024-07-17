# Day 5 : Functions

## Tasks/Activities:

### Activity 1 : Function Declaration

#### Task 1 : Write a function to check if a number is even or odd anf log the result to the console.

```js
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even Number`);
  } else {
    console.log(`${num} is Odd Number`);
  }
}
checkEvenOdd(29);
```

#### Task 2 : Write a function to calculate the square of a number and return the result.

```js
function squareOfNum(num) {
  console.log(`Square of ${num} is ${num * num}`);
}
squareOfNum(2);
```

### Activity 2 :Function Expression

#### Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console.

```js
function maxNum(a, b) {
  const max = a > b ? a : b;
  console.log(`The Maximum of ${a} and ${b} is ${max}`);
}

maxNum(3, 2);
```

#### Task 4 : Write a Function expression to concatenate two strings and return the result.

```js
function concatStrings(str1, str2) {
  const concat = str1.concat(str2);
  console.log(`The Concat of ${str1} and ${str2} is ${concat}`);
}
concatStrings("Hi", " welcome");
```

### Activity 3 : Arrow Functions

#### Task 5 : Write an arrow function to calculate the sum of two numbers and return the result.

```js
const sumOfNum = (num1, num2) => {
  const sum = num1 + num2;
  console.log(`The Sum of ${num1} and ${num2} is ${sum}`);
};
sumOfNum(3, 6);
```

#### Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value.

```js
const specificChar = (str, char) => {
  const findSpecificChar = str.includes(char) ? true : false;
  console.log(`Is ${char} exists in ${str} : ${findSpecificChar}`);
};
specificChar("specific", "if");
```

### Activity 4 : Function Parameters and Default Values.

#### Task 7 : Write a function that takes two parameters and returns their product.Provide a default value for the second parameter.

```js
function productOfNum(num1, num2 = 5) {
  const product = num1 * num2;
  console.log(`Product of ${num1} and ${num3} is ${product}`);
}
productOfNum(3);
```

#### Task 8 :Write a function that takes a person`s name and age returns a gretting message.Provide a default value for the age.

```js
function greetingPerson(name, age = 22) {
  console.log(`Hello ${name}! You are ${age} years old`);
}
greetingPerson("Vishal");
```

### Activity 5 : Higher-Order Functions

#### Task 9 : Write a higher-order function that takes function and number,and calls the function that many times.

```js
function repeatFunc(fun, times) {
  for (let i = 1; i <= times; i++) {
    fun();
  }
}
function fun() {
  console.log(`Function repeated.`);
}
repeatFunc(fun, 4);
```

#### Task 10 : Write a higher-order function that takes two functions and a value,applies the first function to the value, and then applies the second function to the result.

```js
function hof(fun1, fun2, value) {
  return fun2(fun1(value));
}
function fun1(value) {
  return value + 2;
}
function fun2(value) {
  console.log(value * 10);
}

hof(fun1, fun2, (value = 3));
```

## Feature Request:

#### 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

```js
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even Number`);
  } else {
    console.log(`${num} is Odd Number`);
  }
}
checkEvenOdd(44);
```

#### 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.

```js
function squareOfNum(num) {
  console.log(`Square of ${num} is ${num * num}`);
}
squareOfNum(2);
```

#### 3. Concatenation function Script : Write a script that includes a function expression to concatenate two strings and returns the result.

```js
function concatStrings(str1, str2) {
  const concat = str1.concat(str2);
  console.log(`The Concat of ${str1} and ${str2} is ${concat}`);
}
concatStrings("Hi", " welcome");
```

#### 4. Sum Calculation Arrow function Script : Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

```js
const sumOfNum = (num1, num2) => {
  const sum = num1 + num2;
  console.log(`The Sum of ${num1} and ${num2} is ${sum}`);
};
sumOfNum(3, 6);
```

#### 5. Higher-Order Function Script : Write a script that includes a higher-order function to apply a given function multiple times.

```js
function repeatFunc(fun, times) {
  for (let i = 1; i <= times; i++) {
    fun();
  }
}
function fun() {
  console.log(`Function repeated.`);
}
repeatFunc(fun, 4);
```
