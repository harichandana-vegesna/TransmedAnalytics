import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { ImShipmentAnalyticsCostRepository } from "../data/repository/ImShipmentAnalyticsCostRepository"
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository"
import { EtaDeviationRepository } from "../data/repository/EtaDeviationRepository"



import { QueryBuilder } from "../util/QueryBuilder";
import { any } from "bluebird";
const { Op } = require('sequelize');


export class EtaDeviationService {
    private logger: Logger;
    private imShipmentAnalyticsCostRepository: ImShipmentAnalyticsCostRepository;
    private iMShipmentAnalyticsRepository: IMShipmentAnalyticsRepository;
    private etaDeviationRepository: EtaDeviationRepository

    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.imShipmentAnalyticsCostRepository = DI.get(ImShipmentAnalyticsCostRepository);
        this.iMShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
        this.etaDeviationRepository = DI.get(EtaDeviationRepository)

        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getEtaDeviationIntransitShipments(startDate: any, endDate: any, shipperOrgId: any,shipperAccountNumber:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let etaDetailsIntransit: any;
                let etaDetailsDelivered: any
                let intransitShipments: any = [];
                let deliveredShipments: any = [];
                //intransit records
                whereObj['shipper_org_group'] = shipperOrgId
                whereObj['shipment_status'] = 'INTRANSIT'
                if (shipperAccountNumber !== '') {
                    shipperAccountNumber = shipperAccountNumber.split(",")
                    whereObj['shipper'] = { [Op.in]: [shipperAccountNumber] }
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_date'] = { [Op.between]: [startDate, endDate] }
                }
                etaDetailsIntransit = await this.etaDeviationRepository.getEtaIntransitShipments(whereObj, attributes);
                if (etaDetailsIntransit.length > 0) {
                    for (let i = 0; i < etaDetailsIntransit.length; i++) {
                        let data: any = {};

                        let resultObj: any = {};
                        for (let etaKeys of Object.keys(etaDetailsIntransit[i].dataValues)) {
                            if (etaKeys != 'origin_region') {
                                let obj2: any = etaDetailsIntransit[i].dataValues;
                                data[etaKeys] = obj2[etaKeys]
                            }
                            else {
                                resultObj[etaKeys] = etaDetailsIntransit[i][etaKeys]
                            }
                        }
                        resultObj.data = [];
                        resultObj.data.push(data)
                        intransitShipments.push(resultObj)
                    }
                }

                //delivered records
                whereObj['shipper_org_group'] = shipperOrgId
                whereObj['shipment_status'] = 'DELIVERED'
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_date'] = { [Op.between]: [startDate, endDate] }
                }
                etaDetailsDelivered = await this.etaDeviationRepository.getEtaDeliveredGrpShipments(whereObj, attributes);
                if (etaDetailsDelivered.length > 0) {
                    for (let i = 0; i < etaDetailsDelivered.length; i++) {
                        let data: any = {};

                        let resultObj: any = {};
                        for (let etaKeys of Object.keys(etaDetailsDelivered[i].dataValues)) {
                            if (etaKeys != 'origin_region') {
                                let obj2: any = etaDetailsDelivered[i].dataValues;
                                data[etaKeys] = obj2[etaKeys]
                            }
                            else {
                                resultObj[etaKeys] = etaDetailsDelivered[i][etaKeys]
                            }
                        }
                        resultObj.data = [];
                        resultObj.data.push(data)
                        deliveredShipments.push(resultObj)
                    }
                }


                return resolve({ "intransitShipments": intransitShipments, "deliveredShipments": deliveredShipments })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getEtaDeviationDeliveredShipments(startDate: any, endDate: any, shipperOrgId: any,shipperAccountNumber:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let etaDetails: any;
                whereObj['shipper_org_group'] = shipperOrgId
                whereObj['shipment_status'] = 'DELIVERED'
                if (shipperAccountNumber !== '') {
                    shipperAccountNumber = shipperAccountNumber.split(",")
                    whereObj['shipper'] = { [Op.in]: [shipperAccountNumber] }
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_date'] = { [Op.between]: [startDate, endDate] }
                }
                etaDetails = await this.etaDeviationRepository.getEtaDeliveredShipments(whereObj, attributes);
                return resolve({ "result": etaDetails })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getEtaDeviationShipmentsDrillDown(startDate: any, endDate: any, shipperOrgId: any, shipmentStatus: any, originRegion: any, deviation6Hr: any, deviation12Hr: any, deviation18Hr: any, deviation1day: any, deviation2days: any, ontime: any,shipperAccountNumber:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let etaDetails: any;
                if (shipperAccountNumber !== '') {
                    shipperAccountNumber = shipperAccountNumber.split(",")
                    whereObj['shipper'] = { [Op.in]: [shipperAccountNumber] }
                }
                attributes = ['year_number', 'month', 'shipment_status', 'shipper', 'consignee', 'hawb', 'leg1_ata_date', 'leg2_ata_date', 'leg3_ata_date', 'leg4_ata_date', 'leg5_ata_date', 'parent_id', 'pickup', 'depart', 'dispath', 'custom_import', 'outfordelivery', 'delivered', 'carrier', 'origin_code', 'destination_code', 'shipper_reference', 'smode_of_transport', ['origin', 'origin_name'], ['shipment_destination', 'destination_name'], ['shipment_origin_country', 'origin_country_name'], ['shipment_destination_country', 'destination_country_name']]
                whereObj['shipper_org_group'] = shipperOrgId
                if (shipmentStatus !== '') {
                    whereObj['shipment_status'] = shipmentStatus
                }
                if (originRegion !== '') {
                    whereObj['origin_region'] = originRegion
                }
                if (deviation6Hr !== '') {
                    whereObj['6hrsdeviation'] = { [Op.ne]: null }
                }
                if (deviation12Hr !== '') {
                    whereObj['12hrsdeviation'] = { [Op.ne]: null }
                }
                if (deviation18Hr !== '') {
                    whereObj['18hrsdeviation'] = { [Op.ne]: null }
                }
                if (deviation1day !== '') {
                    whereObj['1daydeviation'] = { [Op.ne]: null }
                }
                if (deviation2days !== '') {
                    whereObj['g1daydeviation'] = { [Op.ne]: null }
                }
                if (ontime !== '') {
                    whereObj['deviate_status'] = 0
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    this.logger.log("startDate", startDate)
                    this.logger.log("endDate", endDate)

                    whereObj['shipment_date'] = { [Op.between]: [startDate, endDate] }
                }
                if (shipmentStatus.toLowerCase() === 'intransit') {
                    etaDetails = await this.etaDeviationRepository.getEtaShipmentsDrillDown(whereObj, attributes)
                }
                else {
                    etaDetails = await this.etaDeviationRepository.getEtaDeliveredShipmentsDrillDown(whereObj, attributes)
                }
                for (let i = 0; i < etaDetails.length; i++) {

                    etaDetails[i].dataValues.leg1_ata_date = await this.getDateFormat(etaDetails[i].dataValues.leg1_ata_date)
                    etaDetails[i].dataValues.pickup = await this.getDateFormat(etaDetails[i].dataValues.pickup)
                    etaDetails[i].dataValues.depart = await this.getDateFormat(etaDetails[i].dataValues.depart)
                    etaDetails[i].dataValues.dispath = await this.getDateFormat(etaDetails[i].dataValues.dispath)
                    etaDetails[i].dataValues.outfordelivery = await this.getDateFormat(etaDetails[i].dataValues.outfordelivery)
                    etaDetails[i].dataValues.custom_import = await this.getDateFormat(etaDetails[i].dataValues.custom_import)
                    etaDetails[i].dataValues.delivered = await this.getDateFormat(etaDetails[i].dataValues.delivered)


                }
                return resolve({ "result": etaDetails })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getDateFormat(date: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                if (date !== null) {
                    let year = date.getFullYear()
                    let month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
                    let date1 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
                    let hours = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours()
                    let minutes = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()
                    let seconds = date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds()
                    let finalDate = year + "-" + month + "-" + date1 + " " + hours + ":" + minutes + ":" + seconds;
                    return resolve(finalDate)
                }
                else {
                    return resolve("")
                }

            } catch (e) {
                reject(e)
            }
        })
    }
    async getEtaDeviationSummary(origin: any, accounts: any, startDate: any, endDate: any, shipperOrgId: any,shipperAccountNumber?:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let etaDetails: any;
                attributes = ['origin_code', 'destination_code', 'noOfShipments', 'hawb', 'etaDeviation_flag', 'totetaDeviation_flag', 'etaDeviation', 'shipper', ['origin', 'origin_name'], ['shipment_destination', 'destination_name'], ['origin_country', 'origin_country_name'], ['destination_country', 'destination_country_name']]
                if (startDate !== '' && endDate !== '') {
                    if (origin !== '') {
                        whereObj['origin_code'] = origin
                    }
                    else if (accounts !== '') {
                        accounts = accounts.split(",")
                        whereObj['shipper'] = accounts
                    }
                    whereObj['shipper_org_group'] = shipperOrgId
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                    whereObj['etaDeviation'] = { [Op.gt]: 0 }
                    etaDetails = await this.etaDeviationRepository.getEtaSummary(whereObj, attributes);
                }
                else {
                    if (origin !== '') {
                        whereObj['origin_code'] = origin
                    }
                    if (accounts !== '') {
                        accounts = accounts.split(",")
                        whereObj['shipper'] = accounts
                    }
                    whereObj['etaDeviation'] = { [Op.gt]: 0 }
                    whereObj['shipper_org_group'] = shipperOrgId
                    etaDetails = await this.etaDeviationRepository.getEtaSummaryWithOutDate(whereObj, attributes);
                }
                return resolve({ "result": etaDetails })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getEtaDeviationDetails(destination: any, origin: any, shipperOrgId: any, accounts: any, startDate: any, endDate: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let directShipments: any = [];
                let transShipments: any = [];
                if (accounts !== '') {
                    accounts = accounts.split(",")
                    whereObj['shipper'] = { [Op.in]: [accounts] }
                }
                if (destination !== '') {
                    whereObj['destination_code'] = destination
                }
                if (origin !== '') {
                    whereObj['origin_code'] = origin
                }
                if (startDate !== '' && endDate !== '') {
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipment_status'] = 'DELIVERED'
                whereObj['shipper_org_group'] = shipperOrgId
                attributes = ['destination_code', 'shipper', 'consginee_name', 'sshipment_id', 'hawb', 'parent_id', 'leg1_destination_country', 'leg1_ata_date', 'leg2_ata_date', 'leg3_ata_date', 'leg4_ata_date', 'leg5_ata_date', 'smode_of_transport', 'incoterms', 'carrier', 'shipment_confirmed_date', 'planned_pickupdate', 'actual_pickupdate', 'actual_timeofdispatch', 'shipment_eta', 'shipper_reference', 'shipment_status', ['deviation_status', 'deviation'], ['origin', 'origin_name'], ['shipment_destination', 'destination_name'], ['shipment_origin_country', 'origin_country_name'], ['shipment_destination_country', 'destination_country_name'],'etacount']
                let etaDetails: any = await this.imShipmentAnalyticsCostRepository.getEtaDetails(whereObj, attributes);
                console.log("etadetails", etaDetails)
                for (let i = 0; i < etaDetails.length; i++) {
                    if (etaDetails[i].dataValues.leg1_destination_country === null || etaDetails[i].dataValues.leg1_destination_country === 'null') {
                        etaDetails[i].dataValues.shipment_confirmed_date = await this.getDateFormat(etaDetails[i].dataValues.shipment_confirmed_date)
                        etaDetails[i].dataValues.actual_timeofdispatch = await this.getDateFormat(etaDetails[i].dataValues.actual_timeofdispatch)
                        etaDetails[i].dataValues.actual_pickupdate = await this.getDateFormat(etaDetails[i].dataValues.actual_pickupdate)

                        etaDetails[i].dataValues.shipment_eta = await this.getDateFormat(new Date(etaDetails[i].dataValues.shipment_eta))
                        directShipments.push(etaDetails[i])
                    }
                    else {
                        etaDetails[i].dataValues.shipment_confirmed_date = await this.getDateFormat(etaDetails[i].dataValues.shipment_confirmed_date)
                        etaDetails[i].dataValues.actual_timeofdispatch = await this.getDateFormat(etaDetails[i].dataValues.actual_timeofdispatch)
                        etaDetails[i].dataValues.actual_pickupdate = await this.getDateFormat(etaDetails[i].dataValues.actual_pickupdate)
                        etaDetails[i].dataValues.shipment_eta = await this.getDateFormat(new Date(etaDetails[i].dataValues.shipment_eta))
                        transShipments.push(etaDetails[i])
                    }
                }
                return resolve({ "transShipments": transShipments, "directShipments": directShipments })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getParentDeviationDetails(parent_id: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                // if (parent_id !== '') {
                //     whereObj['parent_id'] = parent_id
                // }
                // whereObj['shipper_org_group'] = shipperOrgId
                attributes = ['maxid','hawb','parent_id','event_code','event_desc','event_type','shipment_eta','event_date','shipment_status','lspOrgId','shipper_org_group','shipperAccountNumber']
                let etaDetails: any = await this.imShipmentAnalyticsCostRepository.getParentEtaDeviationDetails(parent_id);
                //console.log("etaDetailsssss2222",etaDetails.status.message.length)
                let etaDetails1 = etaDetails.status.message
                for (let i = 0; i < etaDetails1.length; i++) {
                    //console.log("etaDetails1[i]",etaDetails1[i])
                    etaDetails1[i].shipment_eta = await this.getDateFormat(etaDetails1[i].shipment_eta)
                }
                console.log("etadetails",etaDetails1)
                return resolve(etaDetails1)
            } catch (e) {
                reject(e)
            }
        })
    }
    async getOriginCodes(shipperOrgId: any,shipperAccountNumber:any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.iMShipmentAnalyticsRepository.getOriginCodes(whereObj);
                imShipmentAnalyticsCost.map((v: { accounts: any; })=>v.accounts)

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getEtaOriginCodes(shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.iMShipmentAnalyticsRepository.getEtaOriginCodes(whereObj);

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getDestinationCodes(shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.iMShipmentAnalyticsRepository.getDestinationCodes(whereObj);

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getEtaAllAccounts(shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.iMShipmentAnalyticsRepository.getEtaAllAccounts(whereObj);

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }


}
