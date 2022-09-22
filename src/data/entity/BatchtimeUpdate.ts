import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BatchtimeUpdateAttributes {
  shipper_org_group?: string;
  hawb?: string;
}

export type BatchtimeUpdateOptionalAttributes = "shipper_org_group" | "hawb";
export type BatchtimeUpdateCreationAttributes = Optional<BatchtimeUpdateAttributes, BatchtimeUpdateOptionalAttributes>;

export class BatchtimeUpdate extends Model<BatchtimeUpdateAttributes, BatchtimeUpdateCreationAttributes> implements BatchtimeUpdateAttributes {
  shipper_org_group?: string;
  hawb?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof BatchtimeUpdate {
    return BatchtimeUpdate.init({
    shipper_org_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hawb: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'batchtime_update',
    timestamps: false
  });
  }
}
