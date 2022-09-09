import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { LaneoverviewRepository } from "../data/repository/LaneoverviewRepository"
const { Op } = require('sequelize');

import { QueryBuilder } from "../util/QueryBuilder";


export class LaneoverviewService {
    private logger: Logger;
    private laneoverviewRepository: LaneoverviewRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.laneoverviewRepository = DI.get(LaneoverviewRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getLaneoverview(month?: any,sort?: any, colSearch?: any,shipperOrgId?:any,year?:any,shipperAccountNumber?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let sortArrayOfArrays: any = [];
                let colFilterObj: any;
                let obj: any = {};
                let totalRecordsCount: any;
                //Building a sort Object
                sortArrayOfArrays = this.queryBuilder.buildSortObj(sort);
                if (shipperAccountNumber !== '') {
                    shipperAccountNumber = shipperAccountNumber.split(",")
                    whereObj['shipperAccountNumber'] = { [Op.in]: [shipperAccountNumber] }
                }
                if (month !== '') {
                    whereObj['month'] = month
                }
                if (year !== '') {
                    whereObj['year_number'] = year
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let laneoverviewData: any = await this.laneoverviewRepository.get(whereObj, sortArrayOfArrays);
                if (laneoverviewData.length > 0) {
                    totalRecordsCount = laneoverviewData.length;
                    let totalShipments = laneoverviewData.map((totalShipment: { totshipments: any; }) => totalShipment.totshipments).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalShipments'] = totalShipments
                    let totalChargeableWeight = laneoverviewData.map((totalChargeableWeight: { totchargeable_weight: any; }) => totalChargeableWeight.totchargeable_weight).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalChargeableWeight'] = totalChargeableWeight
                    let totalOntimePerfomence = laneoverviewData.map((totalOntimePerfomence: { ontime_perfomence: any; }) => totalOntimePerfomence.ontime_perfomence).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalOntimePerfomence'] = (totalOntimePerfomence / laneoverviewData.length).toFixed(2)
                    let totalInfullPerfomence = laneoverviewData.map((totalInfullPerfomence: { infull_perfomence: any; }) => totalInfullPerfomence.infull_perfomence).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalInfullPerfomence'] = (totalInfullPerfomence / laneoverviewData.length).toFixed(2)
                    let totalrebooked = laneoverviewData.map((totalrebooked: { rebooked: any; }) => totalrebooked.rebooked).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalrebooked'] = totalrebooked
                    let totalIntact = laneoverviewData.map((totalIntact: { intact: any; }) => totalIntact.intact).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalIntact'] = totalIntact
                    let totalColdChain = laneoverviewData.map((totalColdChain: { cold_chain: any; }) => totalColdChain.cold_chain).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalColdChain'] = totalColdChain
                    let totalFrozen = laneoverviewData.map((totalFrozen: { frozen: any; }) => totalFrozen.frozen).reduce((a: any, acc: any) => parseInt(a) + parseInt(acc))
                    obj['totalFrozen'] = totalFrozen
                
                }
                return resolve({ "result": laneoverviewData, "totals": obj, "TotalCount": totalRecordsCount })
            } catch (e) {
                reject(e)
            }
        })
    }
}