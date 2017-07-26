'use strict';
module.exports = function(sequelize, Sequelize) {
  var WorkflowSetup = sequelize.define('WorkflowSetup', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
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
    stepType:{
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
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at:  Sequelize.DATE,
    deleted_at:  Sequelize.DATE
  },{
  });
  return WorkflowSetup;
};