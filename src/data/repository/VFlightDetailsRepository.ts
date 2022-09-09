import { VFlightDetails } from "../entity/init-models";
import { Transaction } from "sequelize/types";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";
import { Repository } from "./Repository";


export class VFlightDetailsRepository extends Repository {
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }
    async getLatest(whereObj: any, attributes?: any[], transaction?: Transaction):Promise<any> {

        return await new Promise((resolve, reject) => {
            VFlightDetails.findOne({
                where: whereObj,
                order: [['updatedAt', 'DESC']],
                transaction
            }).then((item:any) => {
                resolve(item!);
            }).catch((error: any) => {
                this.logger.error(error);
                reject(error);
            });
        })
    }
}