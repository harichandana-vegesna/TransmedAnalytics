import { Transaction } from "sequelize/types";
import { FsuDetails } from "../entity/FsuDetails";
import { Repository } from "./Repository";
import { Logger } from "../../logger/Logger";
import { DI } from "../../di/DIContainer";


export class FsuDetailsRepository extends Repository {
    private logger :Logger;
    constructor(){
        super();
        this.logger = DI.get(Logger)
    }
    async get(whereObj: any, sort?:any,limit?:number,offset?:number, attributes?:any ,transaction?: Transaction):Promise<any> {

        whereObj = (whereObj==undefined && whereObj == null)?{}:whereObj
        if(whereObj === {}){
            return await new Promise((resolve, reject) => {
                FsuDetails.findAll({ where: whereObj
                }).then((get: FsuDetails[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }else{
            return await new Promise((resolve, reject) => {
                FsuDetails.findAll({ where: whereObj,order: sort
                }).then((get: FsuDetails[]) => {
                    resolve(get);
                }).catch((error: any) => {
                    this.logger.error(error);
                    reject(error);
                });
            })
        }

    }
}