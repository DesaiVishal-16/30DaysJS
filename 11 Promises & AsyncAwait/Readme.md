# Day 11: Promises and Await/Await

## Tasks/Activities:

### Activity 1: Understanding Promises

#### Task 1: Create a promise that resolves with a messge after a 2-second timeout and log the message to the console.

```js
const displayMessageResolve = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

displayMessageResolve.then((message) => {
  console.log(message);
});
```

#### Task 2: Create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch().

```js
const displayMessageReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Failed"));
  }, 2000);
});
displayMessageReject.catch((error) => {
  console.error(error.message);
});
```

### Activity 2: Chaining Promises

#### Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order.

```js
const fetchApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users/1");
    if (!response.ok) {
      throw new Error("404 not found");
    }
    return response.json();
  } catch (error) {
    throw new Error("Network error server down");
  }
};

fetchApi()
  .then((data) => {
    console.log("Api Successfully Fetched");
    return data;
  })
  .then((data) => {
    console.log("Data Processing...");
    return data;
  })
  .then((data) => {
    console.log("Data Processed", data);
  })
  .catch((error) => {
    console.error("Api Failed to Fetch", error.message);
  })
  .finally(() => {
    console.log("Operation Completed");
  });
```

### Activity 3: Using Async/Await

#### Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

```js
const asyncFuncResolve = async () => {
  const promise = await new Promise((resolve) => {
    resolve("Success");
  });
  console.log(promise);
};
asyncFuncResolve();
```

#### Task 5: Write an async function that handles a rejected promise using try catch and logs the error message.

```js
const asyncFuncReject = async () => {
  try {
    const promise = await new Promise((_, reject) => {
      reject(new Error("Failed"));
    });
    console.log(promise);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
asyncFuncReject();
```

### Activity 4: Fetching Data from an API

#### Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

```js
fetch("https://dummyjson.com/users/2")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.firstName);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### Task 7: Use the fetch API to get data from a pubkic API and log the response data to the console using async/await.

```js
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/users/3");
    if (!response.ok) {
      throw new Error("Failed");
    }
    const data = await response.json();
    console.log(data.firstName);
  } catch (error) {
    console.error(error);
  }
}
fetchData();
```

### Activity 5: Concurrent Promises

#### Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

```js
const promiseOne = new Promise((resolve) =>
  setTimeout(() => {
    resolve("value1");
  }, 1000)
);

const promiseTwo = new Promise((resolve) =>
  setTimeout(() => {
    resolve("value2");
  }, 2000)
);
const promiseThree = new Promise((resolve) =>
  setTimeout(() => {
    resolve("value3");
  }, 3000)
);

Promise.all([promiseOne, promiseTwo, promiseThree])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### Task 9: Use Promise.race to log the value of he first promise that resolves among multiple promises.

```js
const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("value1");
  }, 1000)
);

const promise2 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("value2");
  }, 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("value3");
  }, 3000)
);

Promise.race([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
