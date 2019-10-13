import React from 'react';
import DictionariesTable from './components/DictionariesTable';
import NewDictionaryTable from './components/NewDictionaryTable';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dictionaries: [
        {
          domain: 'Test 1',
          range: 'rest2',
        },
      ],
    };
  }

  handleNewDictionary(rows) {
    console.log('callback: ', rows);
  }


  render() {
    const { dictionaries } = this.state;
    return (
      <>
        <h1>Available dictionaries</h1>
        {dictionaries.length > 0 ? <DictionariesTable dictionaries={dictionaries} /> : 'No dictionaries created yet...'}
        <h1>Create dictionary:</h1>
        <NewDictionaryTable callback={this.handleNewDictionary} />
      </>
    );
  }
}

export default App;
