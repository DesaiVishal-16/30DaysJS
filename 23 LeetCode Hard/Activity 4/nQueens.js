// Activity 4: N-Queens

// Task 4: Solve the "N-Queens" problem on LeetCode.

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
