const models = require('../../models');

module.exports = (req, res) => {
    models.User.findOrCreate({
        where: {authid: req.user.sub}
    }).then(function (user, created) {
        console.log(JSON.stringify(user));
        console.log(user[0].id);
        let userId = user[0].id;
        models.Character.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            UserId: userId
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
        })
    });
};