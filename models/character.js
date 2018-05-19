'use strict';
module.exports = (sequelize, DataTypes) => {
  var Character = sequelize.define('Character', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  
  Character.associate = function(models) {
    // associations can be defined here
    models.Character.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Character;
};