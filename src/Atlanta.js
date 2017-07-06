import React, { Component } from 'react';
import $ from 'jquery';

class Atlanta extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			this.setState({
				icon: weatherData.weather[0].icon,
				temp: weatherData.main.temp,
				temp_min: weatherData.main.temp_min,
				temp_max: weatherData.main.temp_max,
				desc: weatherData.weather[0].description
			})
		});
	}

	render(){
		var iconImg = `http://openweathermap.org/img/w/${this.state.icon}.png`
		if(this.state.icon === ''){
			return(
				<h1>Wait!</h1>
			)
		}else{
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<img src={iconImg} alt='weather' />
				<p>{this.state.desc}</p>
				<p>Current Temp: {this.state.temp}</p>
				<p>Low: {this.state.temp_min}</p>
				<p>High: {this.state.temp_max}</p>
			</div>
		);
	}
}
}

export default Atlanta;
