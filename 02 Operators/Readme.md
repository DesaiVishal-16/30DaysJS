# Day 2 : Operators

## Tasks/Activities:

### Activity 1 : Arithmetic operations

#### Task 1 : Write a program to add two numbers and log the result to the console.

```javascript
const a = 3;
const b = 4;

const c = a + b;
console.log("Addition", c);
```

#### Task 2 : Write a program to subtract two numbers and log the result to the console.

```javascript
const d = 2;
const e = 5;
const f = d - e;
console.log("Subtraction", f);
```

#### Task 3 : Write a program to multiply two numbers amd log the result to the console

```javascript
const g = 6;
const h = 7;
const i = g \* h;
console.log("Multiplication", i);
```

#### Task 4 : Write a program to divide two numberd and log the result to the console.

```javascript
const j = 10;
const k = 2;
const l = j / k;
console.log("Division", l);
```

#### Task 5 : Write a program to find the remainder when one number is divided by another and log the result to the console.

```javascript
const m = 33;
const n = 3;
const o = m % n;
console.log("Modulus", o);
```

### Activity 2 :Assigmrnt Operators

#### Task 6 : Use the += operator to add a number to a variable and log the result to the console.

```javascript
let p = 5;
p += 4;
console.log("Addition equal to", p);
```

#### Task 7 : Use the -= operator to subtract a number from a variable and log the result to the console.

```javascript
p -= 2;
console.log("Subtraction equal to", p);
```

### Activity 3 : Comparison Operators

#### Task 8 : Write a program to compare two numbers using > and < and log the result to the console.

```javascript
const q = 5;
const r = 20;
const s = q < r;
const t = q > r;
console.log(`${q}, is Smaller than,${r} is ${s}`);
console.log(`${q}, is Greater than,${r} is ${t}`);
```

#### Task 9 : Write a program to compare two numbers using >= and <= and log the result to the console.

```javascript
const u = 5;
const v = 5;
const w = u >= v;
const w1 = u <= v;
console.log(`${u} Greater than equal to ${v} is ${w}`);
console.log(`${u} Smaller than equal to ${v} is ${w1}`);
```

#### Task 10 : Write a program to compare two numbers using == and === and log the result to the console.

```javascript
const x = 3;
const y = "3";

console.log(`${x} is double equal to ${y} is ${x == y}`);
console.log(`${x} is strick check/triple equal to ${y} is ${x === y}`);
```

### Activity 4 : Logical Operators

#### Task 11 : Write a program that uses the && operator to combine two conditions and log the result to the console.

```javascript
const a1 = 5;
const a2 = 5;
if (a1 > a2 && a >= a2) {
  console.log("Both Condition Satisified");
} else {
  console.log("One Conditon Failed");
}
```

#### Task 12 : Write a program that usrs the || opertor to combine two conditions and log the result to the console.

```javascript
const b1 = 3;
const b2 = 2;
if (b1 > b2 || b1 < b2) {
  console.log("One Condition Satisified");
} else {
  console.log("Both Condition not Satisified");
}
```

#### Task 13 : Write a program that uses the ! operator to negate a condition and log the result to the console.

```javascript
const c1 = 4;
const c2 = 4;
const c3 = c1 != c2;
console.log(`${c1} is not equal to ${c2} is ${c3}`);
```

### Activity 5 : Ternary Operator

#### Task 14 : Write a program that udrd the ternary operator to check if a number is positive or negative and log the result to the console.

```javascript
const d1 = 4;
const d2 = d1 > 0 ? "is positive" : "is negative";
console.log("Positive or Negative", d2);
```

## Feature Request

#### 1. Arithemetic Operations Script : Write a script that performs basic artimetic operations (addition,subtraction,multiplication,division,remainder) on two numbers and logs the results.

```javascript
const a = 3;
const b = 5;

console.log(`Addition of Numbers is ${a + b}`);

console.log(`Subtraction of Numbers is ${a - b}`);

console.log(`Multiplication of Numbers is ${a * b}`);

console.log(`Division of Numbers is ${a / b}`);

console.log(`Remainder of Numbers is ${a % b}`);
```

#### 2. Comparsion and Logical Operators Script : Create a script that compares two numbers using different comparison operators and combines conditions using logical operators,logging the results.

```javascript
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
```

#### 3. Ternary Opertor Script : Write a script that uses the ternary opertor to determine if a number is positive or negative and logd the result.

```javascript
const x = 5;
const y = 0;

console.log(`${x > y ? "is Positive" : "is Neagtive"}`);
```
