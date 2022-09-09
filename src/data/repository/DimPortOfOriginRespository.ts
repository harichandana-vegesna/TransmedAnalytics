
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { DimPortofOrigin} from "../entity/init-models";
import Sequelize = require('sequelize');
import {  Transaction } from "sequelize/types";
import { Model } from 'sequelize';

export class DimPortOfOriginRespository extends Repository{
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }

    getModel(): any {
        return Model;
    }

    async get(whereObj: any): Promise<DimPortofOrigin[]> {
        return await new Promise((resolve, reject) => {
            this.logger.log("whereObj",whereObj)
            DimPortofOrigin.findAll({
                where: whereObj,attributes:[[Sequelize.fn('distinct', Sequelize.col('org')), 'origin_country'],['shipment_origin','origin_name'],['origin_country','origin_country_name']]
            }).then((get: DimPortofOrigin[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);   
                reject(error);
            });
        })
    }

    async create(obj: any, transaction?: Transaction): Promise<any> {
        return await new Promise((resolve, reject) => {
            this.getModel().create(obj, { transaction }).then((created: any) => {
                resolve(created);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        });
    }
}