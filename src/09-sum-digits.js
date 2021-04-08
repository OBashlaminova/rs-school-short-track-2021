function getSumOfDigits(number) {
  const numberArray = String(number).split('').map((elem) => Number(elem));
  const result = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (result < 10) return result;
  return getSumOfDigits(result);
}

module.exports = getSumOfDigits;
