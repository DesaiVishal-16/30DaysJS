//Feature Request

// 1. Number Check Script : Write a script that checks id a number is positive,negative,or zero using if-else statements and logs the result.

const num = 3;
if (num > 0) {
  console.log(`${num} is Positive Number`);
} else if (num === 0) {
  console.log(`${num} is Zero`);
} else {
  console.log(`${num} is Negative Number`);
}

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

const age = 18;
if (age >= 18) {
  console.log("You are Eligible for vote");
} else {
  console.log("You are not Eligible for vote");
}

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the dat name.

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

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a frade based on a score anf logs the grade.

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

//5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditons and logs the result.

const year = 2024;

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log(`${year} is a Leap Year`);
} else {
  console.log(`${year} is not a Leap Year`);
}
