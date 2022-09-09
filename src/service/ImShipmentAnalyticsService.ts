import { Logger } from "../logger/Logger";
import { DI } from '../di/DIContainer';
import { DimPortOfOriginRespository } from "../data/repository/DimPortOfOriginRespository"
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository"
import { YTDShipmentWeightsRespository } from "../data/repository/YTDShipmentWeightsRespository"
import { FsuMainRepository } from "../data/repository/FsuMainRepository";
import { VFlightDetailsRepository } from "../data/repository/VFlightDetailsRepository";
import { FsuDetailsRepository } from "../data/repository/FsuDetailsRepository";




export class ImShipmentAnalyticsService {
    private logger: Logger;
    private dimPortOfOriginRespository: DimPortOfOriginRespository;
    private iMShipmentAnalyticsRepository: IMShipmentAnalyticsRepository
    private yTDShipmentWeightsRespository: YTDShipmentWeightsRespository;
    private fsuMainRepository: FsuMainRepository;
    private vFlightDetailsRepository: VFlightDetailsRepository;
    private fsuDetailsRepository: FsuDetailsRepository;
    constructor() {
        this.logger = DI.get(Logger);
        this.dimPortOfOriginRespository = DI.get(DimPortOfOriginRespository);
        this.iMShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
        this.yTDShipmentWeightsRespository = DI.get(YTDShipmentWeightsRespository);
        this.fsuMainRepository = DI.get(FsuMainRepository)
        this.vFlightDetailsRepository = DI.get(VFlightDetailsRepository)
        this.fsuDetailsRepository = DI.get(FsuDetailsRepository)

    }

    async getOriginCountries(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {

                let originCountries: any = await this.dimPortOfOriginRespository.get(whereObj);
                return resolve(originCountries)
            } catch (e) {
                reject(e)
            }
        })
    }

    async getAstroOriginCountries(): Promise<any> {
        let whereObj: any = {};
        return new Promise(async (resolve, reject) => {
            try {

                let originCountries: any = await this.yTDShipmentWeightsRespository.getAstroOriginCountries(whereObj);
                return resolve(originCountries)
            } catch (e) {
                reject(e)
            }
        })
    }



    async spDimension(code: any) {
        return new Promise(async (resolve, reject) => {
            try {

                let originCountries: any = await this.iMShipmentAnalyticsRepository.spMainDimension(code)
                return resolve(originCountries)
            } catch (e) {
                reject(e)
            }
        })


    }

    async getFlightDetails(fwbSerialNumber?: string): Promise<any> {
        let result: any = [];

        let fsu_mainResponse = await this.fsuMainRepository.getLatest({ MasterAirwayBillNumber: fwbSerialNumber })
        this.logger.log("fsu_main Response in getMessageBystatus:", fsu_mainResponse);
        if (fsu_mainResponse !== null && fsu_mainResponse !== undefined && fsu_mainResponse !== {}) {
            let fsu_detailsResponse: any = await this.vFlightDetailsRepository.getLatest({ id: fsu_mainResponse.ID })
            this.logger.log("fsu_detailsResponse:", fsu_detailsResponse);
            result = [fsu_detailsResponse];
        }
        return result;
    }

    async getAWBDetails(awbNumber: string, checkpointCode?: string): Promise<any> {
        let headersList: any = [];
        let result = [];
        let fsuMainObj:any = {};
        let fsu_mainResponse = await this.fsuMainRepository.getLatest({ MasterAirwayBillNumber: awbNumber })
        this.logger.log("fsu_mainResponse",fsu_mainResponse)
        if (fsu_mainResponse !== null && fsu_mainResponse !== undefined && fsu_mainResponse !== {}) {
            fsuMainObj = {
                "numberOfPieces":fsu_mainResponse['numberOfPieces']
            }
            if (checkpointCode !== undefined && checkpointCode !== null && checkpointCode !== "null") {
                headersList = await this.fsuDetailsRepository.get({ status_code: checkpointCode, PARENT_ID: fsu_mainResponse['ID'] });
            } else {
                headersList = await this.fsuDetailsRepository.get({ PARENT_ID: fsu_mainResponse['ID'] });
            }
        }
        this.logger.log("headersList",headersList)

        if (headersList.length > 0) {
            for (let header of headersList) {
                let chekpointDetails = header;
                result.push({
                    checkpointCode: chekpointDetails.status_code,
                    checkpointDescription: null,
                    location: chekpointDetails.SegmentLocationCode,
                    checkpointDatetime: chekpointDetails.SegmentOccurrenceDateTime,
                    createdDate: header.createdAt,
                    pieces: chekpointDetails.SegmentPieces,
                    weight: chekpointDetails.SegmentWeight,
                    segmentOrigin: chekpointDetails.SegmentOrigin,
                    segmentDestination: chekpointDetails.SegmentDestination,
                    flightNumber: chekpointDetails.SegmentFlightNumber,
                    flightDepartureDate: chekpointDetails.SegmentDepartureOccurrenceDateTime,
                    flightArrivalDate: chekpointDetails.SegmentArrivalOccurrenceDateTime,
                    uldNumber: chekpointDetails.SegmentUldNumbers
                })
            }
        }
        result.push({"awbDetails":fsuMainObj})
        return result.sort((a, b) => {
            let da: any = new Date(a.checkpointDatetime!);
            let db: any = new Date(b.checkpointDatetime!);
            return da - db;
        });
    }
}