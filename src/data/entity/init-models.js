var DataTypes = require("sequelize").DataTypes;
var _AppUsers = require("./AppUsers");
var _KPI_document = require("./KPI_document");
var _RegionMaster = require("./RegionMaster");
var _agg_airline_performance = require("./agg_airline_performance");
var _agg_gross_netotPerformance = require("./agg_gross_netotPerformance");
var _agg_gskvxscorecard = require("./agg_gskvxscorecard");
var _agg_irregularityremarks = require("./agg_irregularityremarks");
var _agg_laneoverview = require("./agg_laneoverview");
var _agg_otifrootcauses = require("./agg_otifrootcauses");
var _agg_qtyoverview = require("./agg_qtyoverview");
var _agg_rebookings_cancellations = require("./agg_rebookings_cancellations");
var _agg_ytdshipmentsWeight = require("./agg_ytdshipmentsWeight");
var _agg_ytdspendWeight = require("./agg_ytdspendWeight");
var _dim_Consignee = require("./dim_Consignee");
var _dim_airline = require("./dim_airline");
var _dim_delivery = require("./dim_delivery");
var _dim_pickup = require("./dim_pickup");
var _dim_portof_dest = require("./dim_portof_dest");
var _dim_portof_origin = require("./dim_portof_origin");
var _dim_shipper = require("./dim_shipper");
var _dim_time = require("./dim_time");
var _fact_operationalData = require("./fact_operationalData");
var _im_messages = require("./im_messages");
var _im_shipment_analytics = require("./im_shipment_analytics");
var _im_shipment_analytics_cost = require("./im_shipment_analytics_cost");
var _otifrootcauses_master = require("./otifrootcauses_master");
var _shipment_deviated = require("./shipment_deviated");
var _sourceOperationalData = require("./sourceOperationalData");

function initModels(sequelize) {
  var AppUsers = _AppUsers(sequelize, DataTypes);
  var KPI_document = _KPI_document(sequelize, DataTypes);
  var RegionMaster = _RegionMaster(sequelize, DataTypes);
  var agg_airline_performance = _agg_airline_performance(sequelize, DataTypes);
  var agg_gross_netotPerformance = _agg_gross_netotPerformance(sequelize, DataTypes);
  var agg_gskvxscorecard = _agg_gskvxscorecard(sequelize, DataTypes);
  var agg_irregularityremarks = _agg_irregularityremarks(sequelize, DataTypes);
  var agg_laneoverview = _agg_laneoverview(sequelize, DataTypes);
  var agg_otifrootcauses = _agg_otifrootcauses(sequelize, DataTypes);
  var agg_qtyoverview = _agg_qtyoverview(sequelize, DataTypes);
  var agg_rebookings_cancellations = _agg_rebookings_cancellations(sequelize, DataTypes);
  var agg_ytdshipmentsWeight = _agg_ytdshipmentsWeight(sequelize, DataTypes);
  var agg_ytdspendWeight = _agg_ytdspendWeight(sequelize, DataTypes);
  var dim_Consignee = _dim_Consignee(sequelize, DataTypes);
  var dim_airline = _dim_airline(sequelize, DataTypes);
  var dim_delivery = _dim_delivery(sequelize, DataTypes);
  var dim_pickup = _dim_pickup(sequelize, DataTypes);
  var dim_portof_dest = _dim_portof_dest(sequelize, DataTypes);
  var dim_portof_origin = _dim_portof_origin(sequelize, DataTypes);
  var dim_shipper = _dim_shipper(sequelize, DataTypes);
  var dim_time = _dim_time(sequelize, DataTypes);
  var fact_operationalData = _fact_operationalData(sequelize, DataTypes);
  var im_messages = _im_messages(sequelize, DataTypes);
  var im_shipment_analytics = _im_shipment_analytics(sequelize, DataTypes);
  var im_shipment_analytics_cost = _im_shipment_analytics_cost(sequelize, DataTypes);
  var otifrootcauses_master = _otifrootcauses_master(sequelize, DataTypes);
  var shipment_deviated = _shipment_deviated(sequelize, DataTypes);
  var sourceOperationalData = _sourceOperationalData(sequelize, DataTypes);

  fact_operationalData.belongsTo(dim_Consignee, { as: "consignee", foreignKey: "consignee_id"});
  dim_Consignee.hasMany(fact_operationalData, { as: "fact_operationalData", foreignKey: "consignee_id"});
  fact_operationalData.belongsTo(dim_airline, { as: "destairline", foreignKey: "destairline_id"});
  dim_airline.hasMany(fact_operationalData, { as: "fact_operationalData", foreignKey: "destairline_id"});
  fact_operationalData.belongsTo(dim_delivery, { as: "dimdelivery", foreignKey: "dimdelivery_id"});
  dim_delivery.hasMany(fact_operationalData, { as: "fact_operationalData", foreignKey: "dimdelivery_id"});
  fact_operationalData.belongsTo(dim_pickup, { as: "dimpickup", foreignKey: "dimpickup_id"});
  dim_pickup.hasMany(fact_operationalData, { as: "fact_operationalData", foreignKey: "dimpickup_id"});
  fact_operationalData.belongsTo(dim_portof_dest, { as: "dest", foreignKey: "dest_id"});
  dim_portof_dest.hasMany(fact_operationalData, { as: "fact_operationalData", foreignKey: "dest_id"});
  fact_operationalData.belongsTo(dim_portof_origin, { as: "org", foreignKey: "org_id"});
  dim_portof_origin.hasMany(fact_operationalData, { as: "fact_operationalData", foreignKey: "org_id"});
  fact_operationalData.belongsTo(dim_shipper, { as: "shipper", foreignKey: "shipper_id"});
  dim_shipper.hasMany(fact_operationalData, { as: "fact_operationalData", foreignKey: "shipper_id"});
  fact_operationalData.belongsTo(dim_time, { as: "dimtime", foreignKey: "dimtime_id"});
  dim_time.hasMany(fact_operationalData, { as: "fact_operationalData", foreignKey: "dimtime_id"});

  return {
    AppUsers,
    KPI_document,
    RegionMaster,
    agg_airline_performance,
    agg_gross_netotPerformance,
    agg_gskvxscorecard,
    agg_irregularityremarks,
    agg_laneoverview,
    agg_otifrootcauses,
    agg_qtyoverview,
    agg_rebookings_cancellations,
    agg_ytdshipmentsWeight,
    agg_ytdspendWeight,
    dim_Consignee,
    dim_airline,
    dim_delivery,
    dim_pickup,
    dim_portof_dest,
    dim_portof_origin,
    dim_shipper,
    dim_time,
    fact_operationalData,
    im_messages,
    im_shipment_analytics,
    im_shipment_analytics_cost,
    otifrootcauses_master,
    shipment_deviated,
    sourceOperationalData,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
