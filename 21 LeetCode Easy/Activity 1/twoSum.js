// Activity 1: Two Sum

// Task 1: Solve the "Two Sum" problem on leetcode.

// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

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
