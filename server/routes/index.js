const express = require('express');
const db = require('../db');

const router = express.Router();


router.post('/addEntry', (req, res, next) => {
  //upon post request, add the data to the database
  return db.create(req.body)
    //then read all the data from the database
    .then(() => db.readAll())
    //send the results in the response
    .then((results) => {
      console.log('RES', results);
      res.send(results);
      console.log('After res.send');
    })
    //required .catch for my promise chain
    .catch(() => {
      console.log('There was an error');
    });
  next();
});




module.exports = router;