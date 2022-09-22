const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fact_operationalData', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_reference_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    consignee_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    console_reference_num: {
      type: DataTypes.STRING(300),
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
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_volume: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    shipment_service_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weight_uom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    content_description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    hbcreationdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total_pieces: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    actual_arrival: {
      type: DataTypes.DATEONLY,
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
    gross_ontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    security_pripaid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fuel_prepaid: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    export_freightcharges: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    preference_level: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    podday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hbday: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    wdays_pickupto_pod: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    elapsed_days: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dis_description: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    dis_timestamp: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pod_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pod: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estimated_arrival: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    container_weight: {
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
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(1000),
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
      type: DataTypes.STRING(200),
      allowNull: true
    },
    standardized_otifrootcauses: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    netontime: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    lane: {
      type: DataTypes.STRING(1000),
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
      type: DataTypes.STRING(45),
      allowNull: true
    },
    complaints: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    cost_saving: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    accuracy_document: {
      type: DataTypes.STRING(3000),
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
    destairline_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_airline',
        key: 'id'
      }
    },
    consignee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_Consignee',
        key: 'id'
      }
    },
    dest_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_portof_dest',
        key: 'id'
      }
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_portof_origin',
        key: 'id'
      }
    },
    shipper_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_shipper',
        key: 'id'
      }
    },
    dimtime_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_time',
        key: 'id'
      }
    },
    dimpickup_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_pickup',
        key: 'id'
      }
    },
    dimdelivery_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dim_delivery',
        key: 'id'
      }
    },
    cancelledby: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cancelled: {
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
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cost_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    amount_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    reason_avoidance: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cost_currencytype: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lsporgid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fact_operationalData',
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
      {
        name: "fact_operationalData_fk1_idx",
        using: "BTREE",
        fields: [
          { name: "destairline_id" },
        ]
      },
      {
        name: "fact_operationalData_fk2_idx",
        using: "BTREE",
        fields: [
          { name: "consignee_id" },
        ]
      },
      {
        name: "fact_operationalData_fk2_idx1",
        using: "BTREE",
        fields: [
          { name: "dest_id" },
        ]
      },
      {
        name: "fact_operationalData_fk3_idx",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
      {
        name: "fact_operationalData_fk4_idx",
        using: "BTREE",
        fields: [
          { name: "shipper_id" },
        ]
      },
      {
        name: "fact_operationalData_fk4_idx1",
        using: "BTREE",
        fields: [
          { name: "dimtime_id" },
        ]
      },
      {
        name: "fact_operationalData_fk7_idx",
        using: "BTREE",
        fields: [
          { name: "dimpickup_id" },
        ]
      },
      {
        name: "fact_operationalData_fk8_idx",
        using: "BTREE",
        fields: [
          { name: "dimdelivery_id" },
        ]
      },
    ]
  });
};
