const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agg_gross_netotPerformance', {
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
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipments: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "sum of shipment_reference_num"
    },
    gross_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    agtime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totgrossontime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    annettime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totnetontime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_creation_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    month_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipperAccountNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_gross_netotPerformance',
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
        name: "shipcount",
        using: "BTREE",
        fields: [
          { name: "shipments" },
        ]
      },
      {
        name: "grossontime",
        using: "BTREE",
        fields: [
          { name: "gross_ontime" },
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
