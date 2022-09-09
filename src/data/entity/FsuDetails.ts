import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FsuDetailsAttributes {
  ID: number;
  PARENT_ID?: number;
  WeightUOM?: string;
  SegmentWeight?: number;
  SegmentPieces?: number;
  SegmentFlightNumber?: string;
  SegmentDepartureOccurrenceDateTime?: Date;
  SegmentDepartureDateTimeTypeCode?: string;
  SegmentArrivalOccurrenceDateTime?: Date;
  SegmentArrivalDateTimeTypeCode?: string;
  SegmentOrigin?: string;
  SegmentDestination?: string;
  SegmentLocationCode?: string;
  SegmentOccurrenceDateTime?: Date;
  SegmentDateTimeTypeCode?: string;
  status_code?: string;
  SegmentUldNumbers?: object;
  RecycleSequence?: number;
  BLESSCreationDateTime?: Date;
  JobID?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type FsuDetailsPk = "ID";
export type FsuDetailsId = FsuDetails[FsuDetailsPk];
export type FsuDetailsOptionalAttributes = "ID" | "PARENT_ID" | "WeightUOM" | "SegmentWeight" | "SegmentPieces" | "SegmentFlightNumber" | "SegmentDepartureOccurrenceDateTime" | "SegmentDepartureDateTimeTypeCode" | "SegmentArrivalOccurrenceDateTime" | "SegmentArrivalDateTimeTypeCode" | "SegmentOrigin" | "SegmentDestination" | "SegmentLocationCode" | "SegmentOccurrenceDateTime" | "SegmentDateTimeTypeCode" | "status_code" | "SegmentUldNumbers" | "RecycleSequence" | "BLESSCreationDateTime" | "JobID" | "createdAt" | "updatedAt" | "deletedAt";
export type FsuDetailsCreationAttributes = Optional<FsuDetailsAttributes, FsuDetailsOptionalAttributes>;

export class FsuDetails extends Model<FsuDetailsAttributes, FsuDetailsCreationAttributes> implements FsuDetailsAttributes {
  ID!: number;
  PARENT_ID?: number;
  WeightUOM?: string;
  SegmentWeight?: number;
  SegmentPieces?: number;
  SegmentFlightNumber?: string;
  SegmentDepartureOccurrenceDateTime?: Date;
  SegmentDepartureDateTimeTypeCode?: string;
  SegmentArrivalOccurrenceDateTime?: Date;
  SegmentArrivalDateTimeTypeCode?: string;
  SegmentOrigin?: string;
  SegmentDestination?: string;
  SegmentLocationCode?: string;
  SegmentOccurrenceDateTime?: Date;
  SegmentDateTimeTypeCode?: string;
  status_code?: string;
  SegmentUldNumbers?: object;
  RecycleSequence?: number;
  BLESSCreationDateTime?: Date;
  JobID?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof FsuDetails {
    FsuDetails.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WeightUOM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentWeight: {
      type: DataTypes.FLOAT(15,3),
      allowNull: true
    },
    SegmentPieces: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SegmentFlightNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentDepartureOccurrenceDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SegmentDepartureDateTimeTypeCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentArrivalOccurrenceDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SegmentArrivalDateTimeTypeCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentOrigin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentDestination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentLocationCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentOccurrenceDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SegmentDateTimeTypeCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SegmentUldNumbers: {
      type: DataTypes.JSON,
      allowNull: true
    },
    RecycleSequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BLESSCreationDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    JobID: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FSU_Details',
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
  return FsuDetails;
  }
}
