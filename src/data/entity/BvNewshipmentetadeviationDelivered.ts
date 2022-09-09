import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BvNewshipmentetadeviationDeliveredAttributes {
  id: number;
  parent_id?: number;
  shipment_status?: string;
  diffhours?: number;
  etadiffhours: string;
  '6hrsdeviation'?: number;
  '12hrsdeviation'?: number;
  '18hrsdeviation'?: number;
  '1daydeviation'?: number;
  g1daydeviation?: number;
  ontime?: string;
  deviate_status: number;
  days?: number;
  hours?: number;
  shipment_date?: Date;
  month?: string;
  year_number?: number;
  shipper_org_group?: string;
  origin_region?: string;
  destination_origin?: string;
  origin_latitude?: number;
  destination_longitude?: number;
  origin_longitude?: number;
  destination_latitude?: number;
  destination_code?: string;
  carrier?: string;
  origin_code?: string;
  shipment_destination?: string;
  shipper?: string;
  smode_of_transport?: string;
  number_of_pieces?: number;
  consignee?: string;
  weight?: number;
  sshipment_id?: string;
  hawb?: string;
  origin?: string;
  volume?: number;
  weight_uom?: string;
  AllRegions: string;
  pickuppartyType?: string;
  delivery_mode?: string;
  carrier_country?: string;
  leg3_destination_country?: string;
  leg3_origin_country?: string;
  leg5_sequence_no?: string;
  leg2_destination_code?: string;
  leg4_origin_code?: string;
  leg5_carrier_code?: string;
  leg4_destination_country?: string;
  leg3_ata_offset?: string;
  leg4_carrier_code?: string;
  leg5_carrier_name?: string;
  leg5_ata_date?: string;
  leg2_origin_country?: string;
  leg2_transport_number?: string;
  leg1_transport_number?: string;
  leg3_origin_code?: string;
  leg1_mode_of_transport?: string;
  leg1_origin_code?: string;
  leg3_sequence_no?: string;
  chargeable_weight?: string;
  leg2_ata_date?: string;
  leg4_ata_offset?: string;
  leg1_origin_name?: string;
  leg1_atd_date?: string;
  leg4_carrier_name?: string;
  leg3_destination_code?: string;
  leg2_carrier_name?: string;
  leg1_sequence_no?: string;
  leg4_origin_name?: string;
  leg5_destination_name?: string;
  leg4_origin_country?: string;
  leg4_ata_date?: string;
  commodity_code?: string;
  leg3_origin_name?: string;
  shipper_reference?: string;
  leg2_origin_code?: string;
  leg5_ata_offset?: string;
  leg4_atd_date?: string;
  leg4_destination_name?: string;
  leg4_transport_number?: string;
  leg2_destination_name?: string;
  leg5_origin_country?: string;
  leg4_sequence_no?: string;
  leg2_mode_of_transport?: string;
  leg2_atd_date?: string;
  leg3_ata_date?: string;
  leg5_transport_number?: string;
  leg3_transport_number?: string;
  leg5_mode_of_transport?: string;
  leg3_destination_name?: string;
  leg1_carrier_code?: string;
  leg1_carrier_name?: string;
  leg1_atd_offset?: string;
  leg3_carrier_code?: string;
  leg2_carrier_code?: string;
  leg3_carrier_name?: string;
  shipment_total_currency?: string;
  leg1_destination_name?: string;
  leg2_destination_country?: string;
  leg5_atd_offset?: string;
  leg3_atd_offset?: string;
  leg4_mode_of_transport?: string;
  leg1_ata_date?: Date;
  leg_sequence: string;
  leg1_ata_offset?: string;
  leg5_origin_code?: string;
  leg5_destination_country?: string;
  leg2_ata_offset?: string;
  leg1_destination_country?: string;
  leg3_mode_of_transport?: string;
  leg4_atd_offset?: string;
  leg2_origin_name?: string;
  planned_pickupdate: string;
  actual_pickupdate: string;
  actual_timeofdispatch: string;
  pickup?: Date;
  depart?: Date;
  dispath?: Date;
  custom_import?: Date;
  outfordelivery?: Date;
  delivered?: Date;
  shipment_origin_country?: string;
  shipment_destination_country?: string;
}

export type BvNewshipmentetadeviationDeliveredPk = "id";
export type BvNewshipmentetadeviationDeliveredId = BvNewshipmentetadeviationDelivered[BvNewshipmentetadeviationDeliveredPk];
export type BvNewshipmentetadeviationDeliveredOptionalAttributes = "id" | "parent_id" | "shipment_status" | "diffhours" | "etadiffhours" | "6hrsdeviation" | "12hrsdeviation" | "18hrsdeviation" | "1daydeviation" | "g1daydeviation" | "ontime" | "deviate_status" | "days" | "hours" | "shipment_date" | "month" | "year_number" | "shipper_org_group" | "origin_region" | "destination_origin" | "origin_latitude" | "destination_longitude" | "origin_longitude" | "destination_latitude" | "destination_code" | "carrier" | "origin_code" | "shipment_destination" | "shipper" | "smode_of_transport" | "number_of_pieces" | "consignee" | "weight" | "sshipment_id" | "hawb" | "origin" | "volume" | "weight_uom" | "AllRegions" | "pickuppartyType" | "delivery_mode" | "carrier_country" | "leg3_destination_country" | "leg3_origin_country" | "leg5_sequence_no" | "leg2_destination_code" | "leg4_origin_code" | "leg5_carrier_code" | "leg4_destination_country" | "leg3_ata_offset" | "leg4_carrier_code" | "leg5_carrier_name" | "leg5_ata_date" | "leg2_origin_country" | "leg2_transport_number" | "leg1_transport_number" | "leg3_origin_code" | "leg1_mode_of_transport" | "leg1_origin_code" | "leg3_sequence_no" | "chargeable_weight" | "leg2_ata_date" | "leg4_ata_offset" | "leg1_origin_name" | "leg1_atd_date" | "leg4_carrier_name" | "leg3_destination_code" | "leg2_carrier_name" | "leg1_sequence_no" | "leg4_origin_name" | "leg5_destination_name" | "leg4_origin_country" | "leg4_ata_date" | "commodity_code" | "leg3_origin_name" | "shipper_reference" | "leg2_origin_code" | "leg5_ata_offset" | "leg4_atd_date" | "leg4_destination_name" | "leg4_transport_number" | "leg2_destination_name" | "leg5_origin_country" | "leg4_sequence_no" | "leg2_mode_of_transport" | "leg2_atd_date" | "leg3_ata_date" | "leg5_transport_number" | "leg3_transport_number" | "leg5_mode_of_transport" | "leg3_destination_name" | "leg1_carrier_code" | "leg1_carrier_name" | "leg1_atd_offset" | "leg3_carrier_code" | "leg2_carrier_code" | "leg3_carrier_name" | "shipment_total_currency" | "leg1_destination_name" | "leg2_destination_country" | "leg5_atd_offset" | "leg3_atd_offset" | "leg4_mode_of_transport" | "leg1_ata_date" | "leg_sequence" | "leg1_ata_offset" | "leg5_origin_code" | "leg5_destination_country" | "leg2_ata_offset" | "leg1_destination_country" | "leg3_mode_of_transport" | "leg4_atd_offset" | "leg2_origin_name" | "planned_pickupdate" | "actual_pickupdate" | "actual_timeofdispatch" | "pickup" | "depart" | "dispath" | "custom_import" | "outfordelivery" | "delivered" | "shipment_origin_country" | "shipment_destination_country";
export type BvNewshipmentetadeviationDeliveredCreationAttributes = Optional<BvNewshipmentetadeviationDeliveredAttributes, BvNewshipmentetadeviationDeliveredOptionalAttributes>;

export class BvNewshipmentetadeviationDelivered extends Model<BvNewshipmentetadeviationDeliveredAttributes, BvNewshipmentetadeviationDeliveredCreationAttributes> implements BvNewshipmentetadeviationDeliveredAttributes {
  id!: number;
  parent_id?: number;
  shipment_status?: string;
  diffhours?: number;
  etadiffhours!: string;
  '6hrsdeviation'?: number;
  '12hrsdeviation'?: number;
  '18hrsdeviation'?: number;
  '1daydeviation'?: number;
  g1daydeviation?: number;
  ontime?: string;
  deviate_status!: number;
  days?: number;
  hours?: number;
  shipment_date?: Date;
  month?: string;
  year_number?: number;
  shipper_org_group?: string;
  origin_region?: string;
  destination_origin?: string;
  origin_latitude?: number;
  destination_longitude?: number;
  origin_longitude?: number;
  destination_latitude?: number;
  destination_code?: string;
  carrier?: string;
  origin_code?: string;
  shipment_destination?: string;
  shipper?: string;
  smode_of_transport?: string;
  number_of_pieces?: number;
  consignee?: string;
  weight?: number;
  sshipment_id?: string;
  hawb?: string;
  origin?: string;
  volume?: number;
  weight_uom?: string;
  AllRegions!: string;
  pickuppartyType?: string;
  delivery_mode?: string;
  carrier_country?: string;
  leg3_destination_country?: string;
  leg3_origin_country?: string;
  leg5_sequence_no?: string;
  leg2_destination_code?: string;
  leg4_origin_code?: string;
  leg5_carrier_code?: string;
  leg4_destination_country?: string;
  leg3_ata_offset?: string;
  leg4_carrier_code?: string;
  leg5_carrier_name?: string;
  leg5_ata_date?: string;
  leg2_origin_country?: string;
  leg2_transport_number?: string;
  leg1_transport_number?: string;
  leg3_origin_code?: string;
  leg1_mode_of_transport?: string;
  leg1_origin_code?: string;
  leg3_sequence_no?: string;
  chargeable_weight?: string;
  leg2_ata_date?: string;
  leg4_ata_offset?: string;
  leg1_origin_name?: string;
  leg1_atd_date?: string;
  leg4_carrier_name?: string;
  leg3_destination_code?: string;
  leg2_carrier_name?: string;
  leg1_sequence_no?: string;
  leg4_origin_name?: string;
  leg5_destination_name?: string;
  leg4_origin_country?: string;
  leg4_ata_date?: string;
  commodity_code?: string;
  leg3_origin_name?: string;
  shipper_reference?: string;
  leg2_origin_code?: string;
  leg5_ata_offset?: string;
  leg4_atd_date?: string;
  leg4_destination_name?: string;
  leg4_transport_number?: string;
  leg2_destination_name?: string;
  leg5_origin_country?: string;
  leg4_sequence_no?: string;
  leg2_mode_of_transport?: string;
  leg2_atd_date?: string;
  leg3_ata_date?: string;
  leg5_transport_number?: string;
  leg3_transport_number?: string;
  leg5_mode_of_transport?: string;
  leg3_destination_name?: string;
  leg1_carrier_code?: string;
  leg1_carrier_name?: string;
  leg1_atd_offset?: string;
  leg3_carrier_code?: string;
  leg2_carrier_code?: string;
  leg3_carrier_name?: string;
  shipment_total_currency?: string;
  leg1_destination_name?: string;
  leg2_destination_country?: string;
  leg5_atd_offset?: string;
  leg3_atd_offset?: string;
  leg4_mode_of_transport?: string;
  leg1_ata_date?: Date;
  leg_sequence!: string;
  leg1_ata_offset?: string;
  leg5_origin_code?: string;
  leg5_destination_country?: string;
  leg2_ata_offset?: string;
  leg1_destination_country?: string;
  leg3_mode_of_transport?: string;
  leg4_atd_offset?: string;
  leg2_origin_name?: string;
  planned_pickupdate!: string;
  actual_pickupdate!: string;
  actual_timeofdispatch!: string;
  pickup?: Date;
  depart?: Date;
  dispath?: Date;
  custom_import?: Date;
  outfordelivery?: Date;
  delivered?: Date;
  shipment_origin_country?: string;
  shipment_destination_country?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof BvNewshipmentetadeviationDelivered {
    BvNewshipmentetadeviationDelivered.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    diffhours: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    etadiffhours: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    '6hrsdeviation': {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    '12hrsdeviation': {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    '18hrsdeviation': {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    '1daydeviation': {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    g1daydeviation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ontime: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    deviate_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hours: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    shipment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    year_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin_region: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination_origin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin_latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    destination_longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    origin_longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    destination_latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    smode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    number_of_pieces: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    consignee: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sshipment_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    volume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    weight_uom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AllRegions: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    pickuppartyType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    delivery_mode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    carrier_country: {
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
    leg4_carrier_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_carrier_name: {
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
    leg1_transport_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_mode_of_transport: {
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
    leg4_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_carrier_name: {
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
    leg4_origin_country: {
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
    leg3_ata_date: {
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
    leg1_carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg3_carrier_code: {
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
    shipment_total_currency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_destination_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_destination_country: {
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
    leg4_mode_of_transport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg1_ata_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    leg_sequence: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    leg1_ata_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg5_destination_country: {
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
    leg4_atd_offset: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    leg2_origin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    planned_pickupdate: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    actual_pickupdate: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    actual_timeofdispatch: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    pickup: {
      type: DataTypes.DATE,
      allowNull: true
    },
    depart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dispath: {
      type: DataTypes.DATE,
      allowNull: true
    },
    custom_import: {
      type: DataTypes.DATE,
      allowNull: true
    },
    outfordelivery: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delivered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shipment_origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BV_newshipmentetadeviation_delivered',
    timestamps: false
  });
  return BvNewshipmentetadeviationDelivered;
  }
}
