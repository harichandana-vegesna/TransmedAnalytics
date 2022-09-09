import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface OutFordeliveryAttributes {
  parent_id?: number;
  out_fordeliveryDate?: string;
}

export type OutFordeliveryOptionalAttributes = "parent_id" | "out_fordeliveryDate";
export type OutFordeliveryCreationAttributes = Optional<OutFordeliveryAttributes, OutFordeliveryOptionalAttributes>;

export class OutFordelivery extends Model<OutFordeliveryAttributes, OutFordeliveryCreationAttributes> implements OutFordeliveryAttributes {
  parent_id?: number;
  out_fordeliveryDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof OutFordelivery {
    OutFordelivery.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    out_fordeliveryDate: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'out_fordelivery',
    timestamps: false
  });
  return OutFordelivery;
  }
}
