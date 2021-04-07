function getMatrixElementsSum(matrix) {
  let array = matrix;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i - 1][j] === 0) {
        array[i][j] = 0;
      }
    }
  }
  array = array.flat(Infinity).reduce((a, b) => a + b, 0);
  return array;
}

module.exports = getMatrixElementsSum;
