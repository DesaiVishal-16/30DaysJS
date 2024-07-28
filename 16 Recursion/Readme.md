# Day 16: Recursion

## Tasks/Activities:

### Activity 1: :Basic Recursion

#### Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

```js
function factorial(n) {
  if (n === 0 || n < 0) return 1;

  return n * factorial(n - 1);
}

const resultOfFactorial = factorial(3);
console.log(resultOfFactorial);
```

#### Task 2: Write a recursive function to calculate the nth Fibonacci number.Log the result for a few test cases.

```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 11; i++) {
  console.log(fibonacci(i));
}
```

### Activity 2: Recursion with Arrays

#### Task 3: Write a recursive function to find the sum of all elements in an array.Log the result for a few test cases.

```js
function sumOfArray(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] + sumOfArray(arr, index + 1);
}
const arr1 = sumOfArray([1, 2, 3, 4, 5]);
const arr2 = sumOfArray([10, 20, 30, 40, 50]);
const arr3 = sumOfArray([-1, -2, -3, -4, -5]);
console.log("Sum of array of arr1 is", arr1);
console.log("Sum of array of arr2 is", arr2);
console.log("Sum of array of arr3 is", arr3);
```

#### Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

```js
function maximumEL(arr, index = 0) {
  if (index >= arr.length || arr.length === 0) return 0;
  return Math.max(arr[index], maximumEL(arr, index + 1));
}
const arrOne = maximumEL([1, 2, 3, 4, 5]);
const arrTwo = maximumEL([1, 2, 3, 4, 5, 6, 7, 89, 9, 24, 232]);
const arrThree = maximumEL([5, 10, 20, 31, 41, 53, 64, 75]);
console.log(
  `The maxium no of Element in an Array is:",
  for arrOne : ${arrOne},
  for arrTwo:${arrTwo},
  for arrThree:${arrThree}`
);
```

### Activity 3: String Manipulation with Recursion.

#### Task 5: Write a recursice function to reverse a string. Log the result for a few test cases.

```js
function reverseString(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

const str1 = "hello";
const str2 = "world";
const str3 = "hello world! Vishal";
const str4 = "";
const str5 = "fhdsfhsdfjshdfhsdfhsdfhsdfhsdfhs";
console.log("Reversed hello", reverseString(str1));
console.log("world", reverseString(str2));
console.log("Reversed hello world! Vishal", reverseString(str3));
console.log("Reversed empty string", reverseString(str4));
console.log("Reversed fhdsfhsdfjshdfhsdfhsdfhsdfhsdfhs", reverseString(str5));
```

#### Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

```js
function checkPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (str.length <= 1) return `${str} is a parlindrome`;
  function isPalindrome(s, start, end) {
    if (start >= end) return true;
    if (s[start] !== s[end]) return false;
    return isPalindrome(s, start + 1, end - 1);
  }
  const result = isPalindrome(str, 0, str.length - 1);
  return result ? `${str} is a Palindrome` : `${str} is not a Palindrome`;
}
const strP1 = "tit";
const strP2 = "tac";
const strP3 = "A man, a plan, a canal, Panama";
const strP4 = "";
console.log(checkPalindrome(strP1));
console.log(checkPalindrome(strP2));
console.log(checkPalindrome(strP3));
```

### Activity 4: Recursive Search

#### Task 7: Write a recursive function to perform binary search on a sorted array.Log the index of the target element for a few test cases.

```js
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, , 8, 9];
const target1 = 5;
const target2 = 8;
const target3 = 1;
const target4 = 3;

console.log(`Index of ${target1} in arr:`, binarySearch(arr, target1));
console.log(`Index of ${target2} in arr:`, binarySearch(arr, target2));
console.log(`Index of ${target3} in arr:`, binarySearch(arr, target3));
console.log(`Index of ${target4} in arr:`, binarySearch(arr, target4));
```

#### Task 8: Write a recursive function to count the occurrence of a target element in a an array. Log the result for a few test cases.

```js
function countOcurrence(arr, target, index = 0) {
  if (index >= arr.length) return 0;

  return (
    (arr[index] === target ? 1 : 0) + countOcurrence(arr, target, index + 1)
  );
}

const arrOC = [1, 2, 3, 4, 5, 6, 3, , 2, 4];
const targetOne = 5;
const targetTwo = 8;
const targetThree = 1;
const targetFour = 3;

console.log(
  `Occurrence of ${targetOne} in arr:`,
  countOcurrence(arrOC, targetOne)
);
console.log(
  `Occurrence of ${targetTwo} in arr:`,
  countOcurrence(arrOC, targetTwo)
);
console.log(
  `Occurrence of ${targetThree} in arr:`,
  countOcurrence(arrOC, targetThree)
);
console.log(
  `Occurrence of ${targetFour} in arr:`,
  countOcurrence(arrOC, targetFour)
);
```

### Activity 5: Tree Traversal

#### Task 9: Write a recursive function to perform an in-order treaversal of a binary tree. Log the nodes as they are visited.

```js
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  // Visit left subtree
  inOrderTraversal(node.left);

  // Visit root node
  console.log(node.value);

  // Visit right subtree
  inOrderTraversal(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);
```

#### Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

```js
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function calculateDepth(node) {
  if (node === null) {
    return 0;
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  // The depth of the current node is the greater of the two depths plus one
  return Math.max(leftDepth, rightDepth) + 1;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);

const root3 = null;

console.log("Depth of the binary tree (root1):", calculateDepth(root1));
console.log("Depth of the binary tree (root2):", calculateDepth(root2));
console.log("Depth of the binary tree (root3):", calculateDepth(root3));
```
