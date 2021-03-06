import React from 'react';
import DictionariesTable from './components/DictionariesTable';
import NewOrEditDictionaryTable from './components/NewOrEditDictionaryTable';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editDictionaryData: null,
      editIndex: null,
      dictionaries: [],
    };

    this.handleNewDictionary = this.handleNewDictionary.bind(this);
    this.handleDeleteDictionary = this.handleDeleteDictionary.bind(this);
    this.handleEditDictionaryClick = this.handleEditDictionaryClick.bind(this);
    this.handleEditDictionary = this.handleEditDictionary.bind(this);
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

  handleEditDictionaryClick(editDictionaryData, editIndex) {
    this.setState({
      editDictionaryData,
      editIndex,
    });
  }

  handleEditDictionary(rowData, index) {
    const { dictionaries } = this.state;
    const updatedDictionaries = dictionaries;
    updatedDictionaries[index] = rowData;
    this.setState({
      editDictionaryData: null,
      editIndex: null,
      dictionaries: updatedDictionaries,
    });
  }


  render() {
    const { dictionaries, editDictionaryData, editIndex } = this.state;
    return (
      <div className="container">
        <div>
          <h1>Available dictionaries</h1>
          {dictionaries.length === 0 && 'No dictionaries created yet...'}
          {dictionaries.map((rowData, rowIndex) => (
            <DictionariesTable
              /* eslint-disable-next-line react/no-array-index-key */
              key={rowData + rowIndex}
              index={rowIndex}
              rowData={rowData}
              onDelete={this.handleDeleteDictionary}
              onEdit={this.handleEditDictionaryClick}
            />
          ))}
          { editDictionaryData && (
            <NewOrEditDictionaryTable
              callback={this.handleEditDictionary}
              rows={editDictionaryData}
              dictionaryIndex={editIndex}
            />
          )}
        </div>
        <div>
          <h1>Create dictionary:</h1>
          <NewOrEditDictionaryTable callback={this.handleNewDictionary} />
        </div>
      </div>
    );
  }
}

export default App;
