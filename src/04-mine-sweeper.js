function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    const prevRow = matrix[i - 1];
    const currRow = matrix[i];
    const nextRow = matrix[i + 1];
    for (let j = 0; j < matrix[i].length; j++) {
      let counter = 0;
      if (nextRow && nextRow[j] === true) counter++; // up
      if (prevRow && prevRow[j] === true) counter++; // down
      if (currRow[j + 1] === true) counter++; // right
      if (nextRow && nextRow[j + 1] === true) counter++; // up + right
      if (prevRow && prevRow[j + 1] === true) counter++; // down + right
      if (currRow[j - 1] === true) counter++; // left
      if (nextRow && nextRow[j - 1] === true) counter++; // up + left
      if (prevRow && prevRow[j - 1] === true) counter++; // down + left
      result[i][j] = counter;
    }
  }
  return result;
}

module.exports = minesweeper;
