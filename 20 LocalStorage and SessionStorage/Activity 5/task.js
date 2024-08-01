// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that acceptd a key and a value, and save the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
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

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
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
