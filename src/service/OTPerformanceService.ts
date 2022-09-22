import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { QueryBuilder } from "../util/QueryBuilder";
import { OTPerformanceRepository } from "../data/repository/OTPerformanceRepository";
const { Op } = require('sequelize');

export class OTPerformanceService {
    private logger: Logger;
    private oTPerformanceRepository: OTPerformanceRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.oTPerformanceRepository = DI.get(OTPerformanceRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getOtPerformance(originCountry?: any, startDate?: any, endDate?: any, shipperOrgId?: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let obj: any = {};
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_creation_date_time'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let otPerformanceData: any = await this.oTPerformanceRepository.get(whereObj);
                let months: any = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let sorter:any = (a: { year_number: number; month: any; }, b: { year_number: number; month: any; }) => { if (a.year_number !== b.year_number) { return a.year_number - b.year_number; } else { return months.indexOf(a.month) - months.indexOf(b.month); }; };
                otPerformanceData.sort(sorter);
                this.logger.log("otperformance",otPerformanceData)
                //let data: any = otPerformanceData.sort((a: any, b: any) => { return months.indexOf(a.month) - months.indexOf(b.month) })
                return resolve(otPerformanceData)
            } catch (e) {
                reject(e)
            }
        })
    }

}