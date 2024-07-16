//Day 4 : Loops

//Tasks/Activities:

//Activity 1 : For Loop

//Task 1 : Write a program to print numbers from 1 to 10 using for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task 2 : Write a program to print the multiplication table of 4 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//Activity 2 : While Loop

//Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(`Sum of Number from 1 to 10 ${sum}`);

//Task 4 : Write a program to print numbers from 10 to 1 using a while loop.

let num2 = 10;

while (num2 >= 1) {
  console.log(`Decending Number from 10 to 1 is ${num2}`);
  num2--;
}

//Activity 3 : Do... While Loop.

//Task 5 : Write a program to print numbers from 1 to 5 using a do..while loop.

let num3 = 5;
do {
  console.log(`Accending Numbers from 1 to 5${num3}`);
  num3++;
} while (num3 <= 5);

//Task 6 : Write a program to calculate the factorial of a number using a do...while loop.

let num4 = 5;
let fact = 1;
do {
  fact *= num4;
  num4--;
} while (num4 > 0);
console.log(`Factorial is ${fact}`);

//Activity 4 : Nested Loops.

//Task 7 : Write a program to print a pattern using nested for loops:

let star = "*";

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += star;
  }
  console.log(row);
}

//Activity 5 : Loop Control Statements.

//Task 8 : Write a program to print numbers from 1 to 10,but skip the number 5 using the continue,

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`Numbers 1 to 10,but skip 5 : ${i}`);
}

//Task 9 : Write a program to print numbers from 1 to 10,but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(`Print Numbers from 1 to 10,but stop at 7 ${i}`);
}
