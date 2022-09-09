import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DeliveredAttributes {
  parent_id?: number;
  deliveredDate?: string;
}

export type DeliveredOptionalAttributes = "parent_id" | "deliveredDate";
export type DeliveredCreationAttributes = Optional<DeliveredAttributes, DeliveredOptionalAttributes>;

export class Delivered extends Model<DeliveredAttributes, DeliveredCreationAttributes> implements DeliveredAttributes {
  parent_id?: number;
  deliveredDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Delivered {
    Delivered.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deliveredDate: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'delivered',
    timestamps: false
  });
  return Delivered;
  }
}
