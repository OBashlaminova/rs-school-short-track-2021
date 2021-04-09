function getEmailDomain(email) {
  const emailArray = email.split('@');
  return emailArray[emailArray.length - 1];
}

module.exports = getEmailDomain;
