const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AppUsers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EMAIL_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    USER_TYPE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USER_ROLE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USER_ORG: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AppUsers',
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
    ]
  });
};
