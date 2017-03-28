import React, { Component } from 'react';
import Card from '../card/Card';
import logo from '../../../assets/logo.svg';
import './CounterPage.css';

class CounterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {play: true, multiplier: 2};

    this.startCounters = this.startCounters.bind(this);
    this.stopCounters = this.stopCounters.bind(this);
    this.handleMultiplierChange = this.handleMultiplierChange.bind(this);
  }
  name = <strong>Memeo</strong>;

  getName() {
    return 'Danny Green';
  }

  getPlayButton(isStart) {
    if (isStart) {
      if (this.state.play) {
        return null;
      }
      return <button onClick={this.startCounters}>Start Counters</button>;
    } else {
      if (!this.state.play) {
        return null;
      }
      return <button onClick={this.stopCounters}>Stop Counters</button>
    }
  }

  startCounters() {
    this.setState((prevState, props) => ({
      play: true
    }));
  }

  stopCounters() {
    this.setState((prevState, props) => ({
      play: false
    }));
  }

  handleMultiplierChange(event) {
    this.setState({
      multiplier: event.target.value
    });
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
        <p><a href="/">See Contacts</a></p>
        <div>
          {this.getPlayButton(true)} 
          <input type="number" name="multiplier" value={this.state.multiplier} onChange={this.handleMultiplierChange} />
        </div>
        <div>{this.getPlayButton(false)}</div>
        <Card cardId="12" play={this.state.play} multiplier={this.state.multiplier}/>
        <Card cardId="20" play={this.state.play}/>
      </div>
    );
  }
}

export default CounterPage;
