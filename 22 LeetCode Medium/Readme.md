# Day 22: LeetCode Medium

## Tasks/Activites:

### Activity 1: Add Two Numbers

#### Task 1: Solve the "Add Two Numbers" problem on LeetCode.

```js
// Write a function that takes two non-empty linked lists representing two  non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Create a few test cases with linked lists and log the sum as a linked list.

const testCases = [
  [
    [2, 4, 3],
    [5, 6, 4],
  ],
  [[0], [0]],
  [
    [9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9],
  ],
];

for (let [arr1, arr2] of testCases) {
  const l1 = createLinkedList(arr1);
  const l2 = createLinkedList(arr2);
  const result = addTwoNumbers(l1, l2);
  console.log(`${arr1} + ${arr2} = ${linkedListToArray(result)}`);
}
```

### Activity 2: Longest Substring Without Repeating Characters

#### Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.

```js
// Write a function that takes a string and returns the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    if (charMap.has(s[end])) {
      start = Math.max(charMap.get(s[end]) + 1, start);
    }
    charMap.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Log the length for a few test cases, including edge cases.
const testCases = [
  "abcabcbb",
  "bbbbb",
  "pwwkew",
  "",
  "a",
  "aab",
  "dvdf",
  "tmmzuxt",
];

for (let testCase of testCases) {
  console.log(`"${testCase}": ${lengthOfLongestSubstring(testCase)}`);
}
```

### Activity 3: Container With Most Water

#### Task 3: Solve the "Container With Most Water" problem in LeetCode.

```js
// Write a function that takes and array of non-negative integers where each integer represents the height of a linde drawn at each point. FInd two lines that togeter with the x-axis form a container,such that the container holds the most water.

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let containerHeight = Math.min(height[left], height[right]);
    let water = width * containerHeight;
    maxWater = Math.max(maxWater, water);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Log the maximum amount of water for a few test cases.
const testCases = [
  [1, 8, 6, 2, 5, 4, 8, 3, 7],
  [1, 1],
  [4, 3, 2, 1, 4],
  [1, 2, 1],
  [1, 8, 6, 2, 5, 4, 8, 25, 7],
];

for (let testCase of testCases) {
  console.log(`Input: [${testCase}]`);
  console.log(`Maximum water: ${maxArea(testCase)}`);
  console.log("---");
}
```

### Activity 4: 3SUm

#### Task 4: Solve the "3Sum" problem on LeetCode.

```js
// Write a fucntion that takes an array of integers and finds all uniqur triplets in the array which give the sum of zero.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Log the triplets for a few test cases, including edge cases.
const testCases = [
  [-1, 0, 1, 2, -1, -4],
  [],
  [0],
  [0, 0, 0],
  [-2, 0, 1, 1, 2],
  [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
];

for (let testCase of testCases) {
  console.log(`Input: [${testCase}]`);
  console.log(`Triplets: ${JSON.stringify(threeSum(testCase))}`);
  console.log("---");
}
```

### Activity 5: Group Anagrams

#### Task 5: Solve the "Group Anagrams" problem on LeetCode.

```js
// Write a function that takes an array of strings and groups anagrams together.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr, []);
    }
    anagramMap.get(sortedStr).push(str);
  }

  return Array.from(anagramMap.values());
}

// Log the grouped anagrams for a few test cases.
const testCases = [
  ["eat", "tea", "tan", "ate", "nat", "bat"],
  [""],
  ["a"],
  ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"],
  ["hhhhu", "tttti", "tttit", "hhhuh", "hhuhh", "tittt"],
];

for (let testCase of testCases) {
  console.log(`Input: ${JSON.stringify(testCase)}`);
  console.log(`Grouped Anagrams: ${JSON.stringify(groupAnagrams(testCase))}`);
  console.log("---");
}
```
