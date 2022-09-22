import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BvYtdshipmentsDrilldownAttributes {
  Consignee_name?: string;
  shipper_name?: string;
  shipper?: string;
  shipment_id?: string;
  hawb?: string;
  modeof_transport?: string;
  inco_terms?: string;
  carrier?: string;
  shipment_confirmed_date?: string;
  shipment_pickupdate?: string;
  shipment_status: string;
  chargeable_weight?: number;
  total_pieces?: string;
  month?: string;
  year?: string;
  origin_code?: string;
  origin_country?: string;
  destination_code?: string;
  destination_country?: string;
  shipper_org_group?: string;
  parent_id?: string;
  lsporgid?: string;
  shipper_reference?: string;
}

export type BvYtdshipmentsDrilldownOptionalAttributes = "Consignee_name" | "shipper_name" | "shipper" | "shipment_id" | "hawb" | "modeof_transport" | "inco_terms" | "carrier" | "shipment_confirmed_date" | "shipment_pickupdate" | "shipment_status" | "chargeable_weight" | "total_pieces" | "month" | "year" | "origin_code" | "origin_country" | "destination_code" | "destination_country" | "shipper_org_group" | "parent_id" | "lsporgid" | "shipper_reference";
export type BvYtdshipmentsDrilldownCreationAttributes = Optional<BvYtdshipmentsDrilldownAttributes, BvYtdshipmentsDrilldownOptionalAttributes>;

export class BvYtdshipmentsDrilldown extends Model<BvYtdshipmentsDrilldownAttributes, BvYtdshipmentsDrilldownCreationAttributes> implements BvYtdshipmentsDrilldownAttributes {
  Consignee_name?: string;
  shipper_name?: string;
  shipper?: string;
  shipment_id?: string;
  hawb?: string;
  modeof_transport?: string;
  inco_terms?: string;
  carrier?: string;
  shipment_confirmed_date?: string;
  shipment_pickupdate?: string;
  shipment_status!: string;
  chargeable_weight?: number;
  total_pieces?: string;
  month?: string;
  year?: string;
  origin_code?: string;
  origin_country?: string;
  destination_code?: string;
  destination_country?: string;
  shipper_org_group?: string;
  parent_id?: string;
  lsporgid?: string;
  shipper_reference?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof BvYtdshipmentsDrilldown {
    return BvYtdshipmentsDrilldown.init({
    Consignee_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shipper_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shipper: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    shipment_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    modeof_transport: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    inco_terms: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    carrier: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shipment_confirmed_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shipment_pickupdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shipment_status: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    chargeable_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_pieces: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    origin_code: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "shipment_origin_code"
    },
    origin_country: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "shipment_origin_country"
    },
    destination_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination_country: {
      type: DataTypes.STRING(100),
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
    tableName: 'BV_ytdshipments_drilldown',
    timestamps: false
  });
  }
}
