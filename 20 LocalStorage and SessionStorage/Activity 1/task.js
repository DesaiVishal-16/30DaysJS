// Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

const { LocalStorage } = require("node-localstorage");
const { json } = require("stream/consumers");

const localStorage = new LocalStorage("./scratch");
localStorage.setItem("string", "Just a string");

const retriveData = localStorage.getItem("string");
console.log(retriveData);

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const Person = {
  FirstName: "Vishal",
  LastName: "Desai",
  age: 22,
  is_Male: true,
};

localStorage.setItem("user", JSON.stringify(Person));
const retriveJson = localStorage.getItem("user");
const retrieveObject = JSON.parse(retriveJson);
console.log(retrieveObject);
