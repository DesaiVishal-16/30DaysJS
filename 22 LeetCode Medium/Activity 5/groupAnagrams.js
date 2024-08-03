// Activity 5:  Group Anagrams

// Task 5: Solve the "Group Anagrams" problem on LeetCode.

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
