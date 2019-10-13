import React from 'react';
import PropTypes from 'prop-types';

class NewDictionaryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };

    this.onAddRowClick = this.onAddRowClick.bind(this);
  }

  componentDidMount() {
    this.onAddRowClick();
  }

  onAddRowClick() {
    const { rows } = this.state;
    rows.push({
      domain: '',
      range: '',
      id: this.getNextId(),
    });
    this.setState({ rows });
  }

  onDomainChange(event, index) {
    this.updateRowData(index, 'domain', event.target.value);
  }

  onRangeChange(event, index) {
    this.updateRowData(index, 'range', event.target.value);
  }

  getNextId() {
    const { rows } = this.state;
    if (rows.length === 0) {
      return 1;
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

  onCreate() {
    console.log('create click');
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
            </tr>
          </thead>
          <tbody>
            {rows && rows.map((row, i) => (
              // I know its not good, but for this exercise it is not necessary to generate uuid.
              // eslint-disable-next-line react/no-array-index-key
              <tr key={i}>
                <td><input type="text" onChange={(e) => this.onDomainChange(e, i)} /></td>
                <td><input type="text" onChange={(e) => this.onRangeChange(e, i)} /></td>
                <td><button type="button" onClick={() => this.deleteRow(row.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={this.onAddRowClick}> Add row </button>
        <br />
        <button type="button" onClick={this.onCreate}> Create dictionary </button>
      </>
    );
  }
}

NewDictionaryTable.propTypes = {
};

export default NewDictionaryTable;
