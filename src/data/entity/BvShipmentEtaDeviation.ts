import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BvShipmentEtaDeviationAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  shipment_confirmed_date?: string;
  noOfShipments: number;
  hawb: number;
  etaDeviation_flag?: number;
  totetaDeviation_flag: number;
  etaDeviation?: number;
  shipper_org_group?: string;
  origin?: string;
  origin_country?: string;
  destination_country?: string;
  shipment_destination?: string;
}

export type BvShipmentEtaDeviationOptionalAttributes = "origin_code" | "destination_code" | "shipper" | "shipment_confirmed_date" | "noOfShipments" | "hawb" | "etaDeviation_flag" | "totetaDeviation_flag" | "etaDeviation" | "shipper_org_group" | "origin" | "origin_country" | "destination_country" | "shipment_destination";
export type BvShipmentEtaDeviationCreationAttributes = Optional<BvShipmentEtaDeviationAttributes, BvShipmentEtaDeviationOptionalAttributes>;

export class BvShipmentEtaDeviation extends Model<BvShipmentEtaDeviationAttributes, BvShipmentEtaDeviationCreationAttributes> implements BvShipmentEtaDeviationAttributes {
  origin_code?: string;
  destination_code?: string;
  shipper?: string;
  shipment_confirmed_date?: string;
  noOfShipments!: number;
  hawb!: number;
  etaDeviation_flag?: number;
  totetaDeviation_flag!: number;
  etaDeviation?: number;
  shipper_org_group?: string;
  origin?: string;
  origin_country?: string;
  destination_country?: string;
  shipment_destination?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof BvShipmentEtaDeviation {
    return BvShipmentEtaDeviation.init({
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
    shipment_confirmed_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    noOfShipments: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    hawb: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    etaDeviation_flag: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totetaDeviation_flag: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'BV_shipment_eta_deviation',
    timestamps: false
  });
  }
}
