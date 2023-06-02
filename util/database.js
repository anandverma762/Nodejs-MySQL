const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejsdata', 'root', 'My2023', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
