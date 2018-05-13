/* Manages Names and name generation */
var yaml = require('js-yaml');
fs   = require('fs');
var names = yaml.safeLoad(fs.readFileSync(__dirname + '/names.yml'));
var _ = require('lodash');

class Name {
    generate() {
        console.log('generating-names');
        var namegroup = _.sample(names);
        console.log('namegroup selected');
        console.log(namegroup);
        return {
            firstname: _.sample(namegroup.names),
            lastname: _.sample(namegroup.names)
        }
    }
}

module.exports = Name;