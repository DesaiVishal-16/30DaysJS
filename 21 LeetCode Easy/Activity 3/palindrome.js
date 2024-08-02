// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on LeetCode.

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
