const Seq = require('sequelize');

const sequelize = require('../util/database')

const Product = sequelize.define('product',{
  id: {
    type: Seq.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  title: {
    type: Seq.CHAR,
    allowNull: false
  },
  price: {
    type: Seq.DOUBLE,
    allowNull:false
  },
  imageUrl: {
    type: Seq.TEXT,
    allowNull: false
  },
  description: {
    type: Seq.TEXT,
    allowNull: false
  }
})

module.exports = Product;

