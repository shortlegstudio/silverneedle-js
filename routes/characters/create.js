const models = require('../../models');

module.exports = (req, res) => {
    models.Character.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        UserId: req.userModel.id
    }).then(function(character) {
        res.json({
            error: "",
            character: character
        });
    }).catch(function(err) {
        res.status(400).json({
            error: err.message,
            character: {} 
        })
    });
};