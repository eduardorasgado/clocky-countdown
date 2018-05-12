import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="All">
        <div className="App">
          <div className="App-title">
            Clocky Countdown Challenge
          </div>
          <div>
            <div>Days</div>
            <div>Hours</div>
            <div>Minutes</div>
            <div>Seconds</div>
          </div>
          <div>
            <input placeholder="new date"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
