import React from 'react';
import PropTypes from 'prop-types';

class DictionariesTable extends React.Component {
  render() {
    const {
      rowData, onDelete, index, onEdit,
    } = this.props;
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
            {rowData.map((row) => (
              <tr key={row.domain}>
                <td>{row.domain}</td>
                <td>{row.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
        Delete this dictionary:
          <button type="button" onClick={() => onDelete(index)}>Delete</button>
        </p>
        <p>
          Edit this dictionary:
          <button type="button" onClick={() => onEdit(rowData, index)}>Edit</button>
        </p>
      </>
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
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default DictionariesTable;
