
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { HawbList} from "../entity/init-models";
// import Sequelize = require('sequelize');
import { Op, Sequelize } from 'sequelize';
import {  Transaction } from "sequelize/types";
import { Model } from 'sequelize';


export class HawbListRepository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    getModel(): any {
        return Model;
    }
    async get(whereObj: any): Promise<HawbList[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            
            HawbList.findAll({
                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('origin_country')), 'origin_country']],
            }).then((get: HawbList[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }

    async getHawb(whereObj: any, sort?:any ,transaction?: Transaction): Promise<HawbList[]> {
       
            return await new Promise((resolve, reject) => {
                HawbList.findAll({ where: whereObj,order: [[Sequelize.literal("hawb"), 'ASC']] 
                }).then((get: HawbList[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        

    }

 
}