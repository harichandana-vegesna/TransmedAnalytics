import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RegionDetailsCostAttributes {
  parent_id?: number;
  origin_region?: string;
  origin_latitude?: number;
  origin_longitude?: number;
  destination_origin?: string;
  destination_latitude?: number;
  destination_longitude?: number;
}

export type RegionDetailsCostOptionalAttributes = "parent_id" | "origin_region" | "origin_latitude" | "origin_longitude" | "destination_origin" | "destination_latitude" | "destination_longitude";
export type RegionDetailsCostCreationAttributes = Optional<RegionDetailsCostAttributes, RegionDetailsCostOptionalAttributes>;

export class RegionDetailsCost extends Model<RegionDetailsCostAttributes, RegionDetailsCostCreationAttributes> implements RegionDetailsCostAttributes {
  parent_id?: number;
  origin_region?: string;
  origin_latitude?: number;
  origin_longitude?: number;
  destination_origin?: string;
  destination_latitude?: number;
  destination_longitude?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof RegionDetailsCost {
    return RegionDetailsCost.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    origin_region: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    origin_latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    origin_longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    destination_origin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    destination_latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    destination_longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'region_details_cost',
    timestamps: false
  });
  }
}
