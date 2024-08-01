// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

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

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
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
