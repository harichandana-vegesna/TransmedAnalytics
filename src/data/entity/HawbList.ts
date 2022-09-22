import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface HawbListAttributes {
  id?: any;
  hawb?: string;
  month?: string;
  year?: string;
  flag: string;
}

export type HawbListPk = "id";
export type HawbListId = HawbList[HawbListPk];
export type HawbListOptionalAttributes = "id" | "hawb" | "month" | "year" | "flag";
export type HawbListCreationAttributes = Optional<HawbListAttributes, HawbListOptionalAttributes>;

export class HawbList extends Model<HawbListAttributes, HawbListCreationAttributes> implements HawbListAttributes {
  id?: any;
  hawb?: string;
  month?: string;
  year?: string;
  flag!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof HawbList {
    return HawbList.init({
    id: {
      type: DataTypes.BLOB,
      allowNull: true,
      primaryKey: true
    },
    hawb: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    flag: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'hawb_list',
    timestamps: false
  });
  }
}
