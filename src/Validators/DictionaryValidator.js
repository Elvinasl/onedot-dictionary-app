class DictionaryValidator {
  validateDuplicates(rows, key, value) {
    const keyValuePairs = rows.map((row) => row[key] + row[value]);
    rows.forEach((row) => {
      const pair = row[key] + row[value];
      if (this.countInArray(keyValuePairs, pair) > 1) {
        // eslint-disable-next-line no-param-reassign
        row.validation = `duplicate ${pair}!`;
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
