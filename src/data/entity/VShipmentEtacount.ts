import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VShipmentEtacountAttributes {
  maxid: string;
  hawb?: string;
  parent_id?: number;
  event_code?: string;
  event_desc?: string;
  event_type?: string;
  shipment_eta?: Date;
  event_date?: string;
  shipment_status: string;
  lspOrgId?: string;
  shipper_org_group?: string;
  shipperAccountNumber?: string;
}

export type VShipmentEtacountOptionalAttributes = "maxid" | "hawb" | "parent_id" | "event_code" | "event_desc" | "event_type" | "shipment_eta" | "event_date" | "shipment_status" | "lspOrgId" | "shipper_org_group" | "shipperAccountNumber";
export type VShipmentEtacountCreationAttributes = Optional<VShipmentEtacountAttributes, VShipmentEtacountOptionalAttributes>;

export class VShipmentEtacount extends Model<VShipmentEtacountAttributes, VShipmentEtacountCreationAttributes> implements VShipmentEtacountAttributes {
  maxid!: string;
  hawb?: string;
  parent_id?: number;
  event_code?: string;
  event_desc?: string;
  event_type?: string;
  shipment_eta?: Date;
  event_date?: string;
  shipment_status!: string;
  lspOrgId?: string;
  shipper_org_group?: string;
  shipperAccountNumber?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof VShipmentEtacount {
    return VShipmentEtacount.init({
    maxid: {
      type: DataTypes.CHAR(0),
      allowNull: false,
      defaultValue: ""
    },
    hawb: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    event_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_desc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    event_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_eta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipment_status: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    lspOrgId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shipperAccountNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'V_shipment_etacount',
    timestamps: false
  });
  }
}
