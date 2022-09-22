const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agg_ytdshipmentsWeight', {
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
    destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totchargeable_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    countofHawb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    volume_uom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    volume: {
      type: DataTypes.FLOAT,
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
    shipment_origin: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_destination: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_destination_country: {
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
    tableName: 'agg_ytdshipmentsWeight',
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
        name: "countofHawb",
        using: "BTREE",
        fields: [
          { name: "countofHawb" },
        ]
      },
    ]
  });
};
