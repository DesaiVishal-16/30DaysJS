//1. Variable Types console Log : Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

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

//2. Ressaignment Demo: Create a script that demonstrate the differnce in behavir between let and const when it comees to reassignment

// in let you can change refernce of a variable
let num1 = 5;
console.log(num1); // 5
num1 = 10;
console.log(num1); // 10

// in const cant change refrence of variable
const num2 = 5;
console.log(num2); //5
//num2 = 10; //TypeError: Assignment to constant variable.
console.log(num2);
