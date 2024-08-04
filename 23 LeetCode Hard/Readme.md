# Day 23: LeetCode Hard

## Tasks/Activities:

### Activity 1: Median of Two Sorted Arrays

#### Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.

```js
// Write a function that takes two sorted arrays of Integers and returns the median of the two sorted arrays.

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxLeftX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minRightX =
      partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

    const maxLeftY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minRightY =
      partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
}

// Log the median for a few test cases, including edge cases.
console.log(findMedianSortedArrays([1, 3], [2])); // Expected output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Expected output: 2.5
console.log(findMedianSortedArrays([], [1])); // Expected output: 1
console.log(findMedianSortedArrays([2], [])); // Expected output: 2
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6])); // Expected output: 3.5
```

### Activity 2: Merge k Sorted Lists

#### Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.

```js
// Write a function that takes an array of k linked lists,each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (!lists || lists.length === 0) return null;

  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
  }

  while (lists.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];
}

function createLinkedList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Create a few test cases with linked lists and log the merged list.
const testCases = [
  [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ],
  [],
  [[]],
];

for (const testCase of testCases) {
  const lists = testCase.map(createLinkedList);
  const mergedList = mergeKLists(lists);
  console.log(`Input: ${JSON.stringify(testCase)}`);
  console.log(`Output: ${JSON.stringify(linkedListToArray(mergedList))}`);
  console.log("---");
}
```

### Activity 3: Trapping Rain Water

##### Task 3: Solve the "Trapping Rain Water" problem on LeetCode.

```js
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
```

### Activity 4: N-Queens

#### Task 4: Solve the "N-Queens" problem on LeetCode.

```js
// Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.

function solveNQueens(n) {
  const board = Array(n)
    .fill()
    .map(() => Array(n).fill("."));
  const solutions = [];

  function isValid(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check upper-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check upper-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return solutions;
}

function formatSolutions(solutions) {
  return solutions.map(
    (solution) =>
      solution.map((row) => row.split("").join(" ")).join("\n") + "\n"
  );
}

// Log the distinct solutiond for afew test cases.
const testCases = [1, 4, 5];

for (const n of testCases) {
  console.log(`N-Queens for n = ${n}:`);
  const solutions = solveNQueens(n);
  console.log(`Number of solutions: ${solutions.length}`);
  console.log("Solutions:");
  console.log(formatSolutions(solutions).join("\n"));
  console.log("---");
}
```

### Activity 5: Word Ladder

#### Task 5: Solve the "Word Ladder" problem on LeetCode.

```js
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
```
