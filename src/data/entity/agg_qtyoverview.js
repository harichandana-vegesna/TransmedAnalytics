const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agg_qtyoverview', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    modeof_transport: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totchargeable_weight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_volume: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    grass_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dhlnetontime_perfomence: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_total_charge: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    quarter: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "should calculate from trx table"
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_qtyoverview',
    timestamps: false,
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
        name: "totchargeable_weight",
        using: "BTREE",
        fields: [
          { name: "totchargeable_weight" },
        ]
      },
      {
        name: "total_volume",
        using: "BTREE",
        fields: [
          { name: "total_volume" },
        ]
      },
      {
        name: "grass_ontime",
        using: "BTREE",
        fields: [
          { name: "grass_ontime" },
        ]
      },
      {
        name: "shiptotal_charge",
        using: "BTREE",
        fields: [
          { name: "shipment_total_charge" },
        ]
      },
    ]
  });
};
