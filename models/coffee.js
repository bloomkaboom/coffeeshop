'use strict';
module.exports = (sequelize, DataTypes) => {
  const coffee = sequelize.define(
    'coffee', 
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
      type: {
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
  coffee.associate = function(models) {
    // associations can be defined here
  };
  return coffee;
};