const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agg_rebookings_cancellations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    month: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shipper_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    airline: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    numof_rebookings_shipment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rebooked_last72h: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancellation_charge: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    amount_paid: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cost_avoidance: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_rebookings_cancellations',
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
    ]
  });
};
