var express = require('express');
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var httpProxy = require('http-proxy');
var fetch = require('isomorphic-fetch');
import App from './components/App.js';


//setup proxy
var proxy = httpProxy.createProxyServer();


//setup express
var app = express();
app.use(express.static('app')); //server static files from app
app.use(bodyParser.json()); // for parsing application/json
app.set('view engine', 'hbs'); //set as render engine for handlebars templates

app.get('*', function (req, res) {

	//some components require the user agent is here
	GLOBAL.navigator = {userAgent : req.headers['user-agent']};

	//gather all props that'll be passed down into react both server and client side here
	var props = {
		userAgent: req.headers['user-agent'] //useful for some components to render
	};



			//createElement={createElement}
	var markup = ReactDOMServer.renderToString(
			<App radiumConfig={{userAgent: props.userAgent}} />
	);

	//pass rendered html out handlebars template along with props
	//so client will have props too
	res.render('index', {content: markup, props: JSON.stringify(props)})

	/*
	//set up routing with react-router
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {
			//render up our html with react and props
			var markup = ReactDOMServer.renderToString(
				//createElement={createElement}
				<RoutingContext  {...renderProps} />
			);

			//pass rendered html out handlebars template along with props
			//so client will have props too
			res.render('index', {content: markup, props: JSON.stringify(props)});

		} else {
			res.status(404).send('Not found')
		}
	})
	*/


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