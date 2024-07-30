# Day 18: Alogrithms

## Tasks/Activities:

### Activity 1: Sorting Alogrithms

#### Task 1: Implement the bubble sort an array of numbers in aasending order. Log the sorted array.

```js
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(numbers));
```

#### Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

```js
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

const numbers2 = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(numbers2));
```

#### Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

```js
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

const numbers3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", quicksort(numbers3));
```

### Activity 2: Searching Algorithms

#### Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage
const numbers4 = [64, 34, 25, 12, 22, 11, 90];
const target = 22;
const index = linearSearch(numbers, target);

if (index !== -1) {
  console.log(`Target value ${target} found at index: ${index}`);
} else {
  console.log(`Target value ${target} not found in the array.`);
}
```

#### Task 5: Implement the binary search algorithm to find a target valur ina a sorted array. Log the index of the target value.

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

const sortedNumbers = [11, 22, 25, 34, 64, 90];
const target2 = 34;
const index2 = binarySearch(sortedNumbers, target2);

if (index2 !== -1) {
  console.log(`Target value ${target2} found at index: ${index2}`);
} else {
  console.log(`Target value ${target2} not found in the array.`);
}
```

### Activity 3: String Algorithms

#### Task 6: Write a function to count the occurrence of each character in a string. Log the character counts.

```js
function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char in charCount) {
    console.log(`Character: '${char}', Count: ${charCount[char]}`);
  }
}

const inputString = "hello world";
countCharacterOccurrences(inputString);
```

#### Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

```js
function longestUniqueSubstring(str) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (char in charIndexMap && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }

    charIndexMap[char] = end;

    maxLength = Math.max(maxLength, end - start + 1);
  }

  console.log(
    `Length of the longest substring without repeating characters: ${maxLength}`
  );
}

const inputString2 = "abcabcbb";
longestUniqueSubstring(inputString2);
```

### Activity 4: Array Algorithms

#### Task 8: Write a function to rotate an array by k positions. Log the rotated array.

```js
function rotateArray(arr, k) {
  k = k % arr.length;

  reverse(arr, 0, arr.length - 1);

  reverse(arr, 0, k - 1);

  reverse(arr, k, arr.length - 1);

  console.log("Rotated array:", arr);
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(array, k);
```

#### Task 9: Write a fucntion to merge two sorted arrays into one sorted array. Log the merged array.

```js
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log("Merged array:", mergedArray);
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
mergeSortedArrays(array1, array2);
```

### Activity 5: Dynamic Programming

#### Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

```js
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

const num = 10;
const fibonacciNumbers = fibonacci(num);
console.log("Fibonacci numbers:", fibonacciNumbers);
```

#### Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maxiumum value that can be obtained.

```js
function knapsack(weights, values, capacity) {
const n = weights.length;
const dp = Array(n + 1)
.fill(null)
.map(() => Array(capacity + 1).fill(0));

for (let i = 1; i <= n; i++) {
for (let w = 0; w <= capacity; w++) {
if (weights[i - 1] <= w) {
dp[i][w] = Math.max(
dp[i - 1][w],
dp[i - 1]w - weights[i - 1]] + values[i - 1]
);
} else {
dp[i][w] = dp[i - 1][w];
}
}
}

return dp[n][capacity];
}

const weights = [1, 2, 3, 8, 7, 4];
const values = [20, 5, 10, 40, 15, 25];
const capacity = 10;
const maxValue = knapsack(weights, values, capacity);
console.log("Maximum value that can be obtained:", maxValue);
```
