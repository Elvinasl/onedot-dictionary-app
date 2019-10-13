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
    this.handleDeleteDictionary = this.handleDeleteDictionary.bind(this);
  }

  handleNewDictionary(rows) {
    const { dictionaries } = this.state;
    dictionaries.push(rows);
    this.setState({ dictionaries });
  }

  handleDeleteDictionary(index) {
    this.setState((prevState) => ({
      dictionaries: prevState.dictionaries
        .filter((dictionary) => index !== prevState.dictionaries.indexOf(dictionary)),
    }));
  }


  render() {
    const { dictionaries } = this.state;
    return (
      <>
        <h1>Available dictionaries</h1>
        {dictionaries.length === 0 && 'No dictionaries created yet...'}
        {dictionaries.map((rowData, rowIndex) => (
          <DictionariesTable
            key={rowData + rowIndex}
            index={rowIndex}
            rowData={rowData}
            onDelete={this.handleDeleteDictionary}
          />
        ))}
        <h1>Create dictionary:</h1>
        <NewDictionaryTable callback={this.handleNewDictionary} />
      </>
    );
  }
}

export default App;
