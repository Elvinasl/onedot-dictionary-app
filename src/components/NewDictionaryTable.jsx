import React from 'react';
import PropTypes from 'prop-types';

class NewDictionaryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };

    this.onAddRowClick = this.onAddRowClick.bind(this);
    this.onCreate = this.onCreate.bind(this);
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

  onDomainChange(event, id) {
    this.updateRowData(id, 'domain', event.target.value);
  }

  onRangeChange(event, id) {
    this.updateRowData(id, 'range', event.target.value);
  }

  onCreate() {
    const { rows } = this.state;
    const { callback } = this.props;
    callback(rows);
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
  callback: PropTypes.func.isRequired,
};

export default NewDictionaryTable;
