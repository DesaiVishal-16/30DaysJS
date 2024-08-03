// Activity 2: Longest Substring Without Repeating Characters

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.

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
