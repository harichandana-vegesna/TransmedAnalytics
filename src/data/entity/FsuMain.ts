import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FsuMainAttributes {
  ID: number;
  MasterAirwayBillNumber?: string;
  Origin?: string;
  Destination?: string;
  CarrierCode?: string;
  SegmentDeliveryPartyName?: string;
  SegmentNotifiedPartyName?: string;
  Weight?: number;
  WeightCode?: string;
  Volume?: number;
  VolumeCode?: string;
  NumberofPieces?: number;
  SpecialHandlingCode?: object;
  OsiDetails?: object;
  SsrDetails?: object;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type FsuMainPk = "ID";
export type FsuMainId = FsuMain[FsuMainPk];
export type FsuMainOptionalAttributes = "ID" | "MasterAirwayBillNumber" | "Origin" | "Destination" | "CarrierCode" | "SegmentDeliveryPartyName" | "SegmentNotifiedPartyName" | "Weight" | "WeightCode" | "Volume" | "VolumeCode" | "NumberofPieces" | "SpecialHandlingCode" | "OsiDetails" | "SsrDetails" | "createdAt" | "updatedAt" | "deletedAt";
export type FsuMainCreationAttributes = Optional<FsuMainAttributes, FsuMainOptionalAttributes>;

export class FsuMain extends Model<FsuMainAttributes, FsuMainCreationAttributes> implements FsuMainAttributes {
  ID!: number;
  MasterAirwayBillNumber?: string;
  Origin?: string;
  Destination?: string;
  CarrierCode?: string;
  SegmentDeliveryPartyName?: string;
  SegmentNotifiedPartyName?: string;
  Weight?: number;
  WeightCode?: string;
  Volume?: number;
  VolumeCode?: string;
  NumberofPieces?: number;
  SpecialHandlingCode?: object;
  OsiDetails?: object;
  SsrDetails?: object;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof FsuMain {
    FsuMain.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MasterAirwayBillNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Origin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Destination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CarrierCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentDeliveryPartyName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentNotifiedPartyName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Weight: {
      type: DataTypes.FLOAT(15,3),
      allowNull: true
    },
    WeightCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Volume: {
      type: DataTypes.FLOAT(15,3),
      allowNull: true
    },
    VolumeCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NumberofPieces: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SpecialHandlingCode: {
      type: DataTypes.JSON,
      allowNull: true
    },
    OsiDetails: {
      type: DataTypes.JSON,
      allowNull: true
    },
    SsrDetails: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FSU_Main',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  return FsuMain;
  }
}
