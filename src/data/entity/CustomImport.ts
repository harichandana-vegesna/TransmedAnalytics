import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CustomImportAttributes {
  parent_id?: number;
  custom_importDate?: string;
}

export type CustomImportOptionalAttributes = "parent_id" | "custom_importDate";
export type CustomImportCreationAttributes = Optional<CustomImportAttributes, CustomImportOptionalAttributes>;

export class CustomImport extends Model<CustomImportAttributes, CustomImportCreationAttributes> implements CustomImportAttributes {
  parent_id?: number;
  custom_importDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof CustomImport {
    CustomImport.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    custom_importDate: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'custom_import',
    timestamps: false
  });
  return CustomImport;
  }
}
