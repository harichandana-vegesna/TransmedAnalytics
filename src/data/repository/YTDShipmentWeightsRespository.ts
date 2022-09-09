
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { AggYtdshipmentsWeight } from "../entity/init-models";
import { BvAggCostanalysis } from "../entity/init-models";

import Sequelize = require('sequelize');
const { Op } = require("sequelize");
export class YTDShipmentWeightsRespository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }
    async get(whereObj: any): Promise<AggYtdshipmentsWeight[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            AggYtdshipmentsWeight.findAll({
                where: whereObj,attributes:['month','year_number',[Sequelize.fn('sum', Sequelize.col('countofHawb')), 'countofHawb'],[Sequelize.fn('ROUND', Sequelize.fn('sum', Sequelize.col('totchargeable_weight'))), 'totchargeable_weight']],order:[['year_number','ASC']],group: ['month','year_number'],
            }).then((get: AggYtdshipmentsWeight[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getShipmentsByMonthAndYear(whereObj: any): Promise<AggYtdshipmentsWeight[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            AggYtdshipmentsWeight.findAll({
                where: whereObj,attributes:['origin_country','destination_country','volume_uom',[Sequelize.fn('ROUND',Sequelize.fn('sum',Sequelize.col('volume')),2),'volume'],[Sequelize.fn('sum', Sequelize.col('countofHawb')), 'countofHawb'],[Sequelize.fn('ROUND', Sequelize.fn('sum', Sequelize.col('totchargeable_weight'))), 'totchargeable_weight'],['shipment_origin','origin_name'],['shipment_destination','destination_name'],['shipment_origin_country','origin_country_name'],['shipment_destination_country','destination_country_name'],['lsporgid','lspOrgId']],group: ['origin_country','destination_country','volume_uom','shipment_origin','shipment_destination','shipment_origin_country','shipment_destination_country','lsporgid'],
            }).then((get: AggYtdshipmentsWeight[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getAstroYtdShipments(whereObj: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj,attributes:['month','year_number',[Sequelize.fn('count', Sequelize.col('hawb')), 'countofHawb'],[Sequelize.fn('ROUND', Sequelize.fn('sum', Sequelize.col('chargeable_weight'))), 'totchargeable_weight']],order:[['year_number','ASC']],group: ['month','year_number'],
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getAstroShipmentsByMonthAndYear(whereObj: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj,attributes:[['origin_code','origin_country'],['destination_code','destination_country'],[Sequelize.fn('ROUND',Sequelize.fn('sum',Sequelize.col('volume')),2),'volume'],[Sequelize.fn('count', Sequelize.col('hawb')), 'countofHawb'],[Sequelize.fn('ROUND', Sequelize.fn('sum', Sequelize.col('chargeable_weight'))), 'totchargeable_weight'],['origin','origin_name'],['shipment_destination','destination_name'],['shipment_origin_country','origin_country_name'],['shipment_destination_country','destination_country_name'],['lspOrgId','lspOrgId']],group: ['origin_code','destination_code','origin','shipment_destination','shipment_origin_country','shipment_destination_country','lspOrgId'],
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getAstroOriginCountries(whereObj: any): Promise<BvAggCostanalysis[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvAggCostanalysis.findAll({
                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('origin_code')), 'origin_country'],['origin_code','id'],['origin','origin_name'],['shipment_origin_country','origin_country_name']],
            }).then((get: BvAggCostanalysis[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }



}