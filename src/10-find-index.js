function findIndex(array, value) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) return i;
  }
  return 0;
}

module.exports = findIndex;
