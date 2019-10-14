import React from 'react';
import PropTypes from 'prop-types';
import DictionaryValidator from "../Validators/DictionaryValidator";

class NewOrEditDictionaryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // rows: props.rows.length > 0 ? props.rows : [],
      rows: [
        {
          domain: 'a',
          range: 'b',
          id: 1,
        },
        {
          domain: 'a',
          range: 'b1',
          id: 2,
        },
      ],
    };

    this.addRow = this.addRow.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  componentDidMount() {
    const { rows } = this.props;
    if (!rows.length > 0) {
      // only add new row if we are not editing
      this.addRow();
    }
  }

  onDomainChange(event, id) {
    this.updateRowData(id, 'domain', event.target.value);
  }

  onRangeChange(event, id) {
    this.updateRowData(id, 'range', event.target.value);
  }

  onSubmit() {
    const { rows } = this.state;
    const { callback, dictionaryIndex } = this.props;
    callback(rows, dictionaryIndex);
  }

  onValidate() {
    const { rows } = this.state;
    const validatedRows = DictionaryValidator.validateAll(rows);
    console.log(validatedRows);
  }

  getNextId() {
    const { rows } = this.state;
    if (rows.length === 0) {
      return 0;
    }
    // getting the highest id
    let max = 0;
    rows.forEach((row) => {
      if (row.id > max) {
        max = row.id;
      }
    });
    return max + 1;
  }

  addRow() {
    const { rows } = this.state;
    rows.push({
      domain: '',
      range: '',
      id: this.getNextId(),
    });
    this.setState({ rows });
  }

  // updates row data based on id of the row
  updateRowData(id, key, value) {
    this.setState((prevState) => ({
      rows: prevState.rows.map(
        (row) => (parseInt(row.id, 10) === id ? { ...row, [key]: value } : row),
      ),
    }));
  }

  deleteRow(id) {
    this.setState((prevState) => ({
      rows: prevState.rows.filter((row) => parseInt(row.id, 10) !== id),
    }));
  }

  render() {
    const { rows } = this.state;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Range</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {rows && rows.map((row, i) => (
              // I know its not good, but for this exercise it is not necessary to generate uuid.
              // eslint-disable-next-line react/no-array-index-key
              <tr key={i}>
                <td><input type="text" value={row.domain} onChange={(e) => this.onDomainChange(e, row.id)} /></td>
                <td><input type="text" value={row.range} onChange={(e) => this.onRangeChange(e, row.id)} /></td>
                <td><button type="button" onClick={() => this.deleteRow(row.id)}>Delete</button></td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={this.addRow}> Add row </button>
        <br />
        <button type="button" onClick={this.onSubmit}> Save dictionary </button>
        <br />
        <button type="button" onClick={this.onValidate}> Validate </button>
      </>
    );
  }
}

NewOrEditDictionaryTable.propTypes = {
  callback: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.string,
      range: PropTypes.string,
    }),
  ),
  dictionaryIndex: PropTypes.number,
};

// Specifies the default values for props:
NewOrEditDictionaryTable.defaultProps = {
  rows: [],
  dictionaryIndex: null,
};

export default NewOrEditDictionaryTable;
