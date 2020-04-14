import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';
//import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // making API request to that URL
    fetch("https://jsonplaceholder.typicode.com/users")
      // give reponse in json format which we want / coverting into json format/object
      .then((response) => {
        //only convert body of response to json object
        return response.json()
      })
      // return us a new format which is a body (of URL) -> array 
      // set monsters to that (users) array
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  // handleChange(e) {
  //   this.setState({searchField:e.target.value});
  // }

  render() {
    /*  object destructing -> extract multiple pieces of data from an array 
        or object and assign them to to local variables 

        Filter() ->The filter() method creates an array filled with all 
        array elements that pass a test (provided as a function).

        Includes() method determines whether an array includes 
        a certain value among its entries, 
        returning true or false as appropriate.
        arr.includes(valueToFind[, fromIndex])
        The value to search for.
    */
    const { monsters, searchField } = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    /* 
      map() -> creating a new array based on existing
      anything in between these tags
      <Cardlist></Cardlist> are children
      An onChange event is triggered when values are entered in the input. 
      This calls a function — handleChange() 
      that is used to set a new state for the input.
    */
    return (
      <div className="App">
        {/* pass in the monsters as a porp from our App component */}
        <h1> Monsters Rolodex </h1>
        <Searchbox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <Cardlist
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/