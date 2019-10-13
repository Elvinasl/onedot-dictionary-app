import React from 'react';
import PropTypes from 'prop-types';

class DictionariesTable extends React.Component {
  render() {
    const { dataset } = this.props;
    return (
      <table>
        <tr>
          <th>Product</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
        {dataset.map((row) => (
          <tr>
            <td>{row.product}</td>
            <td>{row.color}</td>
            <td>{row.price}</td>
          </tr>
        ))}
      </table>
    );
  }
}

DictionariesTable.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,
};

export default DictionariesTable;
