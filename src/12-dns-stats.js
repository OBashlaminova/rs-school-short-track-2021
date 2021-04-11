function getDNSStats(domainsArray) {
  return domainsArray.reduce((result, domain) => {
    const parts = domain.split('.').reverse();
    const nextResult = result;

    const joinedParts = parts.reduce((reversedDomains, part, index) => {
      const previousPart = reversedDomains[index - 1];
      reversedDomains.push(`${previousPart || ''}.${part}`);
      return reversedDomains;
    }, []);

    joinedParts.forEach((part) => {
      if (result[part]) {
        nextResult[part]++;
      } else {
        nextResult[part] = 1;
      }
    });

    return nextResult;
  }, {});
}

module.exports = getDNSStats;
