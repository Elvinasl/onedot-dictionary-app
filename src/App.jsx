import React from 'react';
import Datasets from './Datasets';
import DatasetTable from './components/DatasetTable';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataset: Datasets.original,
    };
  }


  render() {
    const { dataset } = this.state;
    return (
      <DatasetTable dataset={dataset} />
    );
  }
}

export default App;
