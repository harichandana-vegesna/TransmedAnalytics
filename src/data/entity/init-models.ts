import type { Sequelize } from "sequelize";
import { AppUsers } from "./AppUsers";
import type { AppUsersAttributes, AppUsersCreationAttributes } from "./AppUsers";
import { BvAggCostanalysis } from "./BvAggCostanalysis";
import type { BvAggCostanalysisAttributes, BvAggCostanalysisCreationAttributes } from "./BvAggCostanalysis";
import { BvEtaDeviationDrilldown } from "./BvEtaDeviationDrilldown";
import type { BvEtaDeviationDrilldownAttributes, BvEtaDeviationDrilldownCreationAttributes } from "./BvEtaDeviationDrilldown";
import { BvNewshipmentetadeviation } from "./BvNewshipmentetadeviation";
import type { BvNewshipmentetadeviationAttributes, BvNewshipmentetadeviationCreationAttributes } from "./BvNewshipmentetadeviation";
import { BvNewshipmentetadeviationBk180222 } from "./BvNewshipmentetadeviationBk180222";
import type { BvNewshipmentetadeviationBk180222Attributes, BvNewshipmentetadeviationBk180222CreationAttributes } from "./BvNewshipmentetadeviationBk180222";
import { BvNewshipmentetadeviationDelivered } from "./BvNewshipmentetadeviationDelivered";
import type { BvNewshipmentetadeviationDeliveredAttributes, BvNewshipmentetadeviationDeliveredCreationAttributes } from "./BvNewshipmentetadeviationDelivered";
import { BvNewshipmentetadeviationIntransit } from "./BvNewshipmentetadeviationIntransit";
import type { BvNewshipmentetadeviationIntransitAttributes, BvNewshipmentetadeviationIntransitCreationAttributes } from "./BvNewshipmentetadeviationIntransit";
import { BvRebookingCancellations } from "./BvRebookingCancellations";
import type { BvRebookingCancellationsAttributes, BvRebookingCancellationsCreationAttributes } from "./BvRebookingCancellations";
import { BvShipmentEtaDeviation } from "./BvShipmentEtaDeviation";
import type { BvShipmentEtaDeviationAttributes, BvShipmentEtaDeviationCreationAttributes } from "./BvShipmentEtaDeviation";
import { BvShipmentEtaDeviationNodate } from "./BvShipmentEtaDeviationNodate";
import type { BvShipmentEtaDeviationNodateAttributes, BvShipmentEtaDeviationNodateCreationAttributes } from "./BvShipmentEtaDeviationNodate";
import { BvYtdshipmentsDrilldown } from "./BvYtdshipmentsDrilldown";
import type { BvYtdshipmentsDrilldownAttributes, BvYtdshipmentsDrilldownCreationAttributes } from "./BvYtdshipmentsDrilldown";
import { FsuDetails } from "./FsuDetails";
import type { FsuDetailsAttributes, FsuDetailsCreationAttributes } from "./FsuDetails";
import { FsuMain } from "./FsuMain";
import type { FsuMainAttributes, FsuMainCreationAttributes } from "./FsuMain";
import { KpiDocument } from "./KpiDocument";
import type { KpiDocumentAttributes, KpiDocumentCreationAttributes } from "./KpiDocument";
import { RegionMaster } from "./RegionMaster";
import type { RegionMasterAttributes, RegionMasterCreationAttributes } from "./RegionMaster";
import { RegionMasterBk1 } from "./RegionMasterBk1";
import type { RegionMasterBk1Attributes, RegionMasterBk1CreationAttributes } from "./RegionMasterBk1";
import { RegionMasterProdslgBk210222 } from "./RegionMasterProdslgBk210222";
import type { RegionMasterProdslgBk210222Attributes, RegionMasterProdslgBk210222CreationAttributes } from "./RegionMasterProdslgBk210222";
import { AggAirlinePerformance } from "./AggAirlinePerformance";
import type { AggAirlinePerformanceAttributes, AggAirlinePerformanceCreationAttributes } from "./AggAirlinePerformance";
import { AggCostanalysisShipments } from "./AggCostanalysisShipments";
import type { AggCostanalysisShipmentsAttributes, AggCostanalysisShipmentsCreationAttributes } from "./AggCostanalysisShipments";
import { AggCostgrpshipments } from "./AggCostgrpshipments";
import type { AggCostgrpshipmentsAttributes, AggCostgrpshipmentsCreationAttributes } from "./AggCostgrpshipments";
import { AggGrossNetotPerformance } from "./AggGrossNetotPerformance";
import type { AggGrossNetotPerformanceAttributes, AggGrossNetotPerformanceCreationAttributes } from "./AggGrossNetotPerformance";
import { AggGskvxscorecard } from "./AggGskvxscorecard";
import type { AggGskvxscorecardAttributes, AggGskvxscorecardCreationAttributes } from "./AggGskvxscorecard";
import { AggIrregularityremarks } from "./AggIrregularityremarks";
import type { AggIrregularityremarksAttributes, AggIrregularityremarksCreationAttributes } from "./AggIrregularityremarks";
import { AggLaneoverview } from "./AggLaneoverview";
import type { AggLaneoverviewAttributes, AggLaneoverviewCreationAttributes } from "./AggLaneoverview";
import { AggOtifrootcauses } from "./AggOtifrootcauses";
import type { AggOtifrootcausesAttributes, AggOtifrootcausesCreationAttributes } from "./AggOtifrootcauses";
import { AggQtyoverview } from "./AggQtyoverview";
import type { AggQtyoverviewAttributes, AggQtyoverviewCreationAttributes } from "./AggQtyoverview";
import { AggRebookingsCancellations } from "./AggRebookingsCancellations";
import type { AggRebookingsCancellationsAttributes, AggRebookingsCancellationsCreationAttributes } from "./AggRebookingsCancellations";
import { AggYtdshipmentsWeight } from "./AggYtdshipmentsWeight";
import type { AggYtdshipmentsWeightAttributes, AggYtdshipmentsWeightCreationAttributes } from "./AggYtdshipmentsWeight";
import { AggYtdspendWeight } from "./AggYtdspendWeight";
import type { AggYtdspendWeightAttributes, AggYtdspendWeightCreationAttributes } from "./AggYtdspendWeight";
import { BatchtimeUpdate } from "./BatchtimeUpdate";
import type { BatchtimeUpdateAttributes, BatchtimeUpdateCreationAttributes } from "./BatchtimeUpdate";
import { DimConsignee } from "./DimConsignee";
import type { DimConsigneeAttributes, DimConsigneeCreationAttributes } from "./DimConsignee";
import { DimAirline } from "./DimAirline";
import type { DimAirlineAttributes, DimAirlineCreationAttributes } from "./DimAirline";
import { DimDelivery } from "./DimDelivery";
import type { DimDeliveryAttributes, DimDeliveryCreationAttributes } from "./DimDelivery";
import { DimPickup } from "./DimPickup";
import type { DimPickupAttributes, DimPickupCreationAttributes } from "./DimPickup";
import { DimPortofDest } from "./DimPortofDest";
import type { DimPortofDestAttributes, DimPortofDestCreationAttributes } from "./DimPortofDest";
import { DimPortofOrigin } from "./DimPortofOrigin";
import type { DimPortofOriginAttributes, DimPortofOriginCreationAttributes } from "./DimPortofOrigin";
import { DimShipper } from "./DimShipper";
import type { DimShipperAttributes, DimShipperCreationAttributes } from "./DimShipper";
import { DimTime } from "./DimTime";
import type { DimTimeAttributes, DimTimeCreationAttributes } from "./DimTime";
import { FactOperationalData } from "./FactOperationalData";
import type { FactOperationalDataAttributes, FactOperationalDataCreationAttributes } from "./FactOperationalData";
import { ImMessages } from "./ImMessages";
import type { ImMessagesAttributes, ImMessagesCreationAttributes } from "./ImMessages";
import { ImShipmentAnalytics } from "./ImShipmentAnalytics";
import type { ImShipmentAnalyticsAttributes, ImShipmentAnalyticsCreationAttributes } from "./ImShipmentAnalytics";
import { ImShipmentAnalyticsCost } from "./ImShipmentAnalyticsCost";
import type { ImShipmentAnalyticsCostAttributes, ImShipmentAnalyticsCostCreationAttributes } from "./ImShipmentAnalyticsCost";
import { LatestImshipmentId } from "./LatestImshipmentId";
import type { LatestImshipmentIdAttributes, LatestImshipmentIdCreationAttributes } from "./LatestImshipmentId";
import { OtifrootcausesMaster } from "./OtifrootcausesMaster";
import type { OtifrootcausesMasterAttributes, OtifrootcausesMasterCreationAttributes } from "./OtifrootcausesMaster";
import { RegionDetails } from "./RegionDetails";
import type { RegionDetailsAttributes, RegionDetailsCreationAttributes } from "./RegionDetails";
import { ShipmentDeviated } from "./ShipmentDeviated";
import type { ShipmentDeviatedAttributes, ShipmentDeviatedCreationAttributes } from "./ShipmentDeviated";
import { SourceOperationalData } from "./SourceOperationalData";
import type { SourceOperationalDataAttributes, SourceOperationalDataCreationAttributes } from "./SourceOperationalData";
import { VFlightDetails } from "./VFlightDetails";
import type { VFlightDetailsAttributes, VFlightDetailsCreationAttributes } from "./VFlightDetails";

export {
  AppUsers,
  BvAggCostanalysis,
  BvEtaDeviationDrilldown,
  BvNewshipmentetadeviation,
  BvNewshipmentetadeviationBk180222,
  BvNewshipmentetadeviationDelivered,
  BvNewshipmentetadeviationIntransit,
  BvRebookingCancellations,
  BvShipmentEtaDeviation,
  BvShipmentEtaDeviationNodate,
  BvYtdshipmentsDrilldown,
  FsuDetails,
  FsuMain,
  KpiDocument,
  RegionMaster,
  RegionMasterBk1,
  RegionMasterProdslgBk210222,
  AggAirlinePerformance,
  AggCostanalysisShipments,
  AggCostgrpshipments,
  AggGrossNetotPerformance,
  AggGskvxscorecard,
  AggIrregularityremarks,
  AggLaneoverview,
  AggOtifrootcauses,
  AggQtyoverview,
  AggRebookingsCancellations,
  AggYtdshipmentsWeight,
  AggYtdspendWeight,
  BatchtimeUpdate,
  DimConsignee,
  DimAirline,
  DimDelivery,
  DimPickup,
  DimPortofDest,
  DimPortofOrigin,
  DimShipper,
  DimTime,
  FactOperationalData,
  ImMessages,
  ImShipmentAnalytics,
  ImShipmentAnalyticsCost,
  LatestImshipmentId,
  OtifrootcausesMaster,
  RegionDetails,
  ShipmentDeviated,
  SourceOperationalData,
  VFlightDetails,
};

export type {
  AppUsersAttributes,
  AppUsersCreationAttributes,
  BvAggCostanalysisAttributes,
  BvAggCostanalysisCreationAttributes,
  BvEtaDeviationDrilldownAttributes,
  BvEtaDeviationDrilldownCreationAttributes,
  BvNewshipmentetadeviationAttributes,
  BvNewshipmentetadeviationCreationAttributes,
  BvNewshipmentetadeviationBk180222Attributes,
  BvNewshipmentetadeviationBk180222CreationAttributes,
  BvNewshipmentetadeviationDeliveredAttributes,
  BvNewshipmentetadeviationDeliveredCreationAttributes,
  BvNewshipmentetadeviationIntransitAttributes,
  BvNewshipmentetadeviationIntransitCreationAttributes,
  BvRebookingCancellationsAttributes,
  BvRebookingCancellationsCreationAttributes,
  BvShipmentEtaDeviationAttributes,
  BvShipmentEtaDeviationCreationAttributes,
  BvShipmentEtaDeviationNodateAttributes,
  BvShipmentEtaDeviationNodateCreationAttributes,
  BvYtdshipmentsDrilldownAttributes,
  BvYtdshipmentsDrilldownCreationAttributes,
  FsuDetailsAttributes,
  FsuDetailsCreationAttributes,
  FsuMainAttributes,
  FsuMainCreationAttributes,
  KpiDocumentAttributes,
  KpiDocumentCreationAttributes,
  RegionMasterAttributes,
  RegionMasterCreationAttributes,
  RegionMasterBk1Attributes,
  RegionMasterBk1CreationAttributes,
  RegionMasterProdslgBk210222Attributes,
  RegionMasterProdslgBk210222CreationAttributes,
  AggAirlinePerformanceAttributes,
  AggAirlinePerformanceCreationAttributes,
  AggCostanalysisShipmentsAttributes,
  AggCostanalysisShipmentsCreationAttributes,
  AggCostgrpshipmentsAttributes,
  AggCostgrpshipmentsCreationAttributes,
  AggGrossNetotPerformanceAttributes,
  AggGrossNetotPerformanceCreationAttributes,
  AggGskvxscorecardAttributes,
  AggGskvxscorecardCreationAttributes,
  AggIrregularityremarksAttributes,
  AggIrregularityremarksCreationAttributes,
  AggLaneoverviewAttributes,
  AggLaneoverviewCreationAttributes,
  AggOtifrootcausesAttributes,
  AggOtifrootcausesCreationAttributes,
  AggQtyoverviewAttributes,
  AggQtyoverviewCreationAttributes,
  AggRebookingsCancellationsAttributes,
  AggRebookingsCancellationsCreationAttributes,
  AggYtdshipmentsWeightAttributes,
  AggYtdshipmentsWeightCreationAttributes,
  AggYtdspendWeightAttributes,
  AggYtdspendWeightCreationAttributes,
  BatchtimeUpdateAttributes,
  BatchtimeUpdateCreationAttributes,
  DimConsigneeAttributes,
  DimConsigneeCreationAttributes,
  DimAirlineAttributes,
  DimAirlineCreationAttributes,
  DimDeliveryAttributes,
  DimDeliveryCreationAttributes,
  DimPickupAttributes,
  DimPickupCreationAttributes,
  DimPortofDestAttributes,
  DimPortofDestCreationAttributes,
  DimPortofOriginAttributes,
  DimPortofOriginCreationAttributes,
  DimShipperAttributes,
  DimShipperCreationAttributes,
  DimTimeAttributes,
  DimTimeCreationAttributes,
  FactOperationalDataAttributes,
  FactOperationalDataCreationAttributes,
  ImMessagesAttributes,
  ImMessagesCreationAttributes,
  ImShipmentAnalyticsAttributes,
  ImShipmentAnalyticsCreationAttributes,
  ImShipmentAnalyticsCostAttributes,
  ImShipmentAnalyticsCostCreationAttributes,
  LatestImshipmentIdAttributes,
  LatestImshipmentIdCreationAttributes,
  OtifrootcausesMasterAttributes,
  OtifrootcausesMasterCreationAttributes,
  RegionDetailsAttributes,
  RegionDetailsCreationAttributes,
  ShipmentDeviatedAttributes,
  ShipmentDeviatedCreationAttributes,
  SourceOperationalDataAttributes,
  SourceOperationalDataCreationAttributes,
  VFlightDetailsAttributes,
  VFlightDetailsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  AppUsers.initModel(sequelize);
  BvAggCostanalysis.initModel(sequelize);
  BvEtaDeviationDrilldown.initModel(sequelize);
  BvNewshipmentetadeviation.initModel(sequelize);
  BvNewshipmentetadeviationBk180222.initModel(sequelize);
  BvNewshipmentetadeviationDelivered.initModel(sequelize);
  BvNewshipmentetadeviationIntransit.initModel(sequelize);
  BvRebookingCancellations.initModel(sequelize);
  BvShipmentEtaDeviation.initModel(sequelize);
  BvShipmentEtaDeviationNodate.initModel(sequelize);
  BvYtdshipmentsDrilldown.initModel(sequelize);
  FsuDetails.initModel(sequelize);
  FsuMain.initModel(sequelize);
  KpiDocument.initModel(sequelize);
  RegionMaster.initModel(sequelize);
  RegionMasterBk1.initModel(sequelize);
  RegionMasterProdslgBk210222.initModel(sequelize);
  AggAirlinePerformance.initModel(sequelize);
  AggCostanalysisShipments.initModel(sequelize);
  AggCostgrpshipments.initModel(sequelize);
  AggGrossNetotPerformance.initModel(sequelize);
  AggGskvxscorecard.initModel(sequelize);
  AggIrregularityremarks.initModel(sequelize);
  AggLaneoverview.initModel(sequelize);
  AggOtifrootcauses.initModel(sequelize);
  AggQtyoverview.initModel(sequelize);
  AggRebookingsCancellations.initModel(sequelize);
  AggYtdshipmentsWeight.initModel(sequelize);
  AggYtdspendWeight.initModel(sequelize);
  BatchtimeUpdate.initModel(sequelize);
  DimConsignee.initModel(sequelize);
  DimAirline.initModel(sequelize);
  DimDelivery.initModel(sequelize);
  DimPickup.initModel(sequelize);
  DimPortofDest.initModel(sequelize);
  DimPortofOrigin.initModel(sequelize);
  DimShipper.initModel(sequelize);
  DimTime.initModel(sequelize);
  FactOperationalData.initModel(sequelize);
  ImMessages.initModel(sequelize);
  ImShipmentAnalytics.initModel(sequelize);
  ImShipmentAnalyticsCost.initModel(sequelize);
  LatestImshipmentId.initModel(sequelize);
  OtifrootcausesMaster.initModel(sequelize);
  RegionDetails.initModel(sequelize);
  ShipmentDeviated.initModel(sequelize);
  SourceOperationalData.initModel(sequelize);
  VFlightDetails.initModel(sequelize);

  FactOperationalData.belongsTo(DimConsignee, { as: "consignee", foreignKey: "consignee_id"});
  DimConsignee.hasMany(FactOperationalData, { as: "fact_operationalData", foreignKey: "consignee_id"});
  FactOperationalData.belongsTo(DimAirline, { as: "destairline", foreignKey: "destairline_id"});
  DimAirline.hasMany(FactOperationalData, { as: "fact_operationalData", foreignKey: "destairline_id"});
  FactOperationalData.belongsTo(DimDelivery, { as: "dimdelivery", foreignKey: "dimdelivery_id"});
  DimDelivery.hasMany(FactOperationalData, { as: "fact_operationalData", foreignKey: "dimdelivery_id"});
  FactOperationalData.belongsTo(DimPickup, { as: "dimpickup", foreignKey: "dimpickup_id"});
  DimPickup.hasMany(FactOperationalData, { as: "fact_operationalData", foreignKey: "dimpickup_id"});
  FactOperationalData.belongsTo(DimPortofDest, { as: "dest", foreignKey: "dest_id"});
  DimPortofDest.hasMany(FactOperationalData, { as: "fact_operationalData", foreignKey: "dest_id"});
  FactOperationalData.belongsTo(DimPortofOrigin, { as: "org", foreignKey: "org_id"});
  DimPortofOrigin.hasMany(FactOperationalData, { as: "fact_operationalData", foreignKey: "org_id"});
  FactOperationalData.belongsTo(DimShipper, { as: "shipper", foreignKey: "shipper_id"});
  DimShipper.hasMany(FactOperationalData, { as: "fact_operationalData", foreignKey: "shipper_id"});
  FactOperationalData.belongsTo(DimTime, { as: "dimtime", foreignKey: "dimtime_id"});
  DimTime.hasMany(FactOperationalData, { as: "fact_operationalData", foreignKey: "dimtime_id"});

  return {
    AppUsers: AppUsers,
    BvAggCostanalysis: BvAggCostanalysis,
    BvEtaDeviationDrilldown: BvEtaDeviationDrilldown,
    BvNewshipmentetadeviation: BvNewshipmentetadeviation,
    BvNewshipmentetadeviationBk180222: BvNewshipmentetadeviationBk180222,
    BvNewshipmentetadeviationDelivered: BvNewshipmentetadeviationDelivered,
    BvNewshipmentetadeviationIntransit: BvNewshipmentetadeviationIntransit,
    BvRebookingCancellations: BvRebookingCancellations,
    BvShipmentEtaDeviation: BvShipmentEtaDeviation,
    BvShipmentEtaDeviationNodate: BvShipmentEtaDeviationNodate,
    BvYtdshipmentsDrilldown: BvYtdshipmentsDrilldown,
    FsuDetails: FsuDetails,
    FsuMain: FsuMain,
    KpiDocument: KpiDocument,
    RegionMaster: RegionMaster,
    RegionMasterBk1: RegionMasterBk1,
    RegionMasterProdslgBk210222: RegionMasterProdslgBk210222,
    AggAirlinePerformance: AggAirlinePerformance,
    AggCostanalysisShipments: AggCostanalysisShipments,
    AggCostgrpshipments: AggCostgrpshipments,
    AggGrossNetotPerformance: AggGrossNetotPerformance,
    AggGskvxscorecard: AggGskvxscorecard,
    AggIrregularityremarks: AggIrregularityremarks,
    AggLaneoverview: AggLaneoverview,
    AggOtifrootcauses: AggOtifrootcauses,
    AggQtyoverview: AggQtyoverview,
    AggRebookingsCancellations: AggRebookingsCancellations,
    AggYtdshipmentsWeight: AggYtdshipmentsWeight,
    AggYtdspendWeight: AggYtdspendWeight,
    BatchtimeUpdate: BatchtimeUpdate,
    DimConsignee: DimConsignee,
    DimAirline: DimAirline,
    DimDelivery: DimDelivery,
    DimPickup: DimPickup,
    DimPortofDest: DimPortofDest,
    DimPortofOrigin: DimPortofOrigin,
    DimShipper: DimShipper,
    DimTime: DimTime,
    FactOperationalData: FactOperationalData,
    ImMessages: ImMessages,
    ImShipmentAnalytics: ImShipmentAnalytics,
    ImShipmentAnalyticsCost: ImShipmentAnalyticsCost,
    LatestImshipmentId: LatestImshipmentId,
    OtifrootcausesMaster: OtifrootcausesMaster,
    RegionDetails: RegionDetails,
    ShipmentDeviated: ShipmentDeviated,
    SourceOperationalData: SourceOperationalData,
    VFlightDetails: VFlightDetails,
  };
}
