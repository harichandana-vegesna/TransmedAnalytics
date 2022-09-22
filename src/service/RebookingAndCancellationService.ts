import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { RebookingAndCancellationRepository } from "../data/repository/RebookingAndCancellationRepository"
import { QueryBuilder } from "../util/QueryBuilder";
const { Op } = require('sequelize');

import { any } from "bluebird";


export class RebookingAndCancellationService {
    private logger: Logger;
    private rebookingAndCancellationRepository: RebookingAndCancellationRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.rebookingAndCancellationRepository = DI.get(RebookingAndCancellationRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getRebookingAndCancellationData(originCountry?: any, monthNumber?: any, year?: any,shipperOrgId?:any,shipperAccountNumber?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (originCountry !== '') {
                    whereObj['origin'] = originCountry
                }
                if (shipperAccountNumber !== '') {
                    shipperAccountNumber = shipperAccountNumber.split(",")
                    whereObj['shipperAccountNumber'] = { [Op.in]: [shipperAccountNumber] }
                }
                if (monthNumber !== '') {
                    whereObj['month'] = monthNumber
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let attributes:any;
                attributes = ['month','hawb','mb','shipper_reference','origin','destination','airline','numof_rebookings_shipment','cost_avoidance','comments','year_number','shipment_origin_country', 'shipment_origin', 'shipment_destination', 'shipment_destination_country', 'origin_code',  'destination_code','parent_id','shipperAccountNumber']
                let rebookingAndCancellationData: any = await this.rebookingAndCancellationRepository.get(whereObj,attributes);
                return resolve({ "result": rebookingAndCancellationData})
            } catch (e) {
                reject(e)
            }
        })
    }
}