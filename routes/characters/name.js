var express = require('express');
var router = express.Router();
var nameModel = require('../../lib/characters/name');

/* Generate a user name */
router.get('/', function(req, res, next) {
    let name = new nameModel();
    res.json(name.generate('human'));
});

router.get('/create', function(req, res, next) {
    let name = new nameModel();
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.json(name.generate(req.query.race));
});

module.exports = router;
