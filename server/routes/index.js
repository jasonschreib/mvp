const express = require('express');

const router = express.Router();


router.post('/addEntry', (req, res) => {
  res.send(req.body);
});




module.exports = router;