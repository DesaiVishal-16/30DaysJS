// Activity 4: 3SUm

// Task 4: Solve the "3Sum" problem on LeetCode.

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
