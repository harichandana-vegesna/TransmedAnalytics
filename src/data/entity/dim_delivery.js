const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dim_delivery', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deliveryCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryAddress1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deliveryAddress2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deliveryZip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    delivery_mode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deliveryPartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_delivery',
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
