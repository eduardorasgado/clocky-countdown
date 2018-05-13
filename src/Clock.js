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
		/*console.log('this.props', this.props);*/
	}

	componentWillMount() {
		/*THis will bring our actual deadline*/
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount(){
		/*Time in milliseconds for refresh, in this case every 1000 ms*/
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
	}

	completeZero(num) {
		/*Function to complete the one digit numer to 0+digit on the counter*/
		return num < 10 ? '0' + num : num;
	}

	getTimeUntil(deadline){
			const time = Date.parse(deadline) - Date.parse(new Date());
			/*I found this on stackOverflow*/
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor(time / (1000 * 60 * 60) % 24);
			const days = Math.floor(time / (1000*60*60*24))

			console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
			this.setState({
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds
			});


	}

	render(){

		return (
			<div>
	          <div className="Clock-days">
	            <span className="digit">{this.completeZero(this.state.days)}</span>
	            <span className="date-piece">Days</span>
	          </div>
	          <div className="Clock-hours">
	            <span className="digit">{this.completeZero(this.state.hours)}</span>
	            <span className="date-piece">Hours</span>
	          </div>
	          <div className="Clock-minutes">
	            <span className="digit">{this.completeZero(this.state.minutes)}</span>
	            <span className="date-piece">Minutes</span>
	          </div>
	          <div className="Clock-seconds">
	            <span className="digit">{this.completeZero(this.state.seconds)}</span>
	            <span className="date-piece">Seconds</span>
	           </div>
	          </div>
			);
	}
}

export default Clock;