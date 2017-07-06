import React, {Component} from 'react'
import {Link as Sausage} from 'react-router-dom';

class BootstrapNavBar extends Component{
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <p className="navbar-brand">Atlanta App</p>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li>
		    		<Sausage to={'/'}>Home</Sausage>
		    	{/* comment */}
		    	</li>
		      	<li>
		      		<Sausage to={'/Atlanta'}>Weather</Sausage>
		      	</li>
		      	<li>
		      		<Sausage to={'/Images'}>Images</Sausage>
		      	</li>
		      	<li>
		      		<Sausage to={'/Message'}>Message</Sausage>
		      	</li>
		      	<li>
		      		<Sausage to={'/About'}>About</Sausage>
		      	</li>
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar