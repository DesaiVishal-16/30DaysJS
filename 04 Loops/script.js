//Feature Request

//1.Number Printing Script : Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

for (let i = 1; i <= 10; i++) {
  console.log("Numbers from 1 to 10", i);
}

let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 10);

//2. Multiplication Table script: Create a script that prints the multiplication table of 5 using a for loop.

let tableOf = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${tableOf} x ${i} = ${tableOf * i} `);
}

//3. Pattern Printing Script : Write a script that prints a pattern of stars using nested loops.

let star = "*";
let numOfStar = 5;
for (let i = 1; i <= numOfStar; i++) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    rows += star;
  }
  console.log(rows);
}

//4. Sum Calculation Script that calculates the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let number = 1;
while (number <= 10) {
  sum += number;
  number++;
}
console.log("Sum of Number 1 to 10 is", sum);

//5. Factorial Calculation Script : Create a script that calculates the factorial of a number using a do..while loop.

let fact = 1;
let numOfFact = 5;
do {
  fact *= numOfFact;
  numOfFact--;
} while (numOfFact > 0);
console.log("Factoial of given Number is", fact);
