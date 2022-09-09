import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DispatchAttributes {
  parent_id?: number;
  dispathDate?: string;
}

export type DispatchOptionalAttributes = "parent_id" | "dispathDate";
export type DispatchCreationAttributes = Optional<DispatchAttributes, DispatchOptionalAttributes>;

export class Dispatch extends Model<DispatchAttributes, DispatchCreationAttributes> implements DispatchAttributes {
  parent_id?: number;
  dispathDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Dispatch {
    Dispatch.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dispathDate: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dispatch',
    timestamps: false
  });
  return Dispatch;
  }
}
