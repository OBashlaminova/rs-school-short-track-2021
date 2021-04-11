function removeKFromList(list, target) {
  if (list === null) {
    return null;
  }

  const nextList = list;

  if (nextList.value === target) {
    return removeKFromList(nextList.next, target);
  }

  nextList.next = removeKFromList(nextList.next, target);

  return nextList;
}

module.exports = removeKFromList;
