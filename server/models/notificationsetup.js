'use strict';
module.exports = function(sequelize, Sequelize) {
  var NotificationSetup = sequelize.define('NotificationSetup', {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    tenant: {
	  type: Sequelize.STRING
	},
    notifCode: {
	  type: Sequelize.STRING
	},
    msgTemplate: {
	  type: Sequelize.STRING(10000)
	},
    notifLevel:{
	  type: Sequelize.ENUM('1','2','3')
	},
	// commTypes is an array of values among E,S,M,T
    commTypes: {
	  type: Sequelize.STRING
	},
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at:  Sequelize.DATE,
    deleted_at:  Sequelize.DATE
  },{
  });
  return NotificationSetup;
};