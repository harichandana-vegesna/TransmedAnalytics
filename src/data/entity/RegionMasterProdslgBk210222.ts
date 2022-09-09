import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RegionMasterProdslgBk210222Attributes {
  id: number;
  Country_name?: string;
  Region_name?: string;
  Business_Unit?: string;
  ISO2LetterCode?: string;
  ISO3LetterCode?: string;
  Numeric?: number;
  createdAt?: string;
  latitude?: number;
  longitude?: number;
  dest_latitude?: number;
  dest_longitude?: number;
}

export type RegionMasterProdslgBk210222Pk = "id";
export type RegionMasterProdslgBk210222Id = RegionMasterProdslgBk210222[RegionMasterProdslgBk210222Pk];
export type RegionMasterProdslgBk210222OptionalAttributes = "id" | "Country_name" | "Region_name" | "Business_Unit" | "ISO2LetterCode" | "ISO3LetterCode" | "Numeric" | "createdAt" | "latitude" | "longitude" | "dest_latitude" | "dest_longitude";
export type RegionMasterProdslgBk210222CreationAttributes = Optional<RegionMasterProdslgBk210222Attributes, RegionMasterProdslgBk210222OptionalAttributes>;

export class RegionMasterProdslgBk210222 extends Model<RegionMasterProdslgBk210222Attributes, RegionMasterProdslgBk210222CreationAttributes> implements RegionMasterProdslgBk210222Attributes {
  id!: number;
  Country_name?: string;
  Region_name?: string;
  Business_Unit?: string;
  ISO2LetterCode?: string;
  ISO3LetterCode?: string;
  Numeric?: number;
  createdAt?: string;
  latitude?: number;
  longitude?: number;
  dest_latitude?: number;
  dest_longitude?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof RegionMasterProdslgBk210222 {
    RegionMasterProdslgBk210222.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Country_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Region_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Business_Unit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ISO2LetterCode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ISO3LetterCode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Numeric: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    dest_latitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    },
    dest_longitude: {
      type: DataTypes.FLOAT(11,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RegionMaster_prodslg_bk210222',
    timestamps: true
  });
  return RegionMasterProdslgBk210222;
  }
}
