import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PickupAttributes {
  parent_id?: number;
  pickupdate?: string;
}

export type PickupOptionalAttributes = "parent_id" | "pickupdate";
export type PickupCreationAttributes = Optional<PickupAttributes, PickupOptionalAttributes>;

export class Pickup extends Model<PickupAttributes, PickupCreationAttributes> implements PickupAttributes {
  parent_id?: number;
  pickupdate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Pickup {
    Pickup.init({
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pickupdate: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pickup',
    timestamps: false
  });
  return Pickup;
  }
}
