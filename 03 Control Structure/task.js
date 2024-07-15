//Day 3 : Control Structures

//Tasks/Activities:

//Activity 1 : If-Else Statements

//Task 1 : Write a program to check if a number is positive,negative, or zero, and log the result to the console.

const num = 0;
if (num > 0) {
  console.log("num Iis Postive");
} else if (num == 0) {
  console.log("num is Zero");
} else {
  console.log("num is Negative");
}

//Task 2 : Write a program to check if a person is eligible to vote (age>=18) and log the result to the cosnole.

const age = 20;
if (age >= 18) {
  console.log("You are eligible");
} else {
  console.log("You not eligible");
}

//Activity 2 : Nested if-else statements

//Task 3 : Write a program to find the largest of three numbers using nested if-else statements.

const num1 = 3;
const num2 = 5;
const num3 = 4;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("Num1 is largest Number");
  } else {
    console.log("Num3 is Largest Number");
  }
} else if (num2 > num1) {
  if (num2 > num3) {
    console.log("Num 2 is largest Number");
  } else {
    console.log("Num3 is largest number");
  }
} else {
  console.log("Num3 is largest Number");
}

//Activity 3 : Switch Case

//Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Not a valid Day");
    break;
}

//Task 5 : Write a program that uses a switch case to assign a grade ("A","B","C","D","F") based on ascore and log the grade to the console.

const score = 55;

switch (true) {
  case score < 35:
    console.log("You Failed");
    break;
  case score <= 45:
    console.log("You got F Grade");
    break;
  case score <= 55:
    console.log("You fot D Grade");
    break;
  case score <= 65:
    console.log("You fot C Grade");
    break;
  case score <= 85:
    console.log("You fot B Grade");
    break;
  case score <= 100:
    console.log("You fot A Grade");
    break;
  default:
    console.log("Not Valid Score");
    break;
}

//Activity 5 : Combining Conditions:

//Task 7 : Write a program to check if a year using multiple conditions (divisible by 4 but not 100 unless aldo divisible by 400) and log the result to the console.

const year = 2024;

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log(`${year} is a Leap Year`);
} else {
  console.log(`${year} is not a Leap Year`);
}
