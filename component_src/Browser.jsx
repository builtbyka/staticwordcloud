import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.jsx';
import {Router, Route, browserHistory} from 'react-router';


// default behavior
function createElement(Component, props) {
	// make sure you pass all the props in!
	return <Component {...props} />
}


//Render application in browser
ReactDOM.render(<Router createElement={createElement} history={browserHistory}>
	{Routes}
</Router>, document.getElementById('app'))
