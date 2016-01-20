#React Isomorphic Web Application

Web application with routing designed to run on client and server. Intial render happens
on server, using react and server data, server then passes the rendered html AND the 
data used to create it (via React props) to the client, client can imediatly see rendered page
in meantime, client downloads the react app then intialises on the server rendered html 
using the data passed to it form the server, providing the props on the server and client 
react were exactly the same then react wont re-render the dom, it'll just carry on 
where the server left off. 

Gulp / Babel setup to compile React JSX to normal js for faster render in production.
Webpack compiles the same JSX into ES5 js for browsers.

One aim is that as much as possible still works if Javascript is turned off at the client
links and buttons should still work. The client side react should take over if the client 
has javascript and give the speed boost that client side rendering offers. For this to 
happen urls are key and react router is used both client and server side to keep things in 
sync.


