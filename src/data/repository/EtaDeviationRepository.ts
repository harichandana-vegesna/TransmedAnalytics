
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { BvShipmentEtaDeviation } from "../entity/init-models";
import { BvShipmentEtaDeviationNodate } from "../entity/init-models";
import { BvNewshipmentetadeviation } from "../entity/init-models";
import { BvNewshipmentetadeviationIntransit } from "../entity/init-models";
import { BvNewshipmentetadeviationDelivered } from "../entity/init-models";





import { Transaction } from "sequelize/types";
import Sequelize = require('sequelize');
const { Op } = require("sequelize");
export class EtaDeviationRepository extends Repository {
    private logger: Logger;
    constructor() {
        super();
        this.logger = DI.get(Logger)
    }


    async getEtaIntransitShipments(whereObj: any,attributes:any): Promise<BvNewshipmentetadeviationIntransit[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvNewshipmentetadeviationIntransit.findAll({
                where: whereObj , attributes:['origin_region',[Sequelize.fn('count', Sequelize.col('6hrsdeviation')), '<=6 hrs'],[Sequelize.fn('count', Sequelize.col('12hrsdeviation')), '12 hrs'],[Sequelize.fn('count', Sequelize.col('18hrsdeviation')), '18 hrs'],[Sequelize.fn('count', Sequelize.col('1daydeviation')), '1 day'],[Sequelize.fn('count', Sequelize.col('g1daydeviation')), '>=2 days'],[Sequelize.literal(`count(case when deviate_status=0 then deviate_status else NULL end)`),'On time']],group:['origin_region']
            }).then((get: BvNewshipmentetadeviationIntransit[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getEtaDeliveredGrpShipments(whereObj: any,attributes:any): Promise<BvNewshipmentetadeviationDelivered[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvNewshipmentetadeviationDelivered.findAll({
                where: whereObj , attributes:['origin_region',[Sequelize.fn('count', Sequelize.col('6hrsdeviation')), '<=6 hrs'],[Sequelize.fn('count', Sequelize.col('12hrsdeviation')), '12 hrs'],[Sequelize.fn('count', Sequelize.col('18hrsdeviation')), '18 hrs'],[Sequelize.fn('count', Sequelize.col('1daydeviation')), '1 day'],[Sequelize.fn('count', Sequelize.col('g1daydeviation')), '>=2 days'],[Sequelize.literal(`count(case when deviate_status=0 then deviate_status else NULL end)`),'On time']],group:['origin_region']
            }).then((get: BvNewshipmentetadeviationDelivered[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }
    async getEtaDeliveredShipments(whereObj: any,attributes:any): Promise<BvNewshipmentetadeviationDelivered[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvNewshipmentetadeviationDelivered.findAll({
                where: whereObj , attributes:[[Sequelize.fn('count', Sequelize.col('6hrsdeviation')), '<=6 hrs'],[Sequelize.fn('count', Sequelize.col('12hrsdeviation')), '12 hrs'],[Sequelize.fn('count', Sequelize.col('18hrsdeviation')), '18 hrs'],[Sequelize.fn('count', Sequelize.col('1daydeviation')), '1 day'],[Sequelize.fn('count', Sequelize.col('g1daydeviation')), '>=2 days'],[Sequelize.literal(`count(case when deviate_status=0 then deviate_status else NULL end)`),'On time']]
            }).then((get: BvNewshipmentetadeviationDelivered[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getEtaShipmentsDrillDown(whereObj: any,attributes:any): Promise<BvNewshipmentetadeviationIntransit[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvNewshipmentetadeviationIntransit.findAll({
                where: whereObj , attributes:attributes
            }).then((get: BvNewshipmentetadeviationIntransit[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getEtaDeliveredShipmentsDrillDown(whereObj: any,attributes:any): Promise<BvNewshipmentetadeviationDelivered[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvNewshipmentetadeviationDelivered.findAll({
                where: whereObj , attributes:attributes
            }).then((get: BvNewshipmentetadeviationDelivered[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }



    async getEtaSummary(whereObj: any,attributes:any): Promise<BvShipmentEtaDeviation[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvShipmentEtaDeviation.findAll({
                where: whereObj , attributes:['origin_code','destination_code',['origin','origin_name'],['shipment_destination','destination_name'],['origin_country','origin_country_name'], ['destination_country','destination_country_name'],[Sequelize.literal(`IFNULL(sum(noOfShipments),0)`),'noOfShipments'],[Sequelize.literal(`IFNULL(sum(hawb),0)`),'hawb'],[Sequelize.literal(`IFNULL(sum(etaDeviation_flag),0)`),'etaDeviation_flag'],[Sequelize.literal(`IFNULL(sum(totetaDeviation_flag),0)`),'totetaDeviation_flag'],[Sequelize.literal(`IFNULL(sum(totetaDeviation_flag),0)`),'totetaDeviation_flag'],[Sequelize.literal('ROUND(((sum(ifnull(`etaDeviation_flag`, 0)) / sum(ifnull(`totetaDeviation_flag`, 0))) * 100),0)'),'etaDeviation'],'shipper'],group:['origin_code','destination_code','shipper','origin','shipment_destination','origin_country','destination_country']
            }).then((get: BvShipmentEtaDeviation[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getEtaSummaryWithOutDate(whereObj: any,attributes:any): Promise<BvShipmentEtaDeviationNodate[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            BvShipmentEtaDeviationNodate.findAll({
                where: whereObj,attributes:attributes
            }).then((get: BvShipmentEtaDeviationNodate[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }



}