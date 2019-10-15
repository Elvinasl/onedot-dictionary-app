import React from 'react';
import PropTypes from 'prop-types';

class DictionariesTable extends React.Component {
  render() {
    const {
      rowData, onDelete, index, onEdit,
    } = this.props;
    return (
      <>
        <table className="table-container" width="100%">
          <thead>
            <tr className="flex-table header">
              <th className="flex-row first">Domain</th>
              <th className="flex-row">Range</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row) => (
              <tr className="flex-table row" key={row.domain}>
                <td className="flex-row first">{row.domain}</td>
                <td className="flex-row">{row.range}</td>
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
