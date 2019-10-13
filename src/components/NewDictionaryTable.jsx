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

  onAddRowClick() {
    const { rows } = this.state;
    rows.push({
      domain: '',
      range: '',
      id: rows.length,
    });
    this.setState({ rows });
  }

  onDomainChange(event, index) {
    this.updateRowData(index, 'domain', event.target.value);
  }

  onRangeChange(event, index) {
    this.updateRowData(index, 'range', event.target.value);
  }

  // updates row data based on id of the row
  updateRowData(id, key, value) {
    this.setState((prevState) => ({
      rows: prevState.rows.map(
        (row) => (parseInt(row.id, 10) === id ? { ...row, [key]: value } : row),
      ),
    }));
  }

  render() {
    const { rows } = this.state;
    console.log(rows);
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
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={this.onAddRowClick}> Add row </button>
      </>
    );
  }
}

NewDictionaryTable.propTypes = {
  // dictionaries: PropTypes.arrayOf(
  //     PropTypes.shape({
  //         domani: PropTypes.string,
  //         range: PropTypes.string,
  //     }),
  // ).isRequired,
};

export default NewDictionaryTable;
