const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('im_shipment_analytics_cost', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shipper_account_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unit_cost_total_price_az: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ship_cost_dangerous_goods: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    calc_total_price_with_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    chargeable_weight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ship_cost_lane_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    publish_info_hash: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ship_cost_lane_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_creation_offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chargeable_weight_units: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unit_cost_total_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ship_reference_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inco_terms: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ship_cost_invoice_currency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_creation_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    service_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    calc_total_price_with_rate_az: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    shipper_org_Id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ship_cost_container_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'im_shipment_analytics_cost',
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
        name: "idx_im_shipment_analytics_cost_pid",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
