// Day 12 : Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

const intentionalError = () => {
  throw new Error("This is an error");
};
const handleError = () => {
  try {
    intentionalError();
  } catch (error) {
    console.error("Error", error);
  }
};
handleError();

// Task 2: Create a function that divides two numbers and throws an error if the demoninator is zero. Use a try-catch block to handle this error.

const divide = (numerator, demoninator) => {
  if (demoninator === 0) {
    throw new Error("Demoninator is Zero");
  }
  return numerator / demoninator;
};

const handleDivide = (numerator, demoninator) => {
  try {
    const result = divide(numerator, demoninator);
    console.log("The Division is:", result);
  } catch (err) {
    console.error(err.message);
  }
};
handleDivide(2, 0);

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try,catch, and finally blocks to observe the execution flow.

const executionWithError = () => {
  try {
    console.log("Entering in try block");
    throw new Error("Something went wrong");
    console.log("This line will be not executed");
  } catch (err) {
    console.log("Entering in catch Block");
    console.error(err.message);
  } finally {
    console.log("Entering in finally block");
    console.log("This block will be executed,regardless of error");
  }
};
executionWithError();

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instanceof this customs error in a function and handle it using aa try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

function throwError() {
  throw new CustomError("This is a custom error");
}

function handleCustomError() {
  try {
    throwError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.log("Caughr a custom Error:", error.message);
    } else {
      console.log("An unknown error occured:", error.message);
    }
  }
}
handleCustomError();

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails.Handle the custom error using a try-catch block.

const validateInput = (input) => {
  if (!input && input.trim() === "") {
    throw new CustomError("Input cannot be empty");
  }
  return true;
};

try {
  const input = "";
  validateInput(input);
  console.log("Input is valid");
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Validate error:", error.message);
  } else {
    console.log("Unexpected error:", error.message);
  }
}

// Activity 4: Error Handling in Promises

// Task 6:  Create a promise that randomly resolves rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function getRandomNumber() {
  return Math.random();
}

function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = getRandomNumber();
    setTimeout(() => {
      if (randomNumber > 0.3) {
        resolve("The promise has been resolved");
      } else {
        reject("The promise has been rejected.");
      }
    });
  }, 1000);
}

randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandomPromise() {
  try {
    const message = await randomPromise();
    console.log(message);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

const invalidUrl = "https://invalidurl.com/data";

fetch(invalidUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error(`Fetch error: ${error.message}`);
  });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
  try {
    const response = await fetch(invalidUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
  }
}

fetchData();
