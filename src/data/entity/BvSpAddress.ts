import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BvSpAddressAttributes {
  parent_id?: number;
  accountCode?: string;
  companyName?: string;
  customerOrgId?: string;
  customerOrgName?: string;
  lspOrgId?: string;
  lspOrgName?: string;
  shipperAccountNumber?: string;
  pickupAddress1?: string;
  pickupAddress2?: string;
  pickupCity?: string;
  pickupZip?: string;
  deliveryAddress1?: string;
  deliveryAddress2?: string;
  deliveryCity?: string;
  deliveryZip?: string;
  pickuppartyType?: string;
  deliveryPartyType?: string;
}

export type BvSpAddressOptionalAttributes = "parent_id" | "accountCode" | "companyName" | "customerOrgId" | "customerOrgName" | "lspOrgId" | "lspOrgName" | "shipperAccountNumber" | "pickupAddress1" | "pickupAddress2" | "pickupCity" | "pickupZip" | "deliveryAddress1" | "deliveryAddress2" | "deliveryCity" | "deliveryZip" | "pickuppartyType" | "deliveryPartyType";
export type BvSpAddressCreationAttributes = Optional<BvSpAddressAttributes, BvSpAddressOptionalAttributes>;

export class BvSpAddress extends Model<BvSpAddressAttributes, BvSpAddressCreationAttributes> implements BvSpAddressAttributes {
  parent_id?: number;
  accountCode?: string;
  companyName?: string;
  customerOrgId?: string;
  customerOrgName?: string;
  lspOrgId?: string;
  lspOrgName?: string;
  shipperAccountNumber?: string;
  pickupAddress1?: string;
  pickupAddress2?: string;
  pickupCity?: string;
  pickupZip?: string;
  deliveryAddress1?: string;
  deliveryAddress2?: string;
  deliveryCity?: string;
  deliveryZip?: string;
  pickuppartyType?: string;
  deliveryPartyType?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof BvSpAddress {
    return BvSpAddress.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accountCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    companyName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customerOrgId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customerOrgName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lspOrgId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lspOrgName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipperAccountNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pickupAddress1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pickupAddress2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pickupCity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pickupZip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    deliveryAddress1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deliveryAddress2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deliveryCity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deliveryZip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pickuppartyType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deliveryPartyType: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BV_sp_address',
    timestamps: false,
    indexes: [
      {
        name: "idx_parent_id",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "idx_accountcode",
        using: "BTREE",
        fields: [
          { name: "accountCode" },
        ]
      },
    ]
  });
  }
}
