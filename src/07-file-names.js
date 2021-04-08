function renameFiles(fileArray) {
  const resultFileArray = [];
  for (let i = 0; i < fileArray.length; i++) {
    const fileName = fileArray[i];
    resultFileArray[i] = fileName;
    let k = 0;
    for (let j = 0; j < i; j++) {
      if (fileName === resultFileArray[j] || fileName === fileArray[j]) {
        k++;
      }
      if (j === i - 1 && k !== 0) {
        resultFileArray[i] += `(${k})`;
      }
    }
  }
  return resultFileArray;
}

module.exports = renameFiles;
