import React, { Component } from 'react';
import Card from '../card/Card';
import logo from '../../assets/logo.svg';
import './App.css';

class App extends Component {
  name = <strong>Memeo</strong>;

  getName() {
    return 'Danny Green';
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, {this.getName()}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload {this.name}.
        </p>
        <Card cardId="12" />
        <Card cardId="20" />
      </div>
    );
  }
}

export default App;
