'use strict'

const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

fs
  .readdirSync(__dirname+'/../models')
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname+'/../models', file));
    db[model.name] = model;
  });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;