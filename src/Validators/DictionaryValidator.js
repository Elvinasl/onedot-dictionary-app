class DictionaryValidator {
    validateAll(rows) {
        this.validateDuplicates(rows, 'domain', 'range');
        this.validateForks(rows);
        return rows;
    }

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

  validateForks(rows) {
    const duplicateDomainRows = [];
    const allDomains = rows.map((row) => row.domain);

    // finding the rows with duplicate domains
    rows.forEach((row) => {
      if (this.countInArray(allDomains, row.domain) > 1) {
        // duplicate domain here!
        duplicateDomainRows.push(row);
      }
    });


    const duplicatePairs = duplicateDomainRows.map((row) => row.domain + row.range);

    duplicateDomainRows.forEach((row) => {
      // check if range is unique
      const pair = row.domain + row.range;
      if (this.countInArray(duplicatePairs, pair) === 1) {
        // this duplicate domain different range
        // eslint-disable-next-line no-param-reassign
        row.validation = `fork ${row.range}!`;
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
