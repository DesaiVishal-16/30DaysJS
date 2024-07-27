# Day 15: Closures

## Tasks/Activities:

### Activity 1: Understanding Closures

#### Task 1: Write a function that returns another function, where the inner function access a variable from the outer function`s scope. Call the inner function and log the result.

```js
function outerFunction() {
  let outerVariable = "This is outer variable";
  function innerFunction() {
    return outerVariable;
  }
  return innerFunction;
}

const innerFunc = outerFunction();
console.log(innerFunc());
```

#### Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

```js
function Counter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = Counter();

myCounter.increment();
console.log(myCounter.getValue());

myCounter.increment();
console.log(myCounter.getValue());
```

### Activity 2: Practical Closures

#### Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

```js
function uniqueIdGenerator() {
  let lastId = 0;
  return function () {
    lastId++;
    return lastId;
  };
}

const generateUniqueId = uniqueIdGenerator();

console.log(generateUniqueId());
console.log(generateUniqueId());
```

#### Task 4: Create a closure that captures a user`s name and returns a function that greets the user by name.

```js
function user(name) {
  const userName = name;
  function greeting() {
    return `Hello ${userName} Welcome!`;
  }
  return greeting;
}
const userGreeting = user("Vishal");
console.log(userGreeting());
```

### Activity 3: Closures in Loops

#### Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

```js
function createArrayOfFunction() {
  const arrayOfFunc = [];
  for (let i = 0; i < 10; i++) {
    arrayOfFunc.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }
  return arrayOfFunc;
}
const funcCall = createArrayOfFunction();
funcCall[1]();
funcCall[2]();
funcCall[6]();
funcCall[5]();
```

### Activity 4: Module Pattern

#### Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add,remove,and list items.

```js
const createItemManager = (function () {
  let items = [];

  function addItem(item) {
    items.push(item);
    console.log(`${item} added to collection.`);
  }
  function removeItem(item) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
      console.log(`${item} removed from the collection.`);
    } else {
      console.log(`${item} not found in the collection.`);
    }
  }
  function listItems() {
    console.log("Items in the collection");
    items.forEach((item, index) => {
      console.log(`${index + 1}:${item}`);
    });
  }
  return {
    add: addItem,
    remove: removeItem,
    list: listItems,
  };
})();

createItemManager.add("item 1");
createItemManager.add("item 2");
createItemManager.list();
createItemManager.remove("item 2");
```

### Activity 5: Memorization

#### Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

```js
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.hasOwnProperty(key)) {
      console.log("Returning from cache:", key);
      return cache[key];
    }
    console.log("Computing result for:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
```

#### Task 8: Create a memoized version of a function that calculates the factorial of a number.

```js
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.hasOwnProperty(key)) {
      console.log("Returning from cache:", key);
      return cache[key];
    }
    console.log("Computing result for:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(4));
console.log(memoizedFactorial(3));
console.log(memoizedFactorial(2));
```
