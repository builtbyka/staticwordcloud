import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';


// This script will run in the browser and will render our component using the
// value from APP_PROPS that we generate inline in the page's html on the server.
// If these props match what is used in the server render, React will see that
// it doesn't need to generate any DOM and the page will load faster

//look at index.hbs to see where props come from
var props = window.APP_PROPS;

//Render application in browser
ReactDOM.render(<App radiumConfig={{userAgent: props.userAgent}} />, document.getElementById('app'))
