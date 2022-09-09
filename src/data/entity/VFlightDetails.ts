import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VFlightDetailsAttributes {
  id?: number;
  spaceAllocCode?: any;
  fltArrPortCode?: string;
  monthOfschDeparture?: Date;
  fltDepPortCode?: string;
  carrierCode?: string;
  allotmentIdentification: string;
  dayOfschDeparture?: Date;
  flightNumber?: string;
  addlAttr?: object;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type VFlightDetailsPk = "id";
export type VFlightDetailsId = VFlightDetails[VFlightDetailsPk];
export type VFlightDetailsOptionalAttributes = "id" | "spaceAllocCode" | "fltArrPortCode" | "monthOfschDeparture" | "fltDepPortCode" | "carrierCode" | "allotmentIdentification" | "dayOfschDeparture" | "flightNumber" | "addlAttr" | "createdAt" | "updatedAt" | "deletedAt";
export type VFlightDetailsCreationAttributes = Optional<VFlightDetailsAttributes, VFlightDetailsOptionalAttributes>;

export class VFlightDetails extends Model<VFlightDetailsAttributes, VFlightDetailsCreationAttributes> implements VFlightDetailsAttributes {
  id?: number;
  spaceAllocCode?: any;
  fltArrPortCode?: string;
  monthOfschDeparture?: Date;
  fltDepPortCode?: string;
  carrierCode?: string;
  allotmentIdentification!: string;
  dayOfschDeparture?: Date;
  flightNumber?: string;
  addlAttr?: object;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof VFlightDetails {
    VFlightDetails.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    spaceAllocCode: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    fltArrPortCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    monthOfschDeparture: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fltDepPortCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    carrierCode: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    allotmentIdentification: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    dayOfschDeparture: {
      type: DataTypes.DATE,
      allowNull: true
    },
    flightNumber: {
      type: DataTypes.STRING(253),
      allowNull: true
    },
    addlAttr: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'v_flight_details',
    timestamps: true,
    paranoid: true
  });
  return VFlightDetails;
  }
}
