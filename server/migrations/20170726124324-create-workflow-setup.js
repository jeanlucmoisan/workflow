'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('WorkflowSetups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenant: {
        type: Sequelize.STRING
      },
      wfCode: {
        type: Sequelize.STRING
      },
      stepNum: {
        type: Sequelize.INTEGER
      },
      stepType: {
        type: Sequelize.STRING
      },
      descr: {
        type: Sequelize.STRING
      },
      emitNotif: {
        type: Sequelize.STRING
      },
      durationDays: {
        type: Sequelize.INTEGER
      },
      alertRule: {
        type: Sequelize.STRING(10000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('WorkflowSetups');
  }
};