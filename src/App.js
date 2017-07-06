import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar';
import { BrowserRouter as Taco, Route as Pizza } from 'react-router-dom';
import Home from './Home';
import Atlanta from './Atlanta';
import About from './About';
import Images from './Images';
import MayorMessage from './MayorMessage';



var atlImages = [
	'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
	'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
	render() {
	return (
		<Taco>
			<div>
				<BootstrapNavBar />
				<div className="container main">
					<Pizza exact={true} path='/' component={Home} />
					<Pizza exact={true} path='/Atlanta' component={Atlanta} />
					<Pizza exact={true} path='/About' component={About} />
					<Pizza exact={true} path='/Message' component={MayorMessage} />
					<Pizza exact={true} path='/Images' render={()=>(
						<Images img={atlImages} />
					)} />																				
				</div>
			</div>
		</Taco>
	);
	}
}

export default App;
