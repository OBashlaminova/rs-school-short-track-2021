function encodeLine(str) {
  const array = str.split('');
  let result = '';
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      count++;
    } else {
      count++;
      if (i === 0 || count === 1) {
        result += `${array[i]}`;
      } else {
        result += `${count}${array[i - 1]}`;
      }
      count = 0;
    }
  }
  return result;
}

module.exports = encodeLine;
