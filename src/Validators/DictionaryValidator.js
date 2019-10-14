class DictionaryValidator {
  validateDuplicateKeys(rows, key) {
    const allDomains = rows.map((row) => row[key]);

    rows.forEach((row) => {
      if (this.countInArray(allDomains, row[key]) >= 2) {
        // eslint-disable-next-line no-param-reassign
        row.validation = `duplicate ${key}!`;
      }
    });
    return rows;
  }

  // calculates number of the same entries in the given array
  countInArray(array, needle) {
    let timesExists = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === needle) {
        timesExists += 1;
      }
    }
    return timesExists;
  }
}

export default new DictionaryValidator();
