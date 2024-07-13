// Day 1: Variables and Data Types

// Tasks/Activities:

// Activity 1:Variable Declaration

//Task 1:Declare a variable using var,assign it a number, and log the value to the console.
var num = 1;
console.log("Number", num);

//Task 2:Declare a variable  using let,assign it a string, and log the value to the console.
let name = "Vishal";
console.log("String", name);

// Activity 2:Constant Declaration

//Task 3: Declare a variable using const, assign it a boolean value,and log the value to the console.

const isMale = true;
console.log("Boolean", isMale);

// Activity 3: Dsta Types

//Task 4 : Create variables of different data types (number,string,boolean,object,array) and log each variables type using the typeof operator

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

//Activity 4:Reassiging Variables
//Task 5 : Declare a variable using let,assign it an initial value,reassign a new value,and log both values to the console.

let val = 5;
console.log("Assiging intial value", val);
val = 10;
console.log("Reassign new value", val);

//Activity 5 : Understanding const
//Task 6: Try reassigning a variable declared with const and observe the error
const val2 = 5;
console.log("Assiging intial value", val2);
val2 = 10;
console.log("Reassign new value", val2);
