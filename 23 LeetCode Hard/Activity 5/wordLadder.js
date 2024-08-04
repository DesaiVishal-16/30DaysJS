// Activity 5: Word Ladder

// Task 5: Solve the "Word Ladder" problem on LeetCode.

// Write a function that takes a begin word,an end word, and a dictionary of words, and finds the length of the shortest teansformation sequence form the begin word to the end word,such that only one letter can be changed at a time and each tranformed word must exist in the word list.

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];
  const visited = new Set([beginWord]);

  while (queue.length) {
    const [word, level] = queue.shift();

    if (word === endWord) return level;

    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        // ASCII codes for 'a' to 'z'
        const newWord =
          word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
        if (wordSet.has(newWord) && !visited.has(newWord)) {
          queue.push([newWord, level + 1]);
          visited.add(newWord);
        }
      }
    }
  }

  return 0;
}

// Log the length of the shortest transformation sequence for a few test cases.
const testCases = [
  {
    beginWord: "hit",
    endWord: "cog",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"],
  },
  {
    beginWord: "hit",
    endWord: "cog",
    wordList: ["hot", "dot", "dog", "lot", "log"],
  },
  {
    beginWord: "sail",
    endWord: "boat",
    wordList: ["sail", "bail", "bait", "bain", "rain", "ruin", "roan", "boat"],
  },
  {
    beginWord: "a",
    endWord: "c",
    wordList: ["a", "b", "c"],
  },
];

for (const { beginWord, endWord, wordList } of testCases) {
  console.log(`Begin Word: "${beginWord}"`);
  console.log(`End Word: "${endWord}"`);
  console.log(`Word List: [${wordList.map((w) => `"${w}"`).join(", ")}]`);
  const result = ladderLength(beginWord, endWord, wordList);
  console.log(`Shortest transformation sequence length: ${result}`);
  console.log("---");
}
