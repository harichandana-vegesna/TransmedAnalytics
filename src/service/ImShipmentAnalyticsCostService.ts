import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { ImShipmentAnalyticsCostRepository } from "../data/repository/ImShipmentAnalyticsCostRepository"
import { ShipmentAnalyticsCostRepository } from "../data/repository/ShipmentAnalyticsCostRepository"
import { RegionMasterRepository } from "../data/repository/RegionMasterRepository"
import Sequelize = require('sequelize');
import { QueryBuilder } from "../util/QueryBuilder";
import { any } from "bluebird";
import dateFormat from "dateformat";
import { DATE, DATEONLY } from "sequelize";
const { Op } = require('sequelize');
const { DataTypes } = require("sequelize");


export class ImShipmentAnalyticsCostService {
    private logger: Logger;
    private imShipmentAnalyticsCostRepository: ImShipmentAnalyticsCostRepository;
    private shipmentAnalyticsCostRepository: ShipmentAnalyticsCostRepository;
    private regionMasterRepository: RegionMasterRepository

    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.imShipmentAnalyticsCostRepository = DI.get(ImShipmentAnalyticsCostRepository);
        this.shipmentAnalyticsCostRepository = DI.get(ShipmentAnalyticsCostRepository);
        this.regionMasterRepository = DI.get(RegionMasterRepository)
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async getShipmentCostAnalysis(originCode: any, destinationcode: any, startDate: any, endDate: any, accounts: any, forwarder: any, shipperOrgId: any, modeOfTransport: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                attributes = ['consignee', 'shipper_name', ['sshipment_id', 'shipment_id'], ['shipment_id', 'hawb'], 'mode_of_transport', 'inco_terms', 'carrier', 'shipment_confirmed_date', 'shipment_pickupdate', 'shipment_status', 'chargeable_weight', 'calc_total_price_with_rate', 'number_of_pieces', 'shipper', 'shipper_reference', 'parent_id']
                whereObj['origin_code'] = originCode
                whereObj['destination_code'] = destinationcode
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                if (accounts !== '') {
                    whereObj['shipper'] = accounts
                }
                if (forwarder !== '') {
                    whereObj['lspOrgName'] = forwarder
                }
                whereObj['smode_of_transport'] = modeOfTransport
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.get(whereObj, attributes);

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAggShipmentCostAnalysis(origin: any, destination: any, startDate: any, endDate: any, accounts: any, forwarder: any, shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        let obj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let totalShipmentsCost: any;
                if (origin !== '') {
                    origin = origin.split(",")
                    whereObj['origin_code'] = { [Op.in]: [origin] }
                }
                if (destination !== '') {
                    destination = destination.split(",")
                    whereObj['destination_code'] = { [Op.in]: [destination] }
                }
                if (accounts !== '') {
                    whereObj['shipper'] = accounts
                }
                if (forwarder !== '') {
                    whereObj['lspOrgName'] = forwarder
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.shipmentAnalyticsCostRepository.get(whereObj);
                if (imShipmentAnalyticsCost.length > 0) {
                    // let totalShipmentsCost = imShipmentAnalyticsCost.filter((x: { totalcost: null; })=>x.totalcost !== null).map((totalShipmentCost: { totalcost: any; }) => totalShipmentCost.totalcost).reduce((a: any, acc: any) => parseFloat(a) + parseFloat(acc))
                    let totalShipments = imShipmentAnalyticsCost.filter((x: { totalcost: null; }) => x.totalcost !== null).map((totalShipmentCost: { totalcost: any; }) => totalShipmentCost.totalcost)
                    if (totalShipments.length > 0) {
                        totalShipmentsCost = totalShipments.reduce((a: any, acc: any) => parseFloat(a) + parseFloat(acc))
                        obj['totalShipmentsCost'] = parseFloat(totalShipmentsCost).toFixed(2)
                    }
                    else {
                        obj['totalShipmentsCost'] = 0
                    }
                    return resolve({ "result": imShipmentAnalyticsCost, "totals": obj })
                }
                else {
                    return resolve({ "result": imShipmentAnalyticsCost, "totals": obj })
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAggShipmentCostAnalysisGraph(origin: any, destination: any, startDate: any, endDate: any, accounts: any, forwarder: any, shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                //attributes = ['origin_code', 'destination_code', 'shipper', 'lspOrgName', 'month', 'noofshipments', 'noofhawbs', 'totalcost', 'year'];
                if (origin !== '') {
                    origin = origin.split(",")
                    whereObj['origin_code'] = { [Op.in]: [origin] }
                }
                if (destination !== '') {
                    destination = destination.split(",")
                    whereObj['destination_code'] = { [Op.in]: [destination] }
                }
                if (accounts !== '') {
                    whereObj['shipper'] = accounts
                }
                if (forwarder !== '') {
                    whereObj['lspOrgName'] = forwarder
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.shipmentAnalyticsCostRepository.getGrpShipments(whereObj, attributes);
                this.logger.log("imShipmentAnalyticsCost", imShipmentAnalyticsCost)
                let months: any = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let sorter: any = (a: { year_number: number; month: any; }, b: { year_number: number; month: any; }) => { if (a.year_number !== b.year_number) { return a.year_number - b.year_number; } else { return months.indexOf(a.month) - months.indexOf(b.month); }; };
                imShipmentAnalyticsCost.sort(sorter);
                this.logger.log("imShipmentAnalyticsCost", imShipmentAnalyticsCost)

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getRegionalCostAnalysis(originRegion: any, startDate: any, endDate: any, flag: any, shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let regions: any = []
                if (originRegion !== '') {
                    whereObj['origin_region'] = originRegion
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.getRegionalCostAnalysis(whereObj, flag);
                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getRegionalCostAnalysisGrp(originRegion: any, startDate: any, endDate: any, flag: any, shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {

                if (originRegion !== '') {
                    whereObj['origin_region'] = originRegion
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.getRegionalCostAnalysisGrp(whereObj, flag);
                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getRegionalCostAnalysisTable(originRegion: any, startDate: any, endDate: any, flag: any, shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {

                if (originRegion !== '') {
                    whereObj['origin_region'] = originRegion
                }
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.getRegionalCostAnalysisTable(whereObj, flag);
                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }
    async getRegionalCostAnalysisDetailView(origin: any, region: any, startDate: any, endDate: any, shipperOrgId: any, shipment_total_currency: any, mode_of_transport: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                attributes = ['consginee_name', 'shipper', ['sshipment_id', 'shipment_id'], ['shipment_id', 'hawb'], 'mode_of_transport', 'inco_terms', 'carrier', 'shipment_confirmed_date', 'shipment_pickupdate', 'chargeable_weight', 'shipment_status', 'calc_total_price_with_rate', 'number_of_pieces', 'shipper_reference', 'parent_id']
                whereObj['destination_origin'] = region
                whereObj['origin_region'] = origin
                whereObj['mode_of_transport'] = mode_of_transport
                if (startDate !== '' && endDate !== '') {
                    startDate = new Date(startDate)
                    endDate = new Date(endDate)
                    whereObj['shipment_confirmed_date'] = { [Op.between]: [startDate, endDate] }
                }
                whereObj['shipment_total_currency'] = shipment_total_currency
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.getRegionCostAnalysisDetails(whereObj, attributes);
                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAllRegions(shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                whereObj['shipper_org_group'] = shipperOrgId
                let regions: any = await this.imShipmentAnalyticsCostRepository.getRegions(whereObj);

                return resolve({ "result": regions })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAllAccounts(shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.getAllAccounts(whereObj);

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAllForwarders(shipperOrgId: any): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                whereObj['shipper_org_group'] = shipperOrgId
                let imShipmentAnalyticsCost: any = await this.imShipmentAnalyticsCostRepository.getAllForwarders(whereObj);

                return resolve({ "result": imShipmentAnalyticsCost })
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAllRegionsMap(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;
                let regions: any = await this.regionMasterRepository.get(whereObj);

                return resolve({ "result": regions })
            } catch (e) {
                reject(e)
            }
        })
    }
}