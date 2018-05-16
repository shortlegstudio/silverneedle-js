'use strict';
module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('Character', {
    userid: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  Character.associate = function(models) {
    // associations can be defined here
  };
  return Character;
};