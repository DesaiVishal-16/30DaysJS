// Activity 3: Trapping Rain Water

// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.

// Write a funcion that takes an array of non-negative intergers representing an elevation map where the width of each bar is 1, and computed how much water it can trap after raining.

function trap(height) {
  if (height.length <= 2) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

// Log the amount of trapped water for a few test cases.
const testCases = [
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
  [4, 2, 0, 3, 2, 5],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 1, 1, 1, 1],
];

for (const testCase of testCases) {
  console.log(`Input: [${testCase.join(",")}]`);
  console.log(`Trapped water: ${trap(testCase)}`);
  console.log("---");
}
