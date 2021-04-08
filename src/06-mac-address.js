function isMAC48Address(inputString) {
  const regex = /[0-9A-F-]+/gm;
  const matchString = inputString.match(regex).join('');
  if (matchString === inputString) return true;
  return false;
}

module.exports = isMAC48Address;
