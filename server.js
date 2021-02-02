//create server
const express = require('express');
const app = express();

//establish a port
const port = 8000;

app.use(express.static('client'));


app.post('/addEntry', (req, res) => {
  res.send('Hello world!');
});





//listen on this port
app.listen(port, console.log(`App is listening on port ${port}`));
