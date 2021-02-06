//create server
const express = require('express');
const routes = require('./routes');

const app = express();

//establish a port
const port = 8000;

app.use(express.static('client'));

//allow parsing of the form message and adding it to req.body
app.use(express.urlencoded({extended: false}));


//use the router
app.use(routes);


//listen on this port
app.listen(port, console.log(`App is listening on port ${port}`));
