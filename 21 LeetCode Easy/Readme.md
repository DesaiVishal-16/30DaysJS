# Day 21: LeetCode Easy

## Tasks/Activities:

### Activity 1: Two Sum

#### Task 1: Solve the "Two Sum" problem on leetcode.

##### Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

```js
// Time Complexity => O(N^2)
// Space Complexity => O(1)

function TwoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (target == arr[i] + arr[j]) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(`---------------------------------------`);

// Optimized code
// Time Complexity => O(N)
// Space Complexity => O(N)

function TwoSumOpt(arr, target) {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (numMap.has(diff)) {
      return [numMap.get(diff), i];
    }
    numMap.set(arr[i], i);
  }
  return null;
}

// Log the indices for a few test cases.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr3 = [10, 20, 30, 40, 50];
const arr4 = [30, 20, 20, 14, 5];

const target1 = 4;
const target2 = 17;
const target3 = 60;
const target4 = 25;

const result1 = TwoSumOpt(arr1, target1);
const result2 = TwoSumOpt(arr2, target2);
const result3 = TwoSumOpt(arr3, target3);
const result4 = TwoSumOpt(arr4, target4);
console.log(
  `Array is ${arr1} and target is ${target1} and indices is ${result1}`
);
console.log(
  `Array is ${arr2} and target is ${target2} and indices is ${result2}`
);
console.log(
  `Array is ${arr3} and target is ${target3} and indices is ${result3}`
);
console.log(
  `Array is ${arr4} and target is ${target4} and indices is ${result4}`
);
```

### Activity 2: Reverse Integer

#### Task 2: Solve the "Reverse Integer" problem on LeetCode.

```js
// Write a function that takes an integer and returns. It with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.

function reverseInteger(nums) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  let reversed = 0;

  while (nums !== 0) {
    const pop = nums % 10;
    nums = Math.trunc(nums / 10);

    if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && pop > 7))
      return 0;
    if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && pop < -8))
      return 0;

    reversed = reversed * 10 + pop;
  }

  return reversed;
}

// Log the reversed integers for a few test cases.

const nums = 1234;
const result = reverseInteger(nums);
console.log(result);
```

### Activity 3: Palindrome Number

#### Task 3: Solve the "Palindrome Number" problem on LeetCode.

```js
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.

function isPalindrome(integer) {
  if (integer < 0) return false;

  if (integer < 10) return true;

  let div = 1;
  while (integer / div >= 10) {
    div *= 10;
  }

  while (integer > 0) {
    let left = Math.floor(integer / div);
    let right = integer % 10;

    if (left !== right) return false;

    integer = Math.floor((integer % div) / 10);
    div /= 100;
  }

  return true;
}

// Log the result for a few test cases, including edge cases like negative numbers.

const integer1 = 1221;
const integer2 = 1023;
const integer3 = 45677654;
const result1 = isPalindrome(integer1);
const result2 = isPalindrome(integer2);
const result3 = isPalindrome(integer3);
console.log(`${integer1} is Palindrome or not? : ${result1}`);
console.log(`${integer2} is Palindrome or not? : ${result2}`);
console.log(`${integer3} is Palindrome or not? : ${result3}`);
```

### Activity 4: Merge Two Sorted Lists

#### Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.

```js
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  }
  if (l2 !== null) {
    current.next = l2;
  }

  return dummy.next;
}

// Create a few test cases with linked lists and log the merged list.
function runTestCases() {
  let l1 = createLinkedList([1, 2, 4]);
  let l2 = createLinkedList([1, 3, 4]);
  let merged = mergeTwoLists(l1, l2);
  console.log("Test case 1:", linkedListToArray(merged));

  // Test case 2: One empty list
  l1 = createLinkedList([]);
  l2 = createLinkedList([0]);
  merged = mergeTwoLists(l1, l2);
  console.log("Test case 2:", linkedListToArray(merged));

  // Test case 3: Both empty lists
  l1 = createLinkedList([]);
  l2 = createLinkedList([]);
  merged = mergeTwoLists(l1, l2);
  console.log("Test case 3:", linkedListToArray(merged));

  // Test case 4: Lists of different lengths
  l1 = createLinkedList([1, 3, 5, 7, 9]);
  l2 = createLinkedList([2, 4, 6]);
  merged = mergeTwoLists(l1, l2);
  console.log("Test case 4:", linkedListToArray(merged));
}

runTestCases();
```

### Activity 5: Valid Paraentheses

#### Task 5: Solve the "Valid Parentheses" problem on LeetCode.

```js
// Write a function that takes a string containing just the characters '(',')','{','}','['and']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.

function isValid(s) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Log the result for a few test cases.

function runTestCases() {
  const testCases = ["()", "()[]{}", "(]", "([)]", "{[]}", "", "(((", ")]}"];

  testCases.forEach((testCase, index) => {
    console.log(
      `Test case ${index + 1}: "${testCase}" is ${
        isValid(testCase) ? "valid" : "invalid"
      }`
    );
  });
}

runTestCases();
```
