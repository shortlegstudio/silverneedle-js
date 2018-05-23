const models = require('../../models');

module.exports = (req, res) => {
    models.Character.findAll({
        where: { UserId: req.userModel.id }
    }).then(function(characters) {
        res.json(characters);
    });
}; 