import App from './App.jsx';
import ViewA from './ViewA.jsx';
import ViewB from './ViewB.jsx';
import {Route} from 'react-router';
import React from 'react';

var Routes = (<Route path="/" component={App}>
	<Route path="/viewa" component={ViewA} />
	<Route path="/viewb" component={ViewB} />

</Route>);

export default Routes