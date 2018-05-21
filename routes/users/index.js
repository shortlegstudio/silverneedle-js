var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();

const create = require('./create');
const validateJwt = require('../../lib/auth/auth');

router.post('/create', validateJwt, create);

module.exports = router;
