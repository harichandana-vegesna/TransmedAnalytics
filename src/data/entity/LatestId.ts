import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LatestIdAttributes {
  parent_id?: number;
  shipment_status?: string;
  max_shipment_id?: number;
}

export type LatestIdOptionalAttributes = "parent_id" | "shipment_status" | "max_shipment_id";
export type LatestIdCreationAttributes = Optional<LatestIdAttributes, LatestIdOptionalAttributes>;

export class LatestId extends Model<LatestIdAttributes, LatestIdCreationAttributes> implements LatestIdAttributes {
  parent_id?: number;
  shipment_status?: string;
  max_shipment_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof LatestId {
    LatestId.init({
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
    tableName: 'latest_id',
    timestamps: false
  });
  return LatestId;
  }
}
