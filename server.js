//create server
const express = require('express');
const app = express();

//establish a port
const port = 8000;

app.use(express.static('client'));

//allow parsing of the form message and adding it to req.body
app.use(express.urlencoded());

app.post('/addEntry', (req, res) => {
  res.send(req.body);
});




//listen on this port
app.listen(port, console.log(`App is listening on port ${port}`));
