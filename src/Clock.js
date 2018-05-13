import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	render(){
		return (
			<div>
	          <div className="Clock-days">
	            <span className="digit">{this.state.days}</span>
	            <span className="date-piece">Days</span>
	          </div>
	          <div className="Clock-hours">
	            <span className="digit">{this.state.hours}</span>
	            <span className="date-piece">Hours</span>
	          </div>
	          <div className="Clock-minutes">
	            <span className="digit">{this.state.minutes}</span>
	            <span className="date-piece">Minutes</span>
	          </div>
	          <div className="Clock-seconds">
	            <span className="digit">{this.state.seconds}</span>
	            <span className="date-piece">Seconds</span>
	           </div>
	          </div>
			);
	}
}

export default Clock;