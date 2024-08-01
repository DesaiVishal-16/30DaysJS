// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

const { LocalStorage } = require("node-localstorage");
const sessionStorage = new LocalStorage("./sessionStorage");

sessionStorage.setItem("newSession", "New Session Added");

const retrieveData = sessionStorage.getItem("newSession");
console.log(retrieveData);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

sessionStorage.setItem("newObject", JSON.stringify({ name: "vishal" }));
const retrieveJson = sessionStorage.getItem("newObject");
const retrieveObject = JSON.parse(retrieveJson);
console.log(retrieveObject);
