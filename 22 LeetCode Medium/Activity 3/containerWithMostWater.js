// Activity 3: Container With Most Water

// Task 3: Solve the "Container With Most Water" problem in LeetCode.

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
