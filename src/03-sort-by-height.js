function sortByHeight(array) {
  const indexArray = [];
  const numberArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      indexArray.push(i);
    } else {
      numberArray.push(array[i]);
    }
  }
  numberArray.sort((a, b) => (a - b));
  const newArray = [];
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (indexArray.includes(i)) {
      newArray[i] = -1;
    } else {
      newArray[i] = numberArray[j];
      j++;
    }
  }
  return newArray;
}

module.exports = sortByHeight;
