const Seq = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id: {
        type: Seq.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },

    name: Seq.STRING,

    email: Seq.STRING
})

module.exports = User;