const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KPI_document', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ship_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    gross_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    infull: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebookedby: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "if rebookedby 0 then rebooked by dhl else 1 then gsk"
    },
    rebooked: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cancelledby: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "if cancelled 0 then rebooked by dhl else 1 then gsk"
    },
    cancelled: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    temp_deviation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    frozen: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    actiondate: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    actionby: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    standardized_action: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    otifrootcauses: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lane: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooking: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_count: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    damage_intact: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    coldchain: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nofreeze: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    active_status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    reporting: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    service_reportings: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    followup_complaints: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cost_saving: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    accuracy_document: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pickup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deviation_management: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    carbon_netural: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carbon_positive: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    carbon_calculation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    reason_forbreach: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cost_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    amount_avoidance: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reason_avoidance: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cost_currencytype: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KPI_document',
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
