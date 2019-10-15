class DictionaryValidator {
  validateAll(rows) {
    // this.validateDuplicates(rows, 'domain', 'range');
    // this.validateForks(rows);
    // this.validateCycles(rows);
    this.validateChains(rows);
    return rows;
  }

  validateDuplicates(rows, key, value) {
    const keyValuePairs = rows.map((row) => row[key] + row[value]);
    rows.forEach((row) => {
      const pair = row[key] + row[value];
      if (this.countInArray(keyValuePairs, pair) > 1) {
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
        row.validation = `fork ${row.range}!`;
      }
    });
    return rows;
  }

  validateCycles(rows) {
    const domains = rows.map((row) => row.domain);
    const ranges = rows.map((row) => row.range);

    rows.forEach((row) => {
      if (domains.includes(row.range) && ranges.includes(row.domain)) {
        row.validation = `cycle ${row.range}!`;
      }
    });
  }

  validateChains(rows) {
    const validDomains = [];
    const validRanges = [];

    rows.forEach((row) => {
      if (!validDomains.includes(row.domain)) {
        validDomains.push(row.domain);
      }

      if (!validRanges.includes(row.range)) {
        validRanges.push(row.range);
      }

      if (validRanges.includes(row.domain) || validDomains.includes(row.range)) {
        // chain!
        row.validation = `chain ${row.domain} - ${row.range}!`;
      }
    });
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
