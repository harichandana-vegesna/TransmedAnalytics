import type { Sequelize } from "sequelize";
import { AppUsers as _AppUsers } from "./AppUsers";
import type { AppUsersAttributes, AppUsersCreationAttributes } from "./AppUsers";
import { BvAggCostanalysis as _BvAggCostanalysis } from "./BvAggCostanalysis";
import type { BvAggCostanalysisAttributes, BvAggCostanalysisCreationAttributes } from "./BvAggCostanalysis";
import { BvEtaDeviationDrilldown as _BvEtaDeviationDrilldown } from "./BvEtaDeviationDrilldown";
import type { BvEtaDeviationDrilldownAttributes, BvEtaDeviationDrilldownCreationAttributes } from "./BvEtaDeviationDrilldown";
import { BvNewshipmentetadeviation as _BvNewshipmentetadeviation } from "./BvNewshipmentetadeviation";
import type { BvNewshipmentetadeviationAttributes, BvNewshipmentetadeviationCreationAttributes } from "./BvNewshipmentetadeviation";
import { BvNewshipmentetadeviationDelivered as _BvNewshipmentetadeviationDelivered } from "./BvNewshipmentetadeviationDelivered";
import type { BvNewshipmentetadeviationDeliveredAttributes, BvNewshipmentetadeviationDeliveredCreationAttributes } from "./BvNewshipmentetadeviationDelivered";
import { BvNewshipmentetadeviationIntransit as _BvNewshipmentetadeviationIntransit } from "./BvNewshipmentetadeviationIntransit";
import type { BvNewshipmentetadeviationIntransitAttributes, BvNewshipmentetadeviationIntransitCreationAttributes } from "./BvNewshipmentetadeviationIntransit";
import { BvRebookingCancellations as _BvRebookingCancellations } from "./BvRebookingCancellations";
import type { BvRebookingCancellationsAttributes, BvRebookingCancellationsCreationAttributes } from "./BvRebookingCancellations";
import { BvShipmentEtaDeviation as _BvShipmentEtaDeviation } from "./BvShipmentEtaDeviation";
import type { BvShipmentEtaDeviationAttributes, BvShipmentEtaDeviationCreationAttributes } from "./BvShipmentEtaDeviation";
import { BvShipmentEtaDeviationNodate as _BvShipmentEtaDeviationNodate } from "./BvShipmentEtaDeviationNodate";
import type { BvShipmentEtaDeviationNodateAttributes, BvShipmentEtaDeviationNodateCreationAttributes } from "./BvShipmentEtaDeviationNodate";
import { BvYtdshipmentsDrilldown as _BvYtdshipmentsDrilldown } from "./BvYtdshipmentsDrilldown";
import type { BvYtdshipmentsDrilldownAttributes, BvYtdshipmentsDrilldownCreationAttributes } from "./BvYtdshipmentsDrilldown";
import { KpiDocument as _KpiDocument } from "./KpiDocument";
import type { KpiDocumentAttributes, KpiDocumentCreationAttributes } from "./KpiDocument";
import { RegionMaster as _RegionMaster } from "./RegionMaster";
import type { RegionMasterAttributes, RegionMasterCreationAttributes } from "./RegionMaster";
import { VShipmentEtacount as _VShipmentEtacount } from "./VShipmentEtacount";
import type { VShipmentEtacountAttributes, VShipmentEtacountCreationAttributes } from "./VShipmentEtacount";
import { AggAirlinePerformance as _AggAirlinePerformance } from "./AggAirlinePerformance";
import type { AggAirlinePerformanceAttributes, AggAirlinePerformanceCreationAttributes } from "./AggAirlinePerformance";
import { AggCostanalysisShipments as _AggCostanalysisShipments } from "./AggCostanalysisShipments";
import type { AggCostanalysisShipmentsAttributes, AggCostanalysisShipmentsCreationAttributes } from "./AggCostanalysisShipments";
import { AggCostgrpshipments as _AggCostgrpshipments } from "./AggCostgrpshipments";
import type { AggCostgrpshipmentsAttributes, AggCostgrpshipmentsCreationAttributes } from "./AggCostgrpshipments";
import { AggGrossNetotPerformance as _AggGrossNetotPerformance } from "./AggGrossNetotPerformance";
import type { AggGrossNetotPerformanceAttributes, AggGrossNetotPerformanceCreationAttributes } from "./AggGrossNetotPerformance";
import { AggGskvxscorecard as _AggGskvxscorecard } from "./AggGskvxscorecard";
import type { AggGskvxscorecardAttributes, AggGskvxscorecardCreationAttributes } from "./AggGskvxscorecard";
import { AggIrregularityremarks as _AggIrregularityremarks } from "./AggIrregularityremarks";
import type { AggIrregularityremarksAttributes, AggIrregularityremarksCreationAttributes } from "./AggIrregularityremarks";
import { AggLaneoverview as _AggLaneoverview } from "./AggLaneoverview";
import type { AggLaneoverviewAttributes, AggLaneoverviewCreationAttributes } from "./AggLaneoverview";
import { AggOtifrootcauses as _AggOtifrootcauses } from "./AggOtifrootcauses";
import type { AggOtifrootcausesAttributes, AggOtifrootcausesCreationAttributes } from "./AggOtifrootcauses";
import { AggQtyoverview as _AggQtyoverview } from "./AggQtyoverview";
import type { AggQtyoverviewAttributes, AggQtyoverviewCreationAttributes } from "./AggQtyoverview";
import { AggRebookingsCancellations as _AggRebookingsCancellations } from "./AggRebookingsCancellations";
import type { AggRebookingsCancellationsAttributes, AggRebookingsCancellationsCreationAttributes } from "./AggRebookingsCancellations";
import { AggYtdshipmentsWeight as _AggYtdshipmentsWeight } from "./AggYtdshipmentsWeight";
import type { AggYtdshipmentsWeightAttributes, AggYtdshipmentsWeightCreationAttributes } from "./AggYtdshipmentsWeight";
import { AggYtdspendWeight as _AggYtdspendWeight } from "./AggYtdspendWeight";
import type { AggYtdspendWeightAttributes, AggYtdspendWeightCreationAttributes } from "./AggYtdspendWeight";
import { BatchtimeUpdate as _BatchtimeUpdate } from "./BatchtimeUpdate";
import type { BatchtimeUpdateAttributes, BatchtimeUpdateCreationAttributes } from "./BatchtimeUpdate";
import { CustomImport as _CustomImport } from "./CustomImport";
import type { CustomImportAttributes, CustomImportCreationAttributes } from "./CustomImport";
import { Delivered as _Delivered } from "./Delivered";
import type { DeliveredAttributes, DeliveredCreationAttributes } from "./Delivered";
import { Depart as _Depart } from "./Depart";
import type { DepartAttributes, DepartCreationAttributes } from "./Depart";
import { DimConsignee as _DimConsignee } from "./DimConsignee";
import type { DimConsigneeAttributes, DimConsigneeCreationAttributes } from "./DimConsignee";
import { DimAirline as _DimAirline } from "./DimAirline";
import type { DimAirlineAttributes, DimAirlineCreationAttributes } from "./DimAirline";
import { DimDelivery as _DimDelivery } from "./DimDelivery";
import type { DimDeliveryAttributes, DimDeliveryCreationAttributes } from "./DimDelivery";
import { DimPickup as _DimPickup } from "./DimPickup";
import type { DimPickupAttributes, DimPickupCreationAttributes } from "./DimPickup";
import { DimPortofDest as _DimPortofDest } from "./DimPortofDest";
import type { DimPortofDestAttributes, DimPortofDestCreationAttributes } from "./DimPortofDest";
import { DimPortofOrigin as _DimPortofOrigin } from "./DimPortofOrigin";
import type { DimPortofOriginAttributes, DimPortofOriginCreationAttributes } from "./DimPortofOrigin";
import { DimShipper as _DimShipper } from "./DimShipper";
import type { DimShipperAttributes, DimShipperCreationAttributes } from "./DimShipper";
import { DimTime as _DimTime } from "./DimTime";
import type { DimTimeAttributes, DimTimeCreationAttributes } from "./DimTime";
import { Dispatch as _Dispatch } from "./Dispatch";
import type { DispatchAttributes, DispatchCreationAttributes } from "./Dispatch";
import { Etadelivered as _Etadelivered } from "./Etadelivered";
import type { EtadeliveredAttributes, EtadeliveredCreationAttributes } from "./Etadelivered";
import { FactOperationalData as _FactOperationalData } from "./FactOperationalData";
import type { FactOperationalDataAttributes, FactOperationalDataCreationAttributes } from "./FactOperationalData";
import { HawbList as _HawbList } from "./HawbList";
import type { HawbListAttributes, HawbListCreationAttributes } from "./HawbList";
import { ImMessages as _ImMessages } from "./ImMessages";
import type { ImMessagesAttributes, ImMessagesCreationAttributes } from "./ImMessages";
import { ImShipmentAnalytics as _ImShipmentAnalytics } from "./ImShipmentAnalytics";
import type { ImShipmentAnalyticsAttributes, ImShipmentAnalyticsCreationAttributes } from "./ImShipmentAnalytics";
import { ImShipmentAnalyticsCost as _ImShipmentAnalyticsCost } from "./ImShipmentAnalyticsCost";
import type { ImShipmentAnalyticsCostAttributes, ImShipmentAnalyticsCostCreationAttributes } from "./ImShipmentAnalyticsCost";
import { LatestId as _LatestId } from "./LatestId";
import type { LatestIdAttributes, LatestIdCreationAttributes } from "./LatestId";
import { LatestImshipmentId as _LatestImshipmentId } from "./LatestImshipmentId";
import type { LatestImshipmentIdAttributes, LatestImshipmentIdCreationAttributes } from "./LatestImshipmentId";
import { LatestImshipmentIntransitId as _LatestImshipmentIntransitId } from "./LatestImshipmentIntransitId";
import type { LatestImshipmentIntransitIdAttributes, LatestImshipmentIntransitIdCreationAttributes } from "./LatestImshipmentIntransitId";
import { OtifrootcausesMaster as _OtifrootcausesMaster } from "./OtifrootcausesMaster";
import type { OtifrootcausesMasterAttributes, OtifrootcausesMasterCreationAttributes } from "./OtifrootcausesMaster";
import { OutFordelivery as _OutFordelivery } from "./OutFordelivery";
import type { OutFordeliveryAttributes, OutFordeliveryCreationAttributes } from "./OutFordelivery";
import { Pickup as _Pickup } from "./Pickup";
import type { PickupAttributes, PickupCreationAttributes } from "./Pickup";
import { RegionDetails as _RegionDetails } from "./RegionDetails";
import type { RegionDetailsAttributes, RegionDetailsCreationAttributes } from "./RegionDetails";
import { RegionDetailsCost as _RegionDetailsCost } from "./RegionDetailsCost";
import type { RegionDetailsCostAttributes, RegionDetailsCostCreationAttributes } from "./RegionDetailsCost";
import { RegionDetailsIntransit as _RegionDetailsIntransit } from "./RegionDetailsIntransit";
import type { RegionDetailsIntransitAttributes, RegionDetailsIntransitCreationAttributes } from "./RegionDetailsIntransit";
import { ShipmentDeviated as _ShipmentDeviated } from "./ShipmentDeviated";
import type { ShipmentDeviatedAttributes, ShipmentDeviatedCreationAttributes } from "./ShipmentDeviated";
import { SourceOperationalData as _SourceOperationalData } from "./SourceOperationalData";
import type { SourceOperationalDataAttributes, SourceOperationalDataCreationAttributes } from "./SourceOperationalData";

export {
  _AppUsers as AppUsers,
  _BvAggCostanalysis as BvAggCostanalysis,
  _BvEtaDeviationDrilldown as BvEtaDeviationDrilldown,
  _BvNewshipmentetadeviation as BvNewshipmentetadeviation,
  _BvNewshipmentetadeviationDelivered as BvNewshipmentetadeviationDelivered,
  _BvNewshipmentetadeviationIntransit as BvNewshipmentetadeviationIntransit,
  _BvRebookingCancellations as BvRebookingCancellations,
  _BvShipmentEtaDeviation as BvShipmentEtaDeviation,
  _BvShipmentEtaDeviationNodate as BvShipmentEtaDeviationNodate,
  _BvYtdshipmentsDrilldown as BvYtdshipmentsDrilldown,
  _KpiDocument as KpiDocument,
  _RegionMaster as RegionMaster,
  _VShipmentEtacount as VShipmentEtacount,
  _AggAirlinePerformance as AggAirlinePerformance,
  _AggCostanalysisShipments as AggCostanalysisShipments,
  _AggCostgrpshipments as AggCostgrpshipments,
  _AggGrossNetotPerformance as AggGrossNetotPerformance,
  _AggGskvxscorecard as AggGskvxscorecard,
  _AggIrregularityremarks as AggIrregularityremarks,
  _AggLaneoverview as AggLaneoverview,
  _AggOtifrootcauses as AggOtifrootcauses,
  _AggQtyoverview as AggQtyoverview,
  _AggRebookingsCancellations as AggRebookingsCancellations,
  _AggYtdshipmentsWeight as AggYtdshipmentsWeight,
  _AggYtdspendWeight as AggYtdspendWeight,
  _BatchtimeUpdate as BatchtimeUpdate,
  _CustomImport as CustomImport,
  _Delivered as Delivered,
  _Depart as Depart,
  _DimConsignee as DimConsignee,
  _DimAirline as DimAirline,
  _DimDelivery as DimDelivery,
  _DimPickup as DimPickup,
  _DimPortofDest as DimPortofDest,
  _DimPortofOrigin as DimPortofOrigin,
  _DimShipper as DimShipper,
  _DimTime as DimTime,
  _Dispatch as Dispatch,
  _Etadelivered as Etadelivered,
  _FactOperationalData as FactOperationalData,
  _HawbList as HawbList,
  _ImMessages as ImMessages,
  _ImShipmentAnalytics as ImShipmentAnalytics,
  _ImShipmentAnalyticsCost as ImShipmentAnalyticsCost,
  _LatestId as LatestId,
  _LatestImshipmentId as LatestImshipmentId,
  _LatestImshipmentIntransitId as LatestImshipmentIntransitId,
  _OtifrootcausesMaster as OtifrootcausesMaster,
  _OutFordelivery as OutFordelivery,
  _Pickup as Pickup,
  _RegionDetails as RegionDetails,
  _RegionDetailsCost as RegionDetailsCost,
  _RegionDetailsIntransit as RegionDetailsIntransit,
  _ShipmentDeviated as ShipmentDeviated,
  _SourceOperationalData as SourceOperationalData,
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
  KpiDocumentAttributes,
  KpiDocumentCreationAttributes,
  RegionMasterAttributes,
  RegionMasterCreationAttributes,
  VShipmentEtacountAttributes,
  VShipmentEtacountCreationAttributes,
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
  CustomImportAttributes,
  CustomImportCreationAttributes,
  DeliveredAttributes,
  DeliveredCreationAttributes,
  DepartAttributes,
  DepartCreationAttributes,
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
  DispatchAttributes,
  DispatchCreationAttributes,
  EtadeliveredAttributes,
  EtadeliveredCreationAttributes,
  FactOperationalDataAttributes,
  FactOperationalDataCreationAttributes,
  HawbListAttributes,
  HawbListCreationAttributes,
  ImMessagesAttributes,
  ImMessagesCreationAttributes,
  ImShipmentAnalyticsAttributes,
  ImShipmentAnalyticsCreationAttributes,
  ImShipmentAnalyticsCostAttributes,
  ImShipmentAnalyticsCostCreationAttributes,
  LatestIdAttributes,
  LatestIdCreationAttributes,
  LatestImshipmentIdAttributes,
  LatestImshipmentIdCreationAttributes,
  LatestImshipmentIntransitIdAttributes,
  LatestImshipmentIntransitIdCreationAttributes,
  OtifrootcausesMasterAttributes,
  OtifrootcausesMasterCreationAttributes,
  OutFordeliveryAttributes,
  OutFordeliveryCreationAttributes,
  PickupAttributes,
  PickupCreationAttributes,
  RegionDetailsAttributes,
  RegionDetailsCreationAttributes,
  RegionDetailsCostAttributes,
  RegionDetailsCostCreationAttributes,
  RegionDetailsIntransitAttributes,
  RegionDetailsIntransitCreationAttributes,
  ShipmentDeviatedAttributes,
  ShipmentDeviatedCreationAttributes,
  SourceOperationalDataAttributes,
  SourceOperationalDataCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const AppUsers = _AppUsers.initModel(sequelize);
  const BvAggCostanalysis = _BvAggCostanalysis.initModel(sequelize);
  const BvEtaDeviationDrilldown = _BvEtaDeviationDrilldown.initModel(sequelize);
  const BvNewshipmentetadeviation = _BvNewshipmentetadeviation.initModel(sequelize);
  const BvNewshipmentetadeviationDelivered = _BvNewshipmentetadeviationDelivered.initModel(sequelize);
  const BvNewshipmentetadeviationIntransit = _BvNewshipmentetadeviationIntransit.initModel(sequelize);
  const BvRebookingCancellations = _BvRebookingCancellations.initModel(sequelize);
  const BvShipmentEtaDeviation = _BvShipmentEtaDeviation.initModel(sequelize);
  const BvShipmentEtaDeviationNodate = _BvShipmentEtaDeviationNodate.initModel(sequelize);
  const BvYtdshipmentsDrilldown = _BvYtdshipmentsDrilldown.initModel(sequelize);
  const KpiDocument = _KpiDocument.initModel(sequelize);
  const RegionMaster = _RegionMaster.initModel(sequelize);
  const VShipmentEtacount = _VShipmentEtacount.initModel(sequelize);
  const AggAirlinePerformance = _AggAirlinePerformance.initModel(sequelize);
  const AggCostanalysisShipments = _AggCostanalysisShipments.initModel(sequelize);
  const AggCostgrpshipments = _AggCostgrpshipments.initModel(sequelize);
  const AggGrossNetotPerformance = _AggGrossNetotPerformance.initModel(sequelize);
  const AggGskvxscorecard = _AggGskvxscorecard.initModel(sequelize);
  const AggIrregularityremarks = _AggIrregularityremarks.initModel(sequelize);
  const AggLaneoverview = _AggLaneoverview.initModel(sequelize);
  const AggOtifrootcauses = _AggOtifrootcauses.initModel(sequelize);
  const AggQtyoverview = _AggQtyoverview.initModel(sequelize);
  const AggRebookingsCancellations = _AggRebookingsCancellations.initModel(sequelize);
  const AggYtdshipmentsWeight = _AggYtdshipmentsWeight.initModel(sequelize);
  const AggYtdspendWeight = _AggYtdspendWeight.initModel(sequelize);
  const BatchtimeUpdate = _BatchtimeUpdate.initModel(sequelize);
  const CustomImport = _CustomImport.initModel(sequelize);
  const Delivered = _Delivered.initModel(sequelize);
  const Depart = _Depart.initModel(sequelize);
  const DimConsignee = _DimConsignee.initModel(sequelize);
  const DimAirline = _DimAirline.initModel(sequelize);
  const DimDelivery = _DimDelivery.initModel(sequelize);
  const DimPickup = _DimPickup.initModel(sequelize);
  const DimPortofDest = _DimPortofDest.initModel(sequelize);
  const DimPortofOrigin = _DimPortofOrigin.initModel(sequelize);
  const DimShipper = _DimShipper.initModel(sequelize);
  const DimTime = _DimTime.initModel(sequelize);
  const Dispatch = _Dispatch.initModel(sequelize);
  const Etadelivered = _Etadelivered.initModel(sequelize);
  const FactOperationalData = _FactOperationalData.initModel(sequelize);
  const HawbList = _HawbList.initModel(sequelize);
  const ImMessages = _ImMessages.initModel(sequelize);
  const ImShipmentAnalytics = _ImShipmentAnalytics.initModel(sequelize);
  const ImShipmentAnalyticsCost = _ImShipmentAnalyticsCost.initModel(sequelize);
  const LatestId = _LatestId.initModel(sequelize);
  const LatestImshipmentId = _LatestImshipmentId.initModel(sequelize);
  const LatestImshipmentIntransitId = _LatestImshipmentIntransitId.initModel(sequelize);
  const OtifrootcausesMaster = _OtifrootcausesMaster.initModel(sequelize);
  const OutFordelivery = _OutFordelivery.initModel(sequelize);
  const Pickup = _Pickup.initModel(sequelize);
  const RegionDetails = _RegionDetails.initModel(sequelize);
  const RegionDetailsCost = _RegionDetailsCost.initModel(sequelize);
  const RegionDetailsIntransit = _RegionDetailsIntransit.initModel(sequelize);
  const ShipmentDeviated = _ShipmentDeviated.initModel(sequelize);
  const SourceOperationalData = _SourceOperationalData.initModel(sequelize);

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
    BvNewshipmentetadeviationDelivered: BvNewshipmentetadeviationDelivered,
    BvNewshipmentetadeviationIntransit: BvNewshipmentetadeviationIntransit,
    BvRebookingCancellations: BvRebookingCancellations,
    BvShipmentEtaDeviation: BvShipmentEtaDeviation,
    BvShipmentEtaDeviationNodate: BvShipmentEtaDeviationNodate,
    BvYtdshipmentsDrilldown: BvYtdshipmentsDrilldown,
    KpiDocument: KpiDocument,
    RegionMaster: RegionMaster,
    VShipmentEtacount: VShipmentEtacount,
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
    CustomImport: CustomImport,
    Delivered: Delivered,
    Depart: Depart,
    DimConsignee: DimConsignee,
    DimAirline: DimAirline,
    DimDelivery: DimDelivery,
    DimPickup: DimPickup,
    DimPortofDest: DimPortofDest,
    DimPortofOrigin: DimPortofOrigin,
    DimShipper: DimShipper,
    DimTime: DimTime,
    Dispatch: Dispatch,
    Etadelivered: Etadelivered,
    FactOperationalData: FactOperationalData,
    HawbList: HawbList,
    ImMessages: ImMessages,
    ImShipmentAnalytics: ImShipmentAnalytics,
    ImShipmentAnalyticsCost: ImShipmentAnalyticsCost,
    LatestId: LatestId,
    LatestImshipmentId: LatestImshipmentId,
    LatestImshipmentIntransitId: LatestImshipmentIntransitId,
    OtifrootcausesMaster: OtifrootcausesMaster,
    OutFordelivery: OutFordelivery,
    Pickup: Pickup,
    RegionDetails: RegionDetails,
    RegionDetailsCost: RegionDetailsCost,
    RegionDetailsIntransit: RegionDetailsIntransit,
    ShipmentDeviated: ShipmentDeviated,
    SourceOperationalData: SourceOperationalData,
  };
}
