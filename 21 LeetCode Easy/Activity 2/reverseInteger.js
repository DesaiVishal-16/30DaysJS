// Activity 2: Reverse Integer

// Task 2: Solve the "Reverse Integer" problem on LeetCode.

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
