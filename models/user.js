'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    authid: DataTypes.STRING,
    profile_name: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};