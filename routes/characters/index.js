var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();

const names = require('./name');
const list = require('./list');
const create = require('./create');
const validateJwt = require('../../lib/auth/auth');

router.get('/', list);
router.post('/create', validateJwt, jsonParser, create);
router.get('/name/create', names)

module.exports = router;
