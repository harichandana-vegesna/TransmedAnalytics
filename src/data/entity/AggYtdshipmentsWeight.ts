import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AggYtdshipmentsWeightAttributes {
  id: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  destination_country?: string;
  totchargeable_weight?: number;
  countofHawb?: number;
  shipper_org_group?: string;
  volume_uom?: string;
  volume?: number;
  shipment_creation_date_time?: Date;
  month_number?: number;
  shipment_origin?: string;
  shipment_origin_country?: string;
  shipment_destination?: string;
  shipment_destination_country?: string;
  lsporgid?: string;
}

export type AggYtdshipmentsWeightPk = "id";
export type AggYtdshipmentsWeightId = AggYtdshipmentsWeight[AggYtdshipmentsWeightPk];
export type AggYtdshipmentsWeightOptionalAttributes = "id" | "origin_country" | "year_number" | "modeof_transport" | "month" | "year_month" | "destination_country" | "totchargeable_weight" | "countofHawb" | "shipper_org_group" | "volume_uom" | "volume" | "shipment_creation_date_time" | "month_number" | "shipment_origin" | "shipment_origin_country" | "shipment_destination" | "shipment_destination_country" | "lsporgid";
export type AggYtdshipmentsWeightCreationAttributes = Optional<AggYtdshipmentsWeightAttributes, AggYtdshipmentsWeightOptionalAttributes>;

export class AggYtdshipmentsWeight extends Model<AggYtdshipmentsWeightAttributes, AggYtdshipmentsWeightCreationAttributes> implements AggYtdshipmentsWeightAttributes {
  id!: number;
  origin_country?: string;
  year_number?: string;
  modeof_transport?: string;
  month?: string;
  year_month?: string;
  destination_country?: string;
  totchargeable_weight?: number;
  countofHawb?: number;
  shipper_org_group?: string;
  volume_uom?: string;
  volume?: number;
  shipment_creation_date_time?: Date;
  month_number?: number;
  shipment_origin?: string;
  shipment_origin_country?: string;
  shipment_destination?: string;
  shipment_destination_country?: string;
  lsporgid?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AggYtdshipmentsWeight {
    AggYtdshipmentsWeight.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    modeof_transport: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year_month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    destination_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totchargeable_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    countofHawb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    volume_uom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    volume: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    shipment_creation_date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    month_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_origin: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_destination: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shipment_destination_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lsporgid: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agg_ytdshipmentsWeight',
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
      {
        name: "totchargeable_weight",
        using: "BTREE",
        fields: [
          { name: "totchargeable_weight" },
        ]
      },
      {
        name: "countofHawb",
        using: "BTREE",
        fields: [
          { name: "countofHawb" },
        ]
      },
    ]
  });
  return AggYtdshipmentsWeight;
  }
}
