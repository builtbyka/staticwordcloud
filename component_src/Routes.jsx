import App from './App.js';
import ViewA from './ViewA.js';
import ViewB from './ViewB.js';
import Route from 'react-router';
import React from 'react';

var Routes = (<Route path="/" component={App}>
	<Route path="/viewa" component={ViewA} />
	<Route path="/viewb" component={ViewB} />
</Route>);

export default Routes