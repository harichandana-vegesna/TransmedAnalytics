const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipment_deviated', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_eta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delivered_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    etaDeviation_flag: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deviation_days: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shipment_deviated',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "shipment_eta",
        using: "BTREE",
        fields: [
          { name: "etaDeviation_flag" },
        ]
      },
      {
        name: "delivered_date",
        using: "BTREE",
        fields: [
          { name: "delivered_date" },
        ]
      },
      {
        name: "idx_shipment_deviated",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
