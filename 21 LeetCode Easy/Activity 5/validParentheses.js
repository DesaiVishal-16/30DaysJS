// Activity 5: Valid Paraentheses

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.

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
