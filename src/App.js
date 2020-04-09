import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component'
//import { render } from '@testing-library/react';

class App extends Component{
  constructor() {
    super();
    
    this.state = {
      monsters:[]
    };
  }
  componentDidMount(){
    // making API request to that URL
    fetch("https://jsonplaceholder.typicode.com/users")
    // give reponse in json format which we want / coverting into json format/object
      .then((response) => {
        //only convert body of response to json object
        return response.json()
      })
    // return us a new format which is a body (of URL) -> array 
    // set monsters to that (users) array
      .then(users => this.setState({monsters: users}));
  }
  render() {
    return (
      /* 
        map() -> creating a new array based on existing
        anything in between these tags
        <Cardlist></Cardlist> are children
      */
      <div className = "App">
        <Cardlist name = "Hello" >
          {/* children */}
          {this.state.monsters.map(monster => (
            <h1 key={monster.id} > {monster.name} </h1>
          ))}
        </Cardlist>
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