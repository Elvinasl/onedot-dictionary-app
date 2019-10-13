import React from 'react';
import PropTypes from 'prop-types';

class DatasetTable extends React.Component {
  render() {
    const { dataset } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {dataset.map((row) => (
            <tr key={row.product}>
              <td>{row.product}</td>
              <td>{row.color}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

DatasetTable.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,
};

export default DatasetTable;
