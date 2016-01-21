import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes.js';
import {Router, Route, browserHistory} from 'react-router';


// This script will run in the browser and will render our component using the
// value from APP_PROPS that we generate inline in the page's html on the server.
// If these props match what is used in the server render, React will see that
// it doesn't need to generate any DOM and the page will load faster
//look at index.hbs to see where props come from


var serverprops = window.APP_PROPS;

// default behavior
function createElement(Component, props) {
	// make sure you pass all the props in!
	return <Component {...props} {...serverprops}/>
}


//Render application in browser
ReactDOM.render(<Router createElement={createElement} history={browserHistory}>
	{Routes}
</Router>, document.getElementById('app'))
