function getCommonCharacterCount(str1, str2) {
  let result = 0;
  if (str1.length === 0 || str2.length === 0) return result;
  const array1 = str1.split('');
  const array2 = str2.split('');
  array1.forEach((letter) => {
    if (array2.includes(letter)) {
      result++;
      array2.splice(array2.indexOf(letter), 1);
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
