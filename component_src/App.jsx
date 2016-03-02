import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {

	constructor(props){
		super(props);
	}

	render(){


		return (
			<div>
                <h1>Simple client only app with routing and hot loading</h1>
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