const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agg_gskvxscorecard', {
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
    year_month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookingdhl: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookinggsk: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    reporting: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    complaints: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    accuracy_document: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    grass_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    infull: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coldchain: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nofreeze: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pickup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deviation_management: {
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
    tableName: 'agg_gskvxscorecard',
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
        name: "shipments",
        using: "BTREE",
        fields: [
          { name: "shipments" },
        ]
      },
      {
        name: "rebookingdhl",
        using: "BTREE",
        fields: [
          { name: "rebookingdhl" },
        ]
      },
      {
        name: "rebookinggsk",
        using: "BTREE",
        fields: [
          { name: "rebookinggsk" },
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
        name: "netontime",
        using: "BTREE",
        fields: [
          { name: "netontime" },
        ]
      },
    ]
  });
};
