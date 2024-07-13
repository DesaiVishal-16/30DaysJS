# Day 1: Variables and Data Types

## Tasks/Activities:

### Activity 1 : Variable Declaration

#### Task 1 : Declare a variable using var,assign it a number, and log the value to the console.

```javascript
var num = 1;
console.log("Number", num);
```

#### Task 2 : Declare a variable using let,assign it a string, and log the value to the console.

```javascript
let name = "Vishal";
console.log("String", name);
```

### Activity 2 : Constant Declaration

#### Task 3: Declare a variable using const, assign it a boolean value,and log the value to the console.

```javascript
const isMale = true;
console.log("Boolean", isMale);
```

### Activity 3: Dsta Types

#### Task 4 : Create variables of different data types (number,string,boolean,object,array) and log each variables type using the typeof operator

```javascript
const number = 1;
console.log("type of number is", typeof number);

const string = "string";
console.log("type of string is", typeof string);

const boolean = false;
console.log("type of boolean is", typeof boolean);

const object = {
  id: 22,
  name: "Vishal",
  isMale: true,
};
console.log("type of object is", typeof object);

const array = [1, 2, 3, 4, 5, 6];
console.log("type of array is", typeof array);
```

### Activity 4: Reassiging Variables

#### Task 5 : Declare a variable using let,assign it an initial value,reassign a new value,and log both values to the console.

```javascript
let val = 5;
console.log("Assiging intial value", val);
val = 10;
console.log("Reassign new value", val);
```

### Activity 5 : Understanding const

#### Task 6: Try reassigning a variable declared with const and observe the error

```javascript
const val2 = 5;
console.log("Assiging intial value", val2);
val2 = 10;
console.log("Reassign new value", val2);
```

## Feture Request

### 1. Variable Types console Log : Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

```javascript
const number = 1;
const string = "Vishal";
const boolean = true;
const object = {
  id: 22,
  name: "Vishal",
  isMale: true,
};
const array = [1, 2, 3, 4, 5];
const undefinedVar = undefined;
const nothing = null;
const symbol = Symbol("name");
const func = function foo() {
  console.log("foo");
};
const date = new Date();
const regex = /[a-z]/;

console.log("Number is", number, typeof number);
console.log("String is", string, typeof string);
console.log("Boolean is", boolean, typeof boolean);
console.log("Object is", object, typeof object);
console.log("Array is", array, typeof array);
console.log("Undefined is", undefinedVar, typeof undefinedVar);
console.log("Nothing is", nothing, typeof nothing);
console.log("Symbol is", symbol, typeof symbol);
console.log("function is", func, typeof func);
console.log("date is", date, typeof date);
console.log("Regrex is", regex, typeof regex);
```

### 2. Ressaignment Demo: Create a script that demonstrate the differnce in behavir between let and const when it comees to reassignment

```javascript
// Using let, you can change refernce of a variable
let num1 = 5;
console.log(num1); // 5
num1 = 10;
console.log(num1); // 10

// Using const, you cant change refrence of variable
const num2 = 5;
console.log(num2); //5
num2 = 10; //TypeError: Assignment to constant variable.
console.log(num2);
```
