import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EtadeliveredAttributes {
  maxid?: number;
  maxhawb?: string;
  parent_id?: number;
  mineta?: string;
  maxeta?: string;
  deliveredDate?: string;
  diffhours?: number;
}

export type EtadeliveredOptionalAttributes = "maxid" | "maxhawb" | "parent_id" | "mineta" | "maxeta" | "deliveredDate" | "diffhours";
export type EtadeliveredCreationAttributes = Optional<EtadeliveredAttributes, EtadeliveredOptionalAttributes>;

export class Etadelivered extends Model<EtadeliveredAttributes, EtadeliveredCreationAttributes> implements EtadeliveredAttributes {
  maxid?: number;
  maxhawb?: string;
  parent_id?: number;
  mineta?: string;
  maxeta?: string;
  deliveredDate?: string;
  diffhours?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Etadelivered {
    return Etadelivered.init({
    maxid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxhawb: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mineta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    maxeta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deliveredDate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    diffhours: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'etadelivered',
    timestamps: false
  });
  }
}
