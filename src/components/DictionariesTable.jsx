import React from 'react';
import PropTypes from 'prop-types';

class DictionariesTable extends React.Component {
  render() {
    const { dictionaries } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          {dictionaries.map((row) => (
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
  dictionaries: PropTypes.arrayOf(
    PropTypes.shape({
      domani: PropTypes.string,
      range: PropTypes.string,
    }),
  ).isRequired,
};

export default DictionariesTable;
