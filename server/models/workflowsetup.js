'use strict';
module.exports = function(sequelize, DataTypes) {
  var WorkflowSetup = sequelize.define('WorkflowSetup', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    tenant: {
	  DataTypes.STRING
	},
    wfCode: {
	DataTypes.STRING
	},
    stepNum: {
	  DataTypes.INTEGER
	},
    stepType:{
	  DataTypes.STRING
	},
    descr: {
	  DataTypes.STRING
	},
    emitNotif: {
	  DataTypes.STRING
	},
    durationDays: {
	  DataTypes.INTEGER
	},
    alertRule: {
	  DataTypes.STRING(10000)
	},
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  },{
    paranoid: true,
    underscored: true
    }
  });
  return WorkflowSetup;
};