import React from 'react';
import DictionariesTable from './components/DictionariesTable';
import Datasets from './Datasets';

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
      <DictionariesTable dataset={dataset} />
    );
  }
}

export default App;
