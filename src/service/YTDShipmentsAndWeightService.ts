import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { YTDShipmentWeightsRespository } from "../data/repository/YTDShipmentWeightsRespository"
import { ImShipmentAnalyticsCostRepository } from "../data/repository/ImShipmentAnalyticsCostRepository"
import { EtaDeviationService } from "./EtaDeviationService";

const { Op } = require('sequelize');



export class YTDShipmentsAndWeightService {
    private logger: Logger;
    private etaDeviationService:EtaDeviationService;
    private yTDShipmentWeightsRespository: YTDShipmentWeightsRespository
    private imShipmentAnalyticsCostRepository:ImShipmentAnalyticsCostRepository
    constructor() {
        this.logger = DI.get(Logger);
        this.etaDeviationService  = DI.get(EtaDeviationService)
        this.yTDShipmentWeightsRespository = DI.get(YTDShipmentWeightsRespository)
        this.imShipmentAnalyticsCostRepository = DI.get(ImShipmentAnalyticsCostRepository)
    }

    async getYTDShipmentsAndWeight(originCountry?: any, startDate?: any, endDate?: any,shipperOrgId?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_creation_date_time'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let ytdShipmentsAndWeights: any = await this.yTDShipmentWeightsRespository.get(whereObj);
                let months: any = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let sorter:any = (a: { year_number: number; month: any; }, b: { year_number: number; month: any; }) => { if (a.year_number !== b.year_number) { return a.year_number - b.year_number; } else { return months.indexOf(a.month) - months.indexOf(b.month); }; };
                ytdShipmentsAndWeights.sort(sorter);
                //let data: any = ytdShipmentsAndWeights.sort((a: any, b: any) => { return months.indexOf(a.month) - months.indexOf(b.month) })
                return resolve(ytdShipmentsAndWeights)
            } catch (e) {
                reject(e)
            }
        })
    }


    async getShipmentsByMonthAndYr(startDate?: any, endDate?: any,originCountry?:any,shipperOrgId?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_creation_date_time'] = { [Op.between]: [startDate, endDate] }
                }
                if (originCountry !== '') {
                    whereObj['origin_country'] = originCountry
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let ytdShipmentsAndWeights: any = await this.yTDShipmentWeightsRespository.getShipmentsByMonthAndYear(whereObj);
                return resolve(ytdShipmentsAndWeights)
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAstroYTDShipmentsAndWeight(originCountry?: any, startDate?: any, endDate?: any,shipperOrgId?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (originCountry !== '') {
                    whereObj['origin_code'] = originCountry
                }
                // if (month !== '') {
                //     whereObj['month'] = month
                // }
                // if (year !== '') {
                //     whereObj['year_number'] = year
                // }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let ytdShipmentsAndWeights: any = await this.yTDShipmentWeightsRespository.getAstroYtdShipments(whereObj);
                let months: any = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let sorter:any = (a: { year_number: number; month: any; }, b: { year_number: number; month: any; }) => { if (a.year_number !== b.year_number) { return a.year_number - b.year_number; } else { return months.indexOf(a.month) - months.indexOf(b.month); }; };
                ytdShipmentsAndWeights.sort(sorter);
                //let data: any = ytdShipmentsAndWeights.sort((a: any, b: any) => { return months.indexOf(a.month) - months.indexOf(b.month) })
                return resolve(ytdShipmentsAndWeights)
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAstroShipmentsByMonthAndYr(startDate?: any, endDate?: any,originCountry?:any,shipperOrgId?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                if (originCountry !== '') {
                    whereObj['origin_code'] = originCountry
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let ytdShipmentsAndWeights: any = await this.yTDShipmentWeightsRespository.getAstroShipmentsByMonthAndYear(whereObj);
                return resolve(ytdShipmentsAndWeights)
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAstroShipmentsByOrigin(originCode:any,destinationcode:any,shipperOrgId:any,startDate:any,endDate:any,lspOrgId:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes:any;
                attributes=['consignee','shipper_name',['sshipment_id','shipment_id'],['shipment_id','hawb'],'mode_of_transport','inco_terms','carrier','shipment_confirmed_date','shipment_pickupdate','shipment_status','chargeable_weight','calc_total_price_with_rate','number_of_pieces','shipper','shipper_reference','parent_id']
                whereObj['origin_code'] = originCode
                whereObj['destination_code'] = destinationcode
                whereObj['shipper_org_group'] = shipperOrgId
                whereObj['lspOrgId'] = lspOrgId
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.get(whereObj,attributes);
                for(let i=0;i<imShipmentAnalyticsCost.length ; i++){
                    imShipmentAnalyticsCost[i].dataValues.shipment_confirmed_date = await this.etaDeviationService.getDateFormat(imShipmentAnalyticsCost[i].dataValues.shipment_confirmed_date)
                    imShipmentAnalyticsCost[i].dataValues.shipment_pickupdate = await this.etaDeviationService.getDateFormat(imShipmentAnalyticsCost[i].dataValues.shipment_pickupdate)
                }
                console.log("imShipmentAnalyticsCost",imShipmentAnalyticsCost)
                return resolve({ "result": imShipmentAnalyticsCost})
            } catch (e) {
                reject(e)
            }
        })
    }

    async getShipmentsByOrigin(originCode:any,destinationcode:any,shipperOrgId:any,startDate:any,endDate:any,lspOrgId:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes:any;
                attributes=['Consignee_name','shipper_name','shipment_id','hawb','modeof_transport','inco_terms','carrier','shipment_confirmed_date','shipment_pickupdate','shipment_status','chargeable_weight','total_pieces','shipper','parent_id']
                whereObj['origin_code'] = originCode
                whereObj['destination_code'] = destinationcode
                whereObj['lsporgid'] = lspOrgId
                whereObj['shipper_org_group'] = shipperOrgId
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.getYtdShipmentByOrigin(whereObj,attributes);

                return resolve({ "result": imShipmentAnalyticsCost})
            } catch (e) {
                reject(e)
            }
        })
    }

}