# Day 9: Dom Manipulation

## Tasks/Activities

### Activity 1: Selecting and Manipulating Elements

#### Task 1: Select and HTML element by its ID and changr its text content.

```js
const divEl = document.getElementById("divElement");
divEl.textContent = "Change the text content";
```

#### Task 2: Select an HTML element by its class and changes its background color.

```js
const spanEl = document.getElementsByClassName("spanElement");
spanEl.style.backgroundColor = "blue";
```

### Activity 2: Creating and Appending Elements

#### Task 3: Create a new div element with some text content and append it to the body.

```js
const newDivEl = document.createElement("div");
newDivEl.textContent = "New div added in body";

const body = document.getElementsByTagName(body)[0];
body.append(newDivEl);
```

#### Task 4: Create a new li element and add it to an exisiting ul list.

```js
const newListEl = document.createElement("li");
const ulEl = document.getElementById("ulList");

ulEl.appendChild(ulEl);
```

### Activity 3: Removing Elements

#### Task 5: Select and HTML element and remove it from the DOM.

```js
const divEl = document.getElementById("divElement");
divEl.remove();
```

#### Task 6: Remove the last child of a specific HTML element.

```js
const parentEl = socument.getElementById("parentElement");
parentEl.removeChild(parentEl.lastElementChild);
```

### Activity 4: Modifying Attributes and Classes

#### Task 7: Select an HTML elements and change one of its attributes(e.g, src of an img tag)

```js
const imgEl = document.getElementById("img");
imgEl.src = "something.png";
```

#### Task 8: Add and remove a CSS class to/from an HTML element.

```js
const pEl = document.getElementById("p");
pEl.classList.add("added-newclass");
pEl.classList.remove("added-newclass");
```

### Activity 5: Event Handling

#### Task 9: Add a click event listener to a button that changes the text content of a paragraph.

```js
const paraEl = document.getElementsByTagName("p")[0];
const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
  paraEl.textContent = "text change after clicked button";
});
```

#### Task 10: Add a mouseover event listener to an element that changes its border color.

```js
button.addEventListener("mouseover", (e) => {
  paraEl.style.borderColor = "red";
});
```
