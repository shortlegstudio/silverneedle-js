'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn("Characters", "UserId", {
      type: Sequelize.INTEGER
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Characters", "UserId");
  }
};
