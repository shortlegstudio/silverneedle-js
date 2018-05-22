var express = require('express');
var router = express.Router();
var characters = require('./characters');
var users = require('./users');

/* Retrieve React Front-End */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

router.use('/characters', characters);

module.exports = router;
