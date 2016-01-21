'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRouter = require('react-router');

var _Routes = require('./components/Routes.js');

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var httpProxy = require('http-proxy');
var fetch = require('isomorphic-fetch');

//router

//setup proxy
var proxy = httpProxy.createProxyServer();

//setup express
var app = express();
app.use(express.static('app')); //server static files from app
app.use(bodyParser.json()); // for parsing application/json
app.set('view engine', 'hbs'); //set as render engine for handlebars templates

app.get('*', function (req, res) {

	//some components require the user agent is here
	GLOBAL.navigator = { userAgent: req.headers['user-agent'] };

	//gather all props that'll be passed down into react both server and client side here
	var serverprops = {
		message: 'Hello World',
		userAgent: req.headers['user-agent'] //useful for some components to render
	};

	//use this function to pass in props to
	//the components being rendered in the routes.
	var createElement = function createElement(Component, props) {
		// make sure you pass all the props in!
		console.log('custom create element');
		return React.createElement(Component, _extends({}, props, serverprops));
	};

	//set up routing with react-router
	(0, _reactRouter.match)({ routes: _Routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			//render up our html with react and props - see custom createElement func above
			//renderProps passes down info about the route and history
			var markup = ReactDOMServer.renderToString(React.createElement(_reactRouter.RouterContext, _extends({ createElement: createElement }, renderProps)));
			//pass rendered html out handlebars template along with props
			//so client will have props too
			res.render('index', { content: markup, props: JSON.stringify(serverprops) });
		} else {
			res.status(404).send('Not found');
		}
	});
});

//Example reverse proxy call
/*
app.get('/launches', function(req, res){
	proxy.web(req, res, { target: 'http://api.rnli.org:80', changeOrigin:true });
});
*/

//start server
var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
//# sourceMappingURL=server.js.map
