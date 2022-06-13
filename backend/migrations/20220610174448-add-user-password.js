'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'password_digest', {
      type: Sequelize.DataTypes.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'password_digest')
    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
