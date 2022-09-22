const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dim_shipper', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shipper_AccNumber: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    shipper_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shipper_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_shipper',
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
