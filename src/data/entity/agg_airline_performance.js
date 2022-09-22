const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agg_airline_performance', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "shipment_origin_code"
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
    row_lables: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ontime_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ontime_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookedgsk_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookedgsk_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    inful_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ifnul_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coldchain_shipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coldchain_percentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage_shipcount: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage_shippercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totalshipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totalpercentage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_origin: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "shipment_origin_name"
    },
    shipment_origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lsporgid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipperAccountNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_airline_performance',
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
        name: "rebookshipcount",
        using: "BTREE",
        fields: [
          { name: "rebooked_shipcount" },
        ]
      },
      {
        name: "ontimeshipment",
        using: "BTREE",
        fields: [
          { name: "ontime_shipcount" },
        ]
      },
      {
        name: "rebookgskshipcount",
        using: "BTREE",
        fields: [
          { name: "rebookedgsk_shipcount" },
        ]
      },
      {
        name: "infulshipcount",
        using: "BTREE",
        fields: [
          { name: "inful_shipcount" },
        ]
      },
      {
        name: "damageshipcount",
        using: "BTREE",
        fields: [
          { name: "damage_shipcount" },
        ]
      },
      {
        name: "totshipcount",
        using: "BTREE",
        fields: [
          { name: "totalshipments" },
        ]
      },
    ]
  });
};
