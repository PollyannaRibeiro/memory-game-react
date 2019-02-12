import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from '../src/components/Deck/Deck';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Deck></Deck>
      </div>
    );
  }
}

export default App;
