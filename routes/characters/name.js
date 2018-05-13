var express = require('express');
var router = express.Router();
var nameModel = require('../../models/characters/name');

/* Generate a user name */
router.get('/', function(req, res, next) {
    let name = new nameModel();
    res.json(name.generate());
});

router.get('/create', function(req, res, next) {
    let name = new nameModel();
    res.json(name.generate());
});

module.exports = router;
