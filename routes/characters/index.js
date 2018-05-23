var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();

const names = require('./name');
const list = require('./list');
const create = require('./create');
const protectedRequest = require('../auth');

router.get('/', protectedRequest, list);
router.post('/create', protectedRequest, jsonParser, create);
router.get('/name/create', names)

module.exports = router;
