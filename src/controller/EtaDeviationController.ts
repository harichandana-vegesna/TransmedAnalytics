import { Controller } from "./Controller";
import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import { Logger } from "../logger/Logger";
import { DI } from "../di/DIContainer";
import { FetchResponse } from "../response/APIResponses";
import { ResponseCode, ResponseStatus } from "../response/BaseResponse";
import { EtaDeviationService } from "../service/EtaDeviationService";
import { VerifyJwtTokenService } from "../service/VerifyJwtTokenService";



export class EtaDeviationController implements Controller {
    private logger: Logger = DI.get(Logger)
    private etaDeviationService: EtaDeviationService = DI.get(EtaDeviationService)
    private verifyJwtTokenService: VerifyJwtTokenService = DI.get(VerifyJwtTokenService)

    getRouter(): Router {
        const router = Router();

        router.get('/etaIntransitShipments',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined|| endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                let shipperOrgId = req.param('shipperOrgId')
                dataResult = await this.etaDeviationService.getEtaDeviationIntransitShipments(startDate,endDate,shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/etaDeliveredShipments',this.verifyJwtTokenService.verifyToken,this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined|| endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                let shipperOrgId = req.param('shipperOrgId')
                dataResult = await this.etaDeviationService.getEtaDeviationDeliveredShipments(startDate,endDate,shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/etaShipmentsDrillDown',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let startDate = req.param('startDate');
                let shipmentStatus = req.param('shipmentStatus')
                let endDate = req.param('endDate')
                let originRegion = req.param('originRegion')
                let deviation6Hr = req.param('deviation<6hrs')
                let deviation12Hr = req.param('deviation12hrs')
                let deviation18Hr = req.param('deviation18hrs')
                let deviation1day = req.param('deviation1day')
                let deviation2days = req.param('deviation>2days')
                let ontime = req.param('Ontime')
                if(shipmentStatus === undefined || shipmentStatus === ''){
                    shipmentStatus = ''
                }
                else{
                    shipmentStatus = req.param('shipmentStatus');
                }
                if(originRegion === undefined || originRegion === ''){
                    originRegion = ''
                }
                else{
                    originRegion = req.param('originRegion');
                }
                if(deviation6Hr === undefined || deviation6Hr === ''){
                    deviation6Hr = ''
                }
                else{
                    deviation6Hr = req.param('deviation<6hrs');
                }
                if(deviation12Hr === undefined|| deviation12Hr === ''){
                    deviation12Hr = ''
                }
                else{
                    deviation12Hr = req.param('deviation12hrs');
                }
                if(deviation18Hr === undefined || deviation18Hr === ''){
                    deviation18Hr = ''
                }
                else{
                    deviation18Hr = req.param('deviation18hrs');
                }
                if(deviation1day === undefined|| deviation1day === ''){
                    deviation1day = ''
                }
                else{
                    deviation1day = req.param('deviation1day');
                }

                if(deviation2days === undefined|| deviation2days === ''){
                    deviation2days = ''
                }
                else{
                    deviation2days = req.param('deviation>2days');
                }
                if(ontime === undefined|| ontime === ''){
                    ontime = ''
                }
                else{
                    ontime = req.param('Ontime');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined|| endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                let shipperOrgId = req.param('shipperOrgId')
                dataResult = await this.etaDeviationService.getEtaDeviationShipmentsDrillDown(startDate,endDate,shipperOrgId,shipmentStatus,originRegion,deviation6Hr,deviation12Hr,deviation18Hr,deviation1day,deviation2days,ontime)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        router.get('/summary',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let origin = req.param('origin');
                let accounts = req.param('accounts');
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                let shipperOrgId = req.param('shipperOrgId')
                if(origin === undefined || origin === ''){
                    origin = ''
                }   
                else{
                    origin = req.param('origin');
                }
                if(accounts === undefined  || accounts === ''){
                    accounts = ''
                }   
                else{
                    accounts = req.param('accounts');
                }
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined|| endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                dataResult = await this.etaDeviationService.getEtaDeviationSummary(origin,accounts,startDate,endDate,shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/details',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let destination = req.param('destination');
                let origin  = req.param('origin');
                let accounts = req.param('accounts');
                let shipperOrgId = req.param('shipperOrgId')
                let startDate = req.param('startDate');
                let endDate = req.param('endDate')
                if(startDate === undefined || startDate === ''){
                    startDate = ''
                }
                else{
                    startDate = req.param('startDate');
                }
                if(endDate === undefined|| endDate === ''){
                    endDate = ''
                }
                else{
                    endDate = req.param('endDate');
                }
                dataResult = await this.etaDeviationService.getEtaDeviationDetails(destination,origin,shipperOrgId,accounts,startDate,endDate)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        router.get('/originCodes',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let shipperOrgId = req.param('shipperOrgId')
                dataResult = await this.etaDeviationService.getOriginCodes(shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/etaOriginCodes',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let shipperOrgId = req.param('shipperOrgId')
                dataResult = await this.etaDeviationService.getEtaOriginCodes(shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/destinationCodes',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let shipperOrgId = req.param('shipperOrgId')
                dataResult = await this.etaDeviationService.getDestinationCodes(shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });

        router.get('/EtaAllAccounts',this.verifyJwtTokenService.verifyToken, async (req: Request, res: Response, next: NextFunction) => {
            try {

                let response: any;
                let dataResult: any;
                let shipperOrgId = req.param('shipperOrgId')
                dataResult = await this.etaDeviationService.getEtaAllAccounts(shipperOrgId)
                response = new FetchResponse(new ResponseStatus(ResponseCode.SUCCESS, "Retrieved Successfully"), dataResult)

                console.log("RESPONSE", JSON.stringify(response))
                res.json(response);
            } catch (error) {
                this.logger.log("error", error)
                next(error);

            }
        });
        return router;
    }
}