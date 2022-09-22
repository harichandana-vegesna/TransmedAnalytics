import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Logger } from "../logger/Logger";
import { DI } from "../di/DIContainer";
import { GskVxScorecardService } from "../service/GskVxScorecardService";
import { OTPerformanceService } from "../service/OTPerformanceService";
import { OtifRootCausesService } from "../service/OtifRootCausesService";
import { LaneoverviewService } from "../service/LaneoverviewService";
import { YTDShipmentsAndWeightService } from "../service/YTDShipmentsAndWeightService";
import { AuthService } from "../service/AuthService";
import { AuthController } from "./AuthController";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";
import { AirLinePerformanceService } from "../service/AirLinePerformanceService";
import { ImShipmentAnalyticsCostService } from "../service/ImShipmentAnalyticsCostService";
import { ImShipmentAnalyticsService } from "../service/ImShipmentAnalyticsService";
import { ShipmentService } from "../service/ShipmentService";
import { RebookingAndCancellationService } from "../service/RebookingAndCancellationService";
import { VerifyJwtTokenService } from "../service/VerifyJwtTokenService";
import { EtaDeviationService } from "../service/EtaDeviationService";



export class AnalyticsController implements Controller {
    private logger: Logger = DI.get(Logger)
    private GskVxScorecardService: GskVxScorecardService = DI.get(GskVxScorecardService)
    private verifyJwtTokenService: VerifyJwtTokenService = DI.get(VerifyJwtTokenService)
    private OTPerformanceService: OTPerformanceService = DI.get(OTPerformanceService)
    private OtifRootCausesService: OtifRootCausesService = DI.get(OtifRootCausesService)
    private LaneoverviewService: LaneoverviewService = DI.get(LaneoverviewService)
    private airLinePerformanceService: AirLinePerformanceService = DI.get(AirLinePerformanceService)
    private yTDShipmentsAndWeightService: YTDShipmentsAndWeightService = DI.get(YTDShipmentsAndWeightService)
    private imShipmentAnalyticsService:ImShipmentAnalyticsService = DI.get(ImShipmentAnalyticsService)
    private ShipmentService: ShipmentService = DI.get(ShipmentService)
    private EtaDeviationService:EtaDeviationService = DI.get(EtaDeviationService)
    private rebookingAndCancellationService: RebookingAndCancellationService = DI.get(RebookingAndCancellationService)

    private imShipmentAnalyticsCostService: ImShipmentAnalyticsCostService = DI.get(ImShipmentAnalyticsCostService)

    private authService: AuthService = DI.get(AuthService)
    getRouter(): Router {
        const router = Router();

        router.get('/kpiData', this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let sortObject = req.param('sort');
                let colSearch = req.param('colSearch');
                (colSearch != undefined && colSearch != null) ? colSearch = JSON.parse(req.param('colSearch')) : '';
                let originCountry = req.param('origin_country');
                let shipperAccountNumber = req.param('accounts')
                let month = req.param('month');
                let year = req.param('year')
                let shipperOrgId = req.param('shipperOrgId')
                if (originCountry === undefined) {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                } else {
                    year = req.param('year');
                }                   
                dataResult = await this.GskVxScorecardService.getScorecardsData(originCountry, month, year,sortObject, colSearch,shipperOrgId,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/otperformance',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                // let month = req.param('month');
                let originCountry = req.param('origin_country');
                // let year = req.param('year_number');
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                let shipperOrgId = req.param('shipperOrgId')
                let shipperAccountNumber = req.param('accounts')
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if (originCountry === undefined) {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                // if (month === undefined) {
                //     month = ''
                // } else {
                //     month = req.param('month');
                // }
                // if (year === undefined) {
                //     year = ''
                // }
                // else {
                //     year = req.param('year_number');
                // }  
                dataResult = await this.OTPerformanceService.getOtPerformance(originCountry, startDate, endDate,shipperOrgId,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/otifrootcauses',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCountry = req.param('origin_country');
                let year = req.param('year_number');
                let month = req.param('month');
                let shipperOrgId = req.param('shipperOrgId')
                let shipperAccountNumber = req.param('accounts')
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if (originCountry === undefined) {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                }
                else {
                    year = req.param('year_number');
                }                 
                dataResult = await this.OtifRootCausesService.getOtifRootCauses(originCountry, month, year,shipperOrgId,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/laneoverview',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let sortObject = req.param('sort');
                let colSearch = req.param('colSearch');
                let year = req.param('year_number');
                (colSearch != undefined && colSearch != null) ? colSearch = JSON.parse(req.param('colSearch')) : '';
                let month = req.param('month');
                let shipperOrgId = req.param('shipperOrgId')
                let shipperAccountNumber = req.param('accounts')

                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }              
                if (year === undefined) {
                    year = ''
                } else {
                    year = req.param('year_number');
                }  
                dataResult = await this.LaneoverviewService.getLaneoverview(month,sortObject, colSearch,shipperOrgId,year,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/shipmentsandweights',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCountry = req.param('origin_country');
                let shipperAccountNumber = req.param('accounts')

                // let month = req.param('month');
                // let year = req.param('year_number')
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                let shipperOrgId = req.param('shipperOrgId')
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if (originCountry === undefined) {
                    originCountry = ''
                } else {
                    originCountry = req.param('origin_country');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                // if (month === undefined) {
                //     month = ''
                // } else {
                //     month = req.param('month');
                // }
                // if (year === undefined) {
                //     year = ''
                // } else {
                //     year = req.param('year_number');
                // }                 
                dataResult = await this.yTDShipmentsAndWeightService.getYTDShipmentsAndWeight(originCountry, startDate, endDate,shipperOrgId,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/shipmentsandweightsByMonth',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                // let month = req.param('month');
                // let year = req.param('year_number');
                let startDate = req.param('startDate');
                let shipperAccountNumber = req.param('accounts')

                let endDate = req.param('endDate')
                let originCountry = req.param('origin_country')
                let shipperOrgId = req.param('shipperOrgId')
                // if (month === undefined || month === '') {
                //     month = ''
                // } else {
                //     month = req.param('month');
                // }
                // if (year === undefined || year === '') {
                //     year = ''
                // } else {
                //     year = req.param('year_number');
                // }
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                if (originCountry === undefined || originCountry === '') {
                    originCountry = ''
                } else {
                    originCountry = req.param('origin_country');
                }                
                dataResult = await this.yTDShipmentsAndWeightService.getShipmentsByMonthAndYr(startDate, endDate,originCountry,shipperOrgId,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        router.get('/shipmentsandweightsByOrigin',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                
                let originCountry = req.param('origin_code')
                let destinationCountry = req.param('destination_code')
                let shipperOrgId = req.param('shipperOrgId')
                let lspOrgId = req.param('lspOrgId')
                let shipperAccountNumber = req.param('accounts')

                // let month = req.param('month');
                // let year = req.param('year_number');
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                // if (month === undefined || month === '') {
                //     month = ''
                // } else {
                //     month = req.param('month');
                // }
                // if (year === undefined || year === '') {
                //     year = ''
                // } else {
                //     year = req.param('year_number');
                // }              
                dataResult = await this.yTDShipmentsAndWeightService.getShipmentsByOrigin(originCountry,destinationCountry,shipperOrgId,startDate,endDate,lspOrgId,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        router.get('/newshipmentsandweights',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCountry = req.param('origin_country');
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                // let month = req.param('month');
                // let year = req.param('year_number')
                
                let shipperOrgId = req.param('shipperOrgId')
                if (originCountry === undefined) {
                    originCountry = ''
                } else {
                    originCountry = req.param('origin_country');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                // if (month === undefined) {
                //     month = ''
                // } else {
                //     month = req.param('month');
                // }
                // if (year === undefined) {
                //     year = ''
                // } else {
                //     year = req.param('year_number');
                // }                  
                dataResult = await this.yTDShipmentsAndWeightService.getAstroYTDShipmentsAndWeight(originCountry, startDate, endDate,shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/newshipmentsandweightsByMonth',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                // let month = req.param('month');
                // let year = req.param('year_number');
                let originCountry = req.param('origin_country')
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                let shipperOrgId = req.param('shipperOrgId')
                // if (month === undefined || month === '') {
                //     month = ''
                // } else {
                //     month = req.param('month');
                // }
                // if (year === undefined || year === '') {
                //     year = ''
                // } else {
                //     year = req.param('year_number');
                // }
                if (originCountry === undefined || originCountry === '') {
                    originCountry = ''
                } else {
                    originCountry = req.param('origin_country');
                } 
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }               
                dataResult = await this.yTDShipmentsAndWeightService.getAstroShipmentsByMonthAndYr(startDate, endDate,originCountry,shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/newshipmentsandweightsByOrigin',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                
                let originCountry = req.param('origin_code')
                let destinationCountry = req.param('destination_code')
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                let shipperOrgId = req.param('shipperOrgId')
                let lspOrgId = req.param('lspOrgId')
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined || endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }    
                // let month = req.param('month');
                // let year = req.param('year_number');
                // if (month === undefined || month === '') {
                //     month = ''
                // } else {
                //     month = req.param('month');
                // }
                // if (year === undefined || year === '') {
                //     year = ''
                // } else {
                //     year = req.param('year_number');
                // }             
                dataResult = await this.yTDShipmentsAndWeightService.getAstroShipmentsByOrigin(originCountry,destinationCountry,shipperOrgId,startDate,endDate,lspOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        router.get('/airlineperformance',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let sortObject = req.param('sort');
                let colSearch = req.param('colSearch');
                (colSearch != undefined && colSearch != null) ? colSearch = JSON.parse(req.param('colSearch')) : '';
                let originCountry = req.param('origin_country');
                let month = req.param('month');
                let year = req.param('year')
                let shipperOrgId = req.param('shipperOrgId')
                let shipperAccountNumber = req.param('accounts')
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if (originCountry === undefined) {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                } else {
                    year = req.param('year');
                }              
                dataResult = await this.airLinePerformanceService.getAirLinePerformanceData(originCountry, month, year,sortObject, colSearch,shipperOrgId,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/getOriginCountries', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let month = req.param('month');
                let year = req.param('year');
                let shipperAccountNumber:any;
                if (month === undefined) {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined) {
                    year = ''
                } else {
                    year = req.param('year');
                }  
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                console.log("Request body---->", req.param('month'),req.param('year'))
                if (year !== '' || month !== ''){
                    dataResult = await this.GskVxScorecardService.getOriginListData(month, year, shipperAccountNumber) 
                }else{
                    dataResult = await this.imShipmentAnalyticsService.getOriginCountries()
                }
                
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/getAstroOriginCountries',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;

                dataResult = await this.imShipmentAnalyticsService.getAstroOriginCountries()
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.post('/excelUpload/:route',this.verifyJwtTokenService.verifyToken, async (req, res) => {
            try {

                let response: any;
                if (req.params.route === 'create') {
                    response = await this.ShipmentService.excelUpload(req.params.route, req.body, res)
                    res.json({ status: { code: 'SUCCESS', message: "Created Successfully" }, data: response });
                }
                else {
                    response = await this.ShipmentService.excelUpload(req.params.route, req, res)
                    res.json({ status: { code: 'SUCCESS' }, data: response });
                }


            } catch (error) {
                let response: any = { status: { code: 'FAILURE', message: "Error While Uploading The File" } }
                res.json(response);

            }
        });

        router.get('/rebookingAndCancellation',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let originCountry = req.param('origin_country');
                let month = req.param('month');
                let year = req.param('year');
                let shipperOrgId = req.param('shipperOrgId');
                let shipperAccountNumber = req.param('accounts')
                if (shipperAccountNumber === undefined || shipperAccountNumber === '' || shipperAccountNumber.length === 0) {
                    shipperAccountNumber = ''
                }
                else {
                    shipperAccountNumber = req.param('accounts');
                }
                if (originCountry === undefined || originCountry === '') {
                    originCountry = ''
                }
                else {
                    originCountry = req.param('origin_country');
                }
                if (month === undefined || month === '') {
                    month = ''
                } else {
                    month = req.param('month');
                }
                if (year === undefined || year === '') {
                    year = ''
                } else {
                    year = req.param('year');
                }
                dataResult = await this.rebookingAndCancellationService.getRebookingAndCancellationData(originCountry, month, year,shipperOrgId,shipperAccountNumber)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/logout', async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Session Logged Out"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/getFlightDetails', this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {
                const fwbSerialNumber: string = req.param("fwbSerialNumber");
                let messageResult;
                messageResult = await this.imShipmentAnalyticsService.getFlightDetails(fwbSerialNumber);
                res.json(messageResult);

            } catch (error) {
                next(error);
            }
        });

        router.get('/getAWBDetails',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {
                const awbNumber: string = req.param('awbNumber');
                const checkpointCode: string = req.param("checkpointCode");
                let messageResult;
                if (checkpointCode !== undefined || checkpointCode !== null && checkpointCode !== "null") {
                    messageResult = await this.imShipmentAnalyticsService.getAWBDetails(awbNumber, checkpointCode);
                } else {
                    messageResult = await this.imShipmentAnalyticsService.getAWBDetails(awbNumber, undefined);
                }
                res.json(messageResult);

            } catch (error) {
                next(error);
            }
        });

        return router;
    }
}