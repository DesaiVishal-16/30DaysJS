# Day 20: LocalStorage and SessionStorage

## Tasks/Activities:

### Activity 1: Understanding LocalStorage

#### Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

```sql
const { LocalStorage } = require("node-localstorage");
const { json } = require("stream/consumers");

const localStorage = new LocalStorage("./scratch");
localStorage.setItem("string", "Just a string");

const retriveData = localStorage.getItem("string");
console.log(retriveData);
```

#### Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

```js
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
```

### Activity 2: Using LocalStorage

#### Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

```js
const form = document.getElementById("userForm");
const savedDataDiv = document.getElementById("savedData");

function saveData(name, email) {
  localStorage.setItem("userData", JSON.stringify({ name, email }));
}

function retrieveData() {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : null;
}

function displaySavedData() {
  const userData = retrieveData();
  if (userData) {
    savedDataDiv.innerHTML = `
    <h2>Saved Data</h2>
    <p>Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    `;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  saveData(name, email);
  displaySavedData();
  form.reset();
});

displaySavedData();
```

#### Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

```js
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./scratch");

localStorage.setItem("newItem", "itemAdded");
function logLocalStorage() {
  console.log("Current localStorage content:");
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
  }
  console.log("-------------------");
}

console.log("Before removal:");
logLocalStorage();

const itemToRemove = "newItem";
localStorage.removeItem(itemToRemove);

console.log("After removal:");
logLocalStorage();
```

### Activity 3: Understanding SessionStorage

#### Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

```js
const { LocalStorage } = require("node-localstorage");
const sessionStorage = new LocalStorage("./sessionStorage");

sessionStorage.setItem("newSession", "New Session Added");

const retrieveData = sessionStorage.getItem("newSession");
console.log(retrieveData);
```

#### Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

```js
sessionStorage.setItem("newObject", JSON.stringify({ name: "vishal" }));
const retrieveJson = sessionStorage.getItem("newObject");
const retrieveObject = JSON.parse(retrieveJson);
console.log(retrieveObject);
```

### Activity 4: Using SessionStorage

#### Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

```js
const form = document.getElementById("userForm");
const savedDataDiv = document.getElementById("savedData");

function saveData(name, email) {
  sessionStorage.setItem("userData", JSON.stringify({ name, email }));
}

function retrieveData() {
  const userData = sessionStorage.getItem("userData");
  return userData ? JSON.parse(userData) : null;
}

function displaySavedData() {
  const userData = retrieveData();
  if (userData) {
    savedDataDiv.innerHTML = `
    <h2>Saved Data</h2>
    <p>Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    `;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  saveData(name, email);
  displaySavedData();
  form.reset();
});

displaySavedData();
```

#### Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

```js
const { LocalStorage } = require("node-localstorage");
const sessionStorage = new LocalStorage("./sessionStorage");

sessionStorage.setItem("newItem", "itemAdded");
function logSessionStorage() {
  console.log("Current sessionStorage content:");
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    console.log(`${key}: ${value}`);
  }
  console.log("-------------------");
}

console.log("Before removal:");
logSessionStorage();

const itemToRemove = "newItem";
sessionStorage.removeItem(itemToRemove);

console.log("After removal:");
logSessionStorage();
```

### Activity 5: Comparing LocalStorage and SessionStorage

#### Task 9: Write a function that acceptd a key and a value, and save the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

```js
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./localStorage");
const sessionStorage = new LocalStorage("./sessionStorage");

function saveAndRetrieve(key, value) {
  localStorage.setItem(key, value);
  console.log(`Saved to localStorage: ${key} = ${value}`);

  sessionStorage.setItem(key, value);
  console.log(`Saved to sessionStorage: ${key} = ${value}`);

  const localValue = localStorage.getItem(key);
  console.log(`Retrieved from localStorage: ${key} = ${localValue}`);

  const sessionValue = sessionStorage.getItem(key);
  console.log(`Retrieved from sessionStorage: ${key} = ${sessionValue}`);
}

const key = "myKey";
const value = "Hello, Storage!";

saveAndRetrieve(key, value);
```

#### Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

```js
const { LocalStorage } = require("node-localstorage");

const localStorage2 = new LocalStorage("./localStorage");
const sessionStorage2 = new LocalStorage("./sessionStorage");

function clearAllStorage() {
  localStorage2.clear();
  console.log("localStorage cleared.");
  sessionStorage2.clear();
  console.log("sessionStorage cleared.");

  if (localStorage2.length === 0) {
    console.log("Verified: localStorage is empty.");
  } else {
    console.log(
      `Warning: localStorage still contains ${localStorage2.length} item(s).`
    );
  }

  if (sessionStorage2.length === 0) {
    console.log("Verified: sessionStorage is empty.");
  } else {
    console.log(
      `Warning: sessionStorage still contains ${sessionStorage2.length} item(s).`
    );
  }
}

console.log("Before clearing:");
console.log(`localStorage has ${localStorage.length} item(s).`);
console.log(`sessionStorage has ${sessionStorage.length} item(s).`);

clearAllStorage();

console.log("\nAfter clearing:");
console.log(`localStorage has ${localStorage.length} item(s).`);
console.log(`sessionStorage has ${sessionStorage.length} item(s).`);
```
