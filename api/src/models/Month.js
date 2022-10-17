const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('month', {
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    total:{
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })
}