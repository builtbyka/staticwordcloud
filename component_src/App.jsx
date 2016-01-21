import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

		//If all's well you should see this on server & browser console
		console.log('Hello World');

		return (
			<div>
				<div>Hello World</div>
				<ul>
					<li><Link to='/viewa'>Link to A</Link></li>
					<li><Link to='/viewb'>Link to B</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}

export default App