
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { AggOtifrootcauses } from "../entity/init-models";
import Sequelize = require('sequelize');
import { Transaction } from "sequelize/types";
const { Op } = require("sequelize");
export class OtifRootCausesRepository extends Repository {
    private logger: Logger;
    constructor() {
        super();
        this.logger = DI.get(Logger)
    }


    async get(whereObj: any): Promise<AggOtifrootcauses[]> {
        whereObj = (whereObj == undefined && whereObj == null) ? {} : whereObj
        return await new Promise((resolve, reject) => {
            AggOtifrootcauses.findAll({
                where: whereObj,attributes:['year_number','standardized_otifrootcauses',[Sequelize.fn('sum', Sequelize.col('shipments')), 'shipments'],[Sequelize.literal('ROUND(((sum(annettime)/sum(totnetontime)) * 100),2)'),'gross_ontime']],group: ['year_number','standardized_otifrootcauses'],
            }).then((get: AggOtifrootcauses[]) => {
                resolve(get);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }
}