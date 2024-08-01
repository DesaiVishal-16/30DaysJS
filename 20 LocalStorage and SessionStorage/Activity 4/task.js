// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

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

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

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
