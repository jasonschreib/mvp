//create server
const express = require('express');
const routes = require('./routes');

const app = express();

//establish a port
const port = 8000;

app.use(express.static('client'));

//allow parsing of the form message and adding it to req.body
app.use(express.urlencoded({extended: false}));


// //call dateChanger middleware on the date property of the request on the requests to /addEntry
// app.use('/addEntry', dateChanger);

//use the router
app.use(routes);



// //create middleware that alters the date property in the request object so that it conforms to mysql rules
// var dateChanger = (req, res, next) => {
//   //find the date property in the req body and alter it to the form of YYYY-MM-DD
//   // console.log(req.body);

//   next();
// };



//listen on this port
app.listen(port, console.log(`App is listening on port ${port}`));
