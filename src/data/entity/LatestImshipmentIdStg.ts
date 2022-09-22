import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LatestImshipmentIdStgAttributes {
  parent_id?: number;
  max_shipment_id?: number;
}

export type LatestImshipmentIdStgOptionalAttributes = "parent_id" | "max_shipment_id";
export type LatestImshipmentIdStgCreationAttributes = Optional<LatestImshipmentIdStgAttributes, LatestImshipmentIdStgOptionalAttributes>;

export class LatestImshipmentIdStg extends Model<LatestImshipmentIdStgAttributes, LatestImshipmentIdStgCreationAttributes> implements LatestImshipmentIdStgAttributes {
  parent_id?: number;
  max_shipment_id?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof LatestImshipmentIdStg {
    return LatestImshipmentIdStg.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_shipment_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'latest_imshipment_id_stg',
    timestamps: false
  });
  }
}
