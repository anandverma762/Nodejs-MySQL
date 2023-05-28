const Seq = require('sequelize');

const sequelize = new Seq('nodejsdata','root','My2023', { dialect: 'mysql',host: 'localhost' });

module.exports=sequelize;