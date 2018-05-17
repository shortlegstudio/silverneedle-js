const models = require('../../models');

module.exports = (req, res) => {
    var m = models.Character.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });
    res.json(m);
};