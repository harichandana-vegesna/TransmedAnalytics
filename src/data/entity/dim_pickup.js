const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dim_pickup', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pickupCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pickupAddress1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pickupAddress2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pickupZip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pickuppartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_pickup',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
