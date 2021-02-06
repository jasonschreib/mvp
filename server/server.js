//create server
const express = require('express');
const routes = require('./routes');

const bodyparser = require('body-parser');

const app = express();

//establish a port
const port = 8000;

//allow parsing of the form message and adding it to req.body
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(express.static('client'));

//use the router
app.use(routes);


//listen on this port
app.listen(port, console.log(`App is listening on port ${port}`));
