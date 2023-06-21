const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]];

function sudoku(puzzle) {
  const length = puzzle[0].length; // length equal 9

  function isComplete () {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (puzzle[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  function isPuzzleValue (value, row, col) {
    // search in row and column
    for (let i = 0; i < length; i++) {
      if (puzzle[row][i] === value || puzzle[i][col] === value) return false;
    }
    // search in square 3 * 3
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (puzzle[i][j] === value) return false;
      }
    }
    return true;
  }

  function isMainSearch () {
    if (isComplete()) return true;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (puzzle[i][j] === 0) {
          for (let value = 1; value < 10; value++) {
            if (isPuzzleValue(value, i, j)) {
              puzzle[i][j] = value;

              if (isMainSearch()) return true;

              puzzle[i][j] = 0;
            }
          }
          return false;
        }
      }
    }
    return isMainSearch();
  }

  isMainSearch();
  return puzzle;
}

// sudoku(puzzle);
sudoku(puzzle).map((item) => console.log(item))