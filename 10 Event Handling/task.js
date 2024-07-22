// Day 10 Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const pTag = document.getElementById("p-tag");
pTag.textContent = "Text content";
const button = document.getElementById("btn");
button.addEventListener("click", (e) => {
  pTag.textContent = "New Text Contend Added";
});

//Task 2: Add a double click listener to an image that toggles its visibility.

const img = document.getElementsByTagName("img")[0];
img.style.visibility = "hidden";

img.addEventListener("dblclick", (e) => {
  if (img.style.visibility === "hidden") {
    img.style.visibility = "visible";
  } else {
    img.style.visibility = "hidden";
  }
});

//Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that resets its background color.

const divEL = document.getElementById("div-element");

divEL.addEventListener("mouseover", (e) => {
  divEL.style.backgroundColor = "#000000";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.

divEL.addEventListener("mouseout", (e) => {
  divEL.style.backgroundColor = "";
});

// Activity 3: Keyboard Events

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const inputField = document.querySelector(".input-field");

inputField.addEventListener("keydown", (e) => {
  console.log(`Key Pressed: ${e.key}`);
});

//Task 6: Add a keyup event listeneer to an input field tat displays the current value in a paragraph.

const paraEl = document.getElementById("para");

inputField.addEventListener("keyup", (e) => {
  paraEl.textContent = inputField.value;
});

// Actiivity 4: FOrm Events

//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const formEvent = document.getElementById("form");

formEvent.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEvent);
  const formEnteries = Object.fromEntries(formData);

  console.log("Form Data", formEnteries);
});

//Task 8: Add a change event listener to a select a dropdown that displays the selected value in a paragraph

const select = document.getElementById("dropdown");
const display = document.getElementById("p-tag");

select.addEventListener("change", (e) => {
  display.textContent = `Slected Value ${e.target.value}`;
});

// Activity 5: Event Delegration

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById("ul-tag");

list.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    // if child-li has class name then can use => e.target.classList.contains("child-name")
    console.log(`Clicked item text: ${e.target.textContent}`);
  }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

list.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    const newItem = document.createElement("li");
    newItem.textContent = "New List Added";
    newItem.classList = "new-li";
    list.appendChild(newItem);
  }
});
