import React from 'react';
import DictionariesTable from './components/DictionariesTable';
import NewDictionaryTable from './components/NewDictionaryTable';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dictionaries: [],
    };

    this.handleNewDictionary = this.handleNewDictionary.bind(this);
  }

  handleNewDictionary(rows) {
    const { dictionaries } = this.state;
    dictionaries.push(rows);
    this.setState({ dictionaries });
    console.log('callback: ', this.state);
  }


  render() {
    const { dictionaries } = this.state;
    return (
      <>
        <h1>Available dictionaries</h1>
        {dictionaries.length === 0 && 'No dictionaries created yet...'}
        {dictionaries.map((rowData) => (
          <DictionariesTable key={rowData[0].domain + rowData[rowData[0].range]} rowData={rowData} />
        ))}
        <h1>Create dictionary:</h1>
        <NewDictionaryTable callback={this.handleNewDictionary} />
      </>
    );
  }
}

export default App;
