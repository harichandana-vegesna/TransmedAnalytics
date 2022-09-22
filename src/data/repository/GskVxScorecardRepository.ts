
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { AggGskvxscorecard } from "../entity/init-models";
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
import Sequelize = require('sequelize');
export class GskVxScorecardRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    

    async get(whereObj: any, sort?:any,limit?:number,offset?:number, attributes?:any ,transaction?: Transaction): Promise<AggGskvxscorecard[]> {
        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
        if(attributes != undefined && attributes != null && attributes.length>0){
            return await new Promise((resolve, reject) => {
                AggGskvxscorecard.findAll({ where: whereObj,order: sort,limit:limit,offset:offset,attributes:attributes
                }).then((get: AggGskvxscorecard[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }else{
            return await new Promise((resolve, reject) => {
                AggGskvxscorecard.findAll({ where: whereObj,order: sort
                }).then((get: AggGskvxscorecard[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }

    }

    async getDetailsByMonth(whereObj: any, sort?:any,limit?:number,offset?:number, attributes?:any ,transaction?: Transaction): Promise<AggGskvxscorecard[]> {
        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
        // if(attributes != undefined && attributes != null && attributes.length>0){
            return await new Promise((resolve, reject) => {
                this.logger.log("WHereObj---->",whereObj)
                AggGskvxscorecard.findAll({ where: whereObj,attributes:['year_number','modeof_transport','month','year_month','month_number',[Sequelize.fn('sum', Sequelize.col('shipments')), 'shipments'],
                [Sequelize.fn('sum', Sequelize.col('rebookingdhl')), 'rebookingdhl'],[Sequelize.fn('sum', Sequelize.col('rebookinggsk')), 'rebookinggsk'],[Sequelize.literal('sum(`reporting`)/count(month)'),'reporting'],[Sequelize.literal('sum(`language`)/count(month)'),'language'],[Sequelize.literal('sum(`complaints`)/count(month)'),'complaints'],[Sequelize.literal('sum(`accuracy_document`)/count(month)'),'accuracy_document'],[Sequelize.literal('sum(`grass_ontime`)/count(month)'),'grass_ontime'],[Sequelize.literal('sum(`netontime`)/count(month)'),'netontime'],[Sequelize.literal('sum(`infull`)/count(month)'),'infull'],[Sequelize.literal('sum(`damage`)/count(month)'),'damage'],[Sequelize.literal('sum(`coldchain`)/count(month)'),'coldchain'],[Sequelize.literal('sum(`nofreeze`)/count(month)'),'nofreeze'],[Sequelize.literal('sum(`pickup`)/count(month)'),'pickup'],[Sequelize.literal('sum(`deviation_management`)/count(month)'),'deviation_management'],'shipper_org_group','lsporgid'],group: ['year_number','modeof_transport','month','year_month','month_number','shipper_org_group','lsporgid']
                }).then((get: AggGskvxscorecard[]) => {
                    this.logger.log("get",get)
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        // }else{
        //     return await new Promise((resolve, reject) => {
        //         AggGskvxscorecard.findAll({ where: whereObj,order: sort
        //         }).then((get: AggGskvxscorecard[]) => {
        //             resolve(get);
        //         }).catch((error: any) => {
        //             this.logger.error(error);
        //             reject(error);
        //         });
        //     })
        // }

    }

    async getListOfOriginByMonth(whereObj: any, sort?:any,limit?:number,offset?:number, attributes?:any ,transaction?: Transaction): Promise<AggGskvxscorecard[]> {
        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
            return await new Promise((resolve, reject) => {
                this.logger.log("WHereObj---->",whereObj)
                AggGskvxscorecard.findAll({ where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('origin_country')), 'origin_country'],['shipment_origin','origin_name'],['shipment_origin_country','origin_country_name'],'year_number','month']
                }).then((get: AggGskvxscorecard[]) => {
                    this.logger.log("get",get)
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })

    }

    async getAll(): Promise<AggGskvxscorecard[]> {
            return await new Promise((resolve, reject) => {
                AggGskvxscorecard.findAll({
                }).then((get: AggGskvxscorecard[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })

    }


}