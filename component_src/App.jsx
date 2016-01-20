import React from 'react';

class App extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

		//If all's well you should see this on server & browser console
		console.log('Hello World');

		return (
			<div>Hello World</div>
		)
	}
}

export default App