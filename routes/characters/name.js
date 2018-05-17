var nameGenerator = require('../../lib/characters/name');

module.exports = (req, res) => {
    let name = new nameGenerator();
    res.json(name.generate(req.query.race));
};

