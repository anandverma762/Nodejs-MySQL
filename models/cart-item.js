const Seq = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem', {
  id: {
    type: Seq.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: {
    type: Seq.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  totalprice: {
    type: Seq.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

module.exports = CartItem;
