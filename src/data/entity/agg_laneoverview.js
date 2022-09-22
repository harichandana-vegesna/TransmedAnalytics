const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agg_laneoverview', {
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
    lane: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    totshipments: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    totchargeable_weight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ontime_perfomence: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    infull_perfomence: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    intact: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cold_chain: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    frozen: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipperAccountNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_laneoverview',
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
        name: "totshipments",
        using: "BTREE",
        fields: [
          { name: "totchargeable_weight" },
        ]
      },
      {
        name: "totchargeable_weight",
        using: "BTREE",
        fields: [
          { name: "ontime_perfomence" },
        ]
      },
      {
        name: "rebooked",
        using: "BTREE",
        fields: [
          { name: "rebooked" },
        ]
      },
      {
        name: "intact",
        using: "BTREE",
        fields: [
          { name: "intact" },
        ]
      },
      {
        name: "cold_chain",
        using: "BTREE",
        fields: [
          { name: "cold_chain" },
        ]
      },
      {
        name: "frozen",
        using: "BTREE",
        fields: [
          { name: "frozen" },
        ]
      },
    ]
  });
};
