const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dim_time', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "id_UNIQUE"
    },
    shipmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    month_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    quarter: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_quarter: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    day: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    weekday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    weeknumber: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dim_time',
    hasTrigger: true,
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shipmentDate" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
