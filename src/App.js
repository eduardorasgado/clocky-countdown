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
            <div className="Clock-days">Days</div>
            <div className="Clock-hours">Hours</div>
            <div className="Clock-minutes">Minutes</div>
            <div className="Clock-seconds">Seconds</div>
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
