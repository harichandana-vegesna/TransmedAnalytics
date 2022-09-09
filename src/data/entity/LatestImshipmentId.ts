import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LatestImshipmentIdAttributes {
  parent_id?: number;
  shipment_status?: string;
  max_shipment_id?: number;
}

export type LatestImshipmentIdOptionalAttributes = "parent_id" | "shipment_status" | "max_shipment_id";
export type LatestImshipmentIdCreationAttributes = Optional<LatestImshipmentIdAttributes, LatestImshipmentIdOptionalAttributes>;

export class LatestImshipmentId extends Model<LatestImshipmentIdAttributes, LatestImshipmentIdCreationAttributes> implements LatestImshipmentIdAttributes {
  parent_id?: number;
  shipment_status?: string;
  max_shipment_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof LatestImshipmentId {
    LatestImshipmentId.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shipment_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    max_shipment_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'latest_imshipment_id',
    timestamps: false
  });
  return LatestImshipmentId;
  }
}
