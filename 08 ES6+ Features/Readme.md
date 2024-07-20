# Day 8: ES6+ Features

## Tasks/Activities

### Activity 1: Template Literals

#### Task 1: Use template literals to create a string that includes variable for a person`s name and age, and log the string to the console.

```js
const name = "Vishal";
const age = 22;
const personDetail = `Name is ${name} and age is ${age}`;
console.log(personDetail);
```

#### Task 2: Create a multi-line string using template literals and log it to the console.

```js
const multiLineString = `Hi my name is Vishal Desai.
I completed the Js challenge until day 7.
Today is Day 8 and I am excited to complete this task`;

console.log(multiLineString);
```

### Activity 2: Destructuring

#### Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

```js
const arrOfNum = [1, 2, 3, 4, 5, 6];
const [firstNum, secondNum] = arrOfNum;
console.log(`First Element of an array is ${firstNum}, & 
Second Element of an array is ${secondNum}`);
```

#### Task 4: Use Object destructuting ti extract the title and author form a book object and log them to the console.

```js
const book = {
  title: "The Book of Five Rings",
  author: "Miyamoto Musashi",
};

const { title, author } = book;
console.log(`Title is ${title} & 
author is ${author}`);
```

### Activity 3: Spread and Rest Operators

#### Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

```js
const arrOfAlpha = ["A", "B", "C"];

const additionalEl = [...arrOfAlpha, "D", "E"];
console.log(additionalEl);
```

#### Task 6: Use the rest opeerator in a function to accept an arbitray number of arguments,sum them,and return the result.

```js
function addNums(...numArr) {
  return numArr.reduce((total, curr) => total + curr, 0);
}
const sum = addNums(1, 2, 3, 4, 5);
console.log(sum);
```

### Activity 4: Default Parameters

#### Task 7: Write a funciton that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

```js
function multi(num1, num2 = 1) {
  return num1 * num2;
}

const resultWithOnePara = multi(5);
const resultWithBothPara = multi(5, 4);
console.log(`Result without second parameter ${resultWithOnePara}`);
console.log(`Result with second parameter ${resultWithBothPara}`);
```

### Activity 5: Enchanced Object Literals

#### Task 8: Use enhanced object literals to create an object with methods and properties,and log the object to the console.

```js
const userName = "Vishal";
const userAge = 22;

const userObject = {
  userName,
  userAge,

  greet() {
    return `Hi ${this.userName} Welcome!`;
  },
  incrementAge() {
    return (this.userAge += 1);
  },
};
console.log(userObject);
console.log(userObject.greet());
console.log(userObject.incrementAge());
console.log(userObject.userName);
console.log(userObject.userAge);
```

#### Task 9: Create an object with computed property names based with methods and properties, and log the object to the console.

```js
const propName1 = "firstName";
const propName2 = "LastName";
const firstName = "Vishal";
const methodName = "getFullName";

const personObject = {
  [propName1]: firstName,
  [propName2]: "Desai",
  [methodName]() {
    return `${this[propName1]} ${this[propName2]}`;
  },
};
console.log(personObject);
console.log(personObject.firstName);
console.log(personObject.getFullName());
```
