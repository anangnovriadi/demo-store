"use strict";

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "order",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      qty: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tax: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      sub_total: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      tableName: "orders",
      timestamps: false
    }
  );
};
