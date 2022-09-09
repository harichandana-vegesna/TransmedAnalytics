
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { AggCostanalysisShipments, AggGskvxscorecard } from "../entity/init-models";
import { BvAggCostanalysis } from "../entity/init-models";

import { AggCostgrpshipments } from "../entity/init-models";

import Sequelize = require('sequelize');
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
export class ShipmentAnalyticsCostRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    

    async get(whereObj: any): Promise<AggCostanalysisShipments[]> {
            this.logger.log("whereObj",whereObj)
            return await new Promise((resolve, reject) => {
                AggCostanalysisShipments.findAll({ where: whereObj,attributes:['origin_code','destination_code','smode_of_transport','shipment_origin_country','origin','shipment_destination','shipment_destination_country',[Sequelize.fn('count', Sequelize.col('noofshipments')), 'noofshipments'],[Sequelize.fn('count', Sequelize.col('noofhawbs')), 'noofhawbs'],[Sequelize.literal('ROUND(sum(`assumed_ratesused`)/IFNULL(count(`noofhawbs`),1),2)'),'ratesUsed'],[Sequelize.fn('sum', Sequelize.col('totalcost')), 'totalcost']],group: ['origin_code','destination_code','smode_of_transport','shipment_origin_country','origin','shipment_destination','shipment_destination_country']
                }).then((get: AggCostanalysisShipments[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })

    }

    async getGrpShipments(whereObj: any,attributes:any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
            return await new Promise((resolve, reject) => {
                BvAggCostanalysis.findAll({ where: whereObj , attributes:['month','year_number',[Sequelize.fn('count', Sequelize.col('sshipment_id')), 'noofshipments'],[Sequelize.fn('count', Sequelize.col('hawb')), 'noofhawbs'],[Sequelize.literal('ROUND(sum(`calc_total_price_with_rate`),0)'),'totalcost']],group:['month','year_number']
                }).then((get: BvAggCostanalysis[]) => {
                    resolve(get);
                }).catch((error: any) => {  
                    this.logger.error(error);
                    reject(error);
                });
            })

    }

}