import React from 'react';
import PropTypes from "prop-types";

class DictionariesTable extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>

      </>
    );
  }
}

DictionariesTable.propTypes = {
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      domain: PropTypes.string,
      range: PropTypes.string,
    }),
  ).isRequired,
};

export default DictionariesTable;
