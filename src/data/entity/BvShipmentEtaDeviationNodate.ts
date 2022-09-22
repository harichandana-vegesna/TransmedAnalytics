import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BvShipmentEtaDeviationNodateAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  noOfShipments?: number;
  hawb?: number;
  etaDeviation_flag?: number;
  totetaDeviation_flag?: number;
  etaDeviation?: number;
  shipper_org_group?: string;
  origin?: string;
  origin_country?: string;
  destination_country?: string;
  shipment_destination?: string;
}

export type BvShipmentEtaDeviationNodateOptionalAttributes = "origin_code" | "destination_code" | "shipper" | "noOfShipments" | "hawb" | "etaDeviation_flag" | "totetaDeviation_flag" | "etaDeviation" | "shipper_org_group" | "origin" | "origin_country" | "destination_country" | "shipment_destination";
export type BvShipmentEtaDeviationNodateCreationAttributes = Optional<BvShipmentEtaDeviationNodateAttributes, BvShipmentEtaDeviationNodateOptionalAttributes>;

export class BvShipmentEtaDeviationNodate extends Model<BvShipmentEtaDeviationNodateAttributes, BvShipmentEtaDeviationNodateCreationAttributes> implements BvShipmentEtaDeviationNodateAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  noOfShipments?: number;
  hawb?: number;
  etaDeviation_flag?: number;
  totetaDeviation_flag?: number;
  etaDeviation?: number;
  shipper_org_group?: string;
  origin?: string;
  origin_country?: string;
  destination_country?: string;
  shipment_destination?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof BvShipmentEtaDeviationNodate {
    return BvShipmentEtaDeviationNodate.init({
    origin_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    noOfShipments: {
      type: DataTypes.DECIMAL(42,0),
      allowNull: true
    },
    hawb: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    etaDeviation_flag: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totetaDeviation_flag: {
      type: DataTypes.DECIMAL(42,0),
      allowNull: true
    },
    etaDeviation: {
      type: DataTypes.DOUBLE(17,0),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_destination: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BV_shipment_eta_deviation_nodate',
    timestamps: false
  });
  }
}
