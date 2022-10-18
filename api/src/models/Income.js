const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('income', {
    concept:{
      type: DataTypes.STRING,
      allowNull: false
    },
    date:{
      type: DataTypes.STRING,
      allowNull: false
    },
    amount:{
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })
}