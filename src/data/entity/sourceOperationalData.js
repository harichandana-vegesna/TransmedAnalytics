const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sourceOperationalData', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shipper_AccNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_name: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    shipper_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_reference_num: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Consignee_city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Consignee_name: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    Consignee_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    console_reference_num: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    destination_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    org: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    destination_code: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    airline_prifix: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    freight_terms: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    shipment_service_code: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    content_description: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    total_pieces: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    chargeable_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_volume: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    weight_uom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hbcreationdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    actual_arrival: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estimated_arrival: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pod: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pod_name: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    dis_timestamp: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    dis_description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    airline_name: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    total_cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    export_freightcharges: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    fuel_prepaid: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: "0"
    },
    security_pripaid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    destairline: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    elapsed_days: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    wdays_pickupto_pod: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    preference_level: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    hbday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    podday: {
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
    rebooked: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rebooked_gsk: {
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
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(2000),
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
    standardized_otifrootcauses: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lane: {
      type: DataTypes.STRING(3000),
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
    modeof_transport: {
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
      type: DataTypes.STRING(200),
      allowNull: true
    },
    followup_complaints: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    cost_saving: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    accuracy_document: {
      type: DataTypes.STRING(300),
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
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sourceOperationalData',
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
