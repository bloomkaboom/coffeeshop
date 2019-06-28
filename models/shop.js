'use strict';
module.exports = (sequelize, DataTypes) => {
  const shop = sequelize.define(
    'shop', 
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      created_by: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      updated_by: {
        type: DataTypes.UUID,
      },
      deleted_by: {
        type: DataTypes.UUID,
      },
  }, {});
  shop.associate = function(models) {
    // associations can be defined here
  };
  return shop;
};