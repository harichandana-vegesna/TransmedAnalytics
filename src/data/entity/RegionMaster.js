const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RegionMaster', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Country_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Region_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Business_Unit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ISO2LetterCode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ISO3LetterCode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Numeric: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    dest_latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    dest_longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RegionMaster',
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
        name: "shipment_country",
        using: "BTREE",
        fields: [
          { name: "ISO2LetterCode" },
        ]
      },
    ]
  });
};
