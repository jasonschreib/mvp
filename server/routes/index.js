const express = require('express');
const db = require('../db');

const router = express.Router();


router.post('/addEntry', (req, res, next) => {
  //upon post request, add the data to the database
  db.create(req.body);
  res.send(req.body);
  //then read all the data from the database
  // var results = db.readAll();
  // res.send(results);

  next();
});




module.exports = router;