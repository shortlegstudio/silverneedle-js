const models = require('../../models');

module.exports = (req, res) => {
    models.Character.findAll().then(function(characters) {
        res.json(characters);
    });
}; 