function deleteDigit(number) {
  const myFunc = (num) => Number(num);
  const numberArr = Array.from(String(number), myFunc);
  const min = Math.min.apply(null, numberArr);

  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] === min) {
      numberArr.splice(i, 1);
    }
  }

  return parseInt(numberArr.join(''), 10);
}

module.exports = deleteDigit;
