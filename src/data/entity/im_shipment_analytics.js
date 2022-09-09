const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('im_shipment_analytics', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pickupAddress2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    voyage_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pickupZip: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_desc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    shipment_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lspOrgId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    volume_uom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_eta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    publish_info_hash: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_etd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shipment_creation_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryPartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mst_reference_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_service_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipperAccountNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    number_of_pieces: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    consignee_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pickuppartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    delivery_mode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_eta_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chargeable_weight_uom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    chargeable_weight: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier_iata_code2L: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vessel_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    waybill_creation_offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_reference_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tracking_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ship_tracking_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_eta_offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_total_charge: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    freight_terms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pickupAddress1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    shipment_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_dbid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lspOrgName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    commodity_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper_reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg4_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryAddress1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    leg3_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pickupCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    volume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    inco_term_location: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    consignee_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weight_uom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_total_currency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryZip: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dangerous_goods: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    waybill_creation_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    commodity_text: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deliveryAddress2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    leg4_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_creation_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    leg1_ata_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    consginee_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveryCity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_type_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_etd_offset: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    leg4_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_eta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_etd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_sequence_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    master_etd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_inco_terms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    other_charges_terms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_atd_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    count_eta_change: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    count_etd_change: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    planned_pickupdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actual_pickupdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    actual_timeofdispatch: {
      type: DataTypes.DATE,
      allowNull: true
    },
    batch_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "kafka batch time"
    }
  }, {
    sequelize,
    tableName: 'im_shipment_analytics',
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
        name: "idx_im_shipment_analytics_pid",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "idx_event_desc",
        using: "BTREE",
        fields: [
          { name: "event_desc" },
        ]
      },
      {
        name: "idx_shipperAccNum",
        using: "BTREE",
        fields: [
          { name: "shipperAccountNumber" },
        ]
      },
      {
        name: "idx_ship_reference_id",
        using: "BTREE",
        fields: [
          { name: "ship_reference_id" },
        ]
      },
      {
        name: "idx_event_code",
        using: "BTREE",
        fields: [
          { name: "event_code" },
        ]
      },
      {
        name: "idx_shipment_creation_date_time",
        using: "BTREE",
        fields: [
          { name: "shipment_creation_date_time" },
        ]
      },
      {
        name: "idx_event_date",
        using: "BTREE",
        fields: [
          { name: "event_date" },
        ]
      },
      {
        name: "idx_shipment_eta",
        using: "BTREE",
        fields: [
          { name: "shipment_eta" },
        ]
      },
      {
        name: "idx_shipment_etd",
        using: "BTREE",
        fields: [
          { name: "shipment_etd" },
        ]
      },
      {
        name: "idx_ship_tracking_num",
        using: "BTREE",
        fields: [
          { name: "ship_tracking_num" },
        ]
      },
      {
        name: "idx_master_eta",
        using: "BTREE",
        fields: [
          { name: "master_eta" },
        ]
      },
      {
        name: "idx_publish_hash",
        using: "BTREE",
        fields: [
          { name: "publish_info_hash" },
        ]
      },
      {
        name: "idx_shipment_destination_code",
        using: "BTREE",
        fields: [
          { name: "shipment_destination_code" },
        ]
      },
      {
        name: "idx_shipment_origin_code",
        using: "BTREE",
        fields: [
          { name: "shipment_origin_code" },
        ]
      },
      {
        name: "idx_chargeable_weight_uom",
        using: "BTREE",
        fields: [
          { name: "chargeable_weight_uom" },
        ]
      },
      {
        name: "idx_chargeable_weight",
        using: "BTREE",
        fields: [
          { name: "chargeable_weight" },
        ]
      },
      {
        name: "idx_carrier_name",
        using: "BTREE",
        fields: [
          { name: "carrier_name" },
        ]
      },
      {
        name: "idx_carrier_code",
        using: "BTREE",
        fields: [
          { name: "carrier_code" },
        ]
      },
      {
        name: "idx_shipment_status",
        using: "BTREE",
        fields: [
          { name: "shipment_status" },
        ]
      },
      {
        name: "idx_shipper_org_group",
        using: "BTREE",
        fields: [
          { name: "shipper_org_group" },
        ]
      },
    ]
  });
};
