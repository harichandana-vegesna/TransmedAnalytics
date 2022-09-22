import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DepartAttributes {
  parent_id?: number;
  departDate?: string;
}

export type DepartOptionalAttributes = "parent_id" | "departDate";
export type DepartCreationAttributes = Optional<DepartAttributes, DepartOptionalAttributes>;

export class Depart extends Model<DepartAttributes, DepartCreationAttributes> implements DepartAttributes {
  parent_id?: number;
  departDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Depart {
    return Depart.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departDate: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'depart',
    timestamps: false
  });
  }
}
