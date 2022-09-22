const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agg_ytdspendWeight', {
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
    totchargeable_weight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_cost: {
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
    tableName: 'agg_ytdspendWeight',
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
        name: "total_cost",
        using: "BTREE",
        fields: [
          { name: "total_cost" },
        ]
      },
    ]
  });
};
