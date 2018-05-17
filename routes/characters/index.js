const models = require('../../models');
var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();

router.get('/', function(req, res, next) {
    models.Character.findAll().then(function(characters) {
        res.json(characters);
    });
}) 
    
router.post('/create', jsonParser, function(req, res) {
    var m = models.Character.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });
    res.json(m);
});

module.exports = router;
