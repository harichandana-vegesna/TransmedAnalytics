import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LatestImshipmentIntransitIdAttributes {
  parent_id?: number;
  shipment_status?: string;
  max_shipment_id?: number;
}

export type LatestImshipmentIntransitIdOptionalAttributes = "parent_id" | "shipment_status" | "max_shipment_id";
export type LatestImshipmentIntransitIdCreationAttributes = Optional<LatestImshipmentIntransitIdAttributes, LatestImshipmentIntransitIdOptionalAttributes>;

export class LatestImshipmentIntransitId extends Model<LatestImshipmentIntransitIdAttributes, LatestImshipmentIntransitIdCreationAttributes> implements LatestImshipmentIntransitIdAttributes {
  parent_id?: number;
  shipment_status?: string;
  max_shipment_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof LatestImshipmentIntransitId {
    return LatestImshipmentIntransitId.init({
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
    tableName: 'latest_imshipment_intransit_id',
    timestamps: false
  });
  }
}
