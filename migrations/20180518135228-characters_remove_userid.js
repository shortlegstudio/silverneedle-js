'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Characters", "userid");
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn("Characters", "userid", {
      type: Sequelize.STRING
    });
  }
};
