var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();

const create = require('./create');
const protectedRequest = require('../../lib/auth/auth');

router.post('/create', protectedRequest, create);

module.exports = router;
