import React from 'react';
import PropTypes from 'prop-types';

class DictionariesTable extends React.Component {
  render() {
    const { rowData } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row) => (
            <tr key={row.domain}>
              <td>{row.domain}</td>
              <td>{row.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

DictionariesTable.propTypes = {
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.string,
      range: PropTypes.string,
    }),
  ).isRequired,
};

export default DictionariesTable;
