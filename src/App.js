import React, { Component } from 'react';
/*Importing Styles*/
import './App.css';
/*Importing the clock*/
import Clock from './Clock';


class App extends Component {
  constructor(props){
    super(props);
    var dt = new Date();

    // Actual date plus a day = 24 hrs later
    var month = dt.getMonth()+1;
    var day = dt.getDate()+1;
    var year = dt.getFullYear();
    var months = ['January', 'February','March', 'Aplil', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dateNow = months[month-1] + '/' + day + '/' + year + '/0:00:00';
    this.state = {
      deadline: dateNow,
      newDeadline: ''
    };
  }

  changeDeadline() {
    /*console.log('state', this.state)*/
    /*Set new deadline to old deadline*/
    this.setState({
      deadline: this.state.newDeadline,
    });
  }

  render() {
    return (
      <div className="All">
        <div className="App">
          <div className="App-title">
            Clocky Countdown Challenge to<br/>{this.state.deadline}
          </div>
          <p>Coming soon...</p>
          
          {/*CLOCK COMPONENT*/}
          <Clock
            deadline = {this.state.deadline}
           />

          <div className="box">
            <div className="App-input">

              <input id="new" type="text" placeholder="New date" 
              onChange={event => this.setState({newDeadline: event.target.value})}/>
              
              {/*--ES6 Anonymous function for no loops that could crash the app*/}
              <button className="icon" onClick={() => this.changeDeadline()}>
                <i className="fa fa-calendar"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
