import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository"
import { QueryBuilder } from "../util/QueryBuilder";
import { any } from "bluebird";
import { Op } from "sequelize";

var request = require('request');

export class CronService {
    private logger: Logger;
    private imShipmentAnalyticsRepository: IMShipmentAnalyticsRepository;
    private queryBuilder: QueryBuilder;
    constructor() {
        this.logger = DI.get(Logger);
        this.imShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
        this.queryBuilder = DI.get(QueryBuilder);
    }

    async gskCron(): Promise<any> {
        let whereObj: any = {};
        let whereObj1: any = {};
        return new Promise(async (resolve, reject) => {
            try {
                let attributes: any;

                // whereObj['shipment_status'] = process.env.SHIPPER_STATUS
                whereObj['shipper_org_group'] = process.env.SHIPPER_ORG_GROUP
                // whereObj['shipment_status'] = 'Delivered'
                // whereObj['shipper_org_group'] = 'GSK'
                whereObj['hawb'] = {[Op.ne]:null}
                // whereObj['status'] = {[Op.eq]:null}
                let shipmentDeliveredData: any = await this.imShipmentAnalyticsRepository.getDeliveriedOnTimeRecords(whereObj);
                this.logger.log("shipmentDeliveredData",shipmentDeliveredData)
                if (shipmentDeliveredData.length > 0) {
                    for (let data of shipmentDeliveredData) {
                        this.logger.log("ship_tracking_num",data.hawb)
                        await this.imShipmentAnalyticsRepository.spImMainDimension(data.hawb)
                        await this.imShipmentAnalyticsRepository.spImMainFactOpeartional(data.hawb)
                        // this.logger.log("data.ship_tracking_num",data.ship_tracking_num)
                        // whereObj1['ship_tracking_num'] = data.ship_tracking_num
                        // let obj: any = {};
                        // obj = {
                        //     'status':'PENDING'
                        // }
                        // await this.imShipmentAnalyticsRepository.update(whereObj1,obj)

                    }
                    await this.imShipmentAnalyticsRepository.spmainAggregation();
                    return resolve({ status: { code: 'SUCCESS', message: "Created Suceessfully" } })
                }
                else {
                    return resolve({ status: { code: 'SUCCESS', message: "No Delivered Records Found" } })
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    async kafkaNodeSch(): Promise<any> {
        var getToken = {
            url: process.env.POST_URL,
            method: 'POST',
            json: true,
            header: {
                "Content-Type": "application/json"
            },
            body: {
                "appkey": process.env.APP_KEY,
                "email": process.env.EMAIL_ID
            }
        };
        request(getToken, (error: any, response: any, body: any) => {
            if (error) {
                console.log("Failed");
            } else {
                console.log("Success", response.body.data.accessToken);
                var msgType = process.env.PUBLISH_MSG_TYPE?.split(", ");
                this.logger.log("msgType after split", msgType)
                var length = msgType?.length
                this.logger.log("length", length)
                for (var i = 0; i < msgType?.length!; i++) {
                    this.logger.log("msgtype", msgType![i])
                    var Options = {
                        method: 'GET',
                        json: true,
                        url: process.env.GET_URL,
                        headers: {
                            "Authorization": "Bearer " + response.body.data.accessToken
                        },
                        body: {
                            "publishMsgType": msgType![i]
                        }
                    };

                    request(Options, function (error: any, response: any, body: any) {
                        if (error) {
                            console.log("Failed");
                        } else {
                            console.log("Success", response.body);
                        }
                    });
                }
            }
        });
    }
    async aggregationCron(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                await this.imShipmentAnalyticsRepository.spAggOtifRootCause();
                await this.imShipmentAnalyticsRepository.spAggGrossNetOtPerformance();
                await this.imShipmentAnalyticsRepository.spAggGskVsScorecard();
                await this.imShipmentAnalyticsRepository.spAggYtdShipmentWeight();
                await this.imShipmentAnalyticsRepository.spAggLaneOverview();
                await this.imShipmentAnalyticsRepository.spAggAirLinePerformance();
                return resolve({ status: { code: 'SUCCESS', message: "Created Suceessfully" } })
            } catch (e) {
                reject(e)
            }
        })
    }
}