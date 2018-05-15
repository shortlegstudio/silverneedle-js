/* Manages Names and name generation */
var yaml = require('js-yaml');
fs   = require('fs');
var _ = require('lodash');

const names = yaml.safeLoad(fs.readFileSync(__dirname + '/names.yml'));
const firstnames = _.filter(names, function(o) { return o.category === 'first' });
const lastnames = _.filter(names, function(o) { return o.category === 'last' });

class Name {
    generate(race) {
        var fg = _.find(firstnames, function(o) { return o.race === race });
        var lg = _.find(lastnames, function(o) { return o.race === race });

        if(!fg || !lg)
            throw new Error('Cannot match name set to race: ' + race);

        return {
            firstname: _.sample(fg.names),
            lastname: _.sample(lg.names)
        }
    }
}

module.exports = Name;