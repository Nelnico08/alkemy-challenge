const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('expense', {
    concept:{
      type: DataTypes.STRING,
      allowNull: false
    },
    date:{
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    amount:{
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })
}