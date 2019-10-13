import React from 'react';
import DictionariesTable from './components/DictionariesTable';

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


  render() {
    const { dictionaries } = this.state;
    return (
      <>
        <h1>Available dictionaries</h1>
        {dictionaries.length > 0 ? <DictionariesTable dictionaries={dictionaries} /> : 'No dictionaries created yet...'}
        <h1>Create dictionary:</h1>

      </>
    );
  }
}

export default App;
