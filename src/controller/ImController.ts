import { Controller } from "./Controller";
import { Router, Request, Response } from "express";
import { DI } from "../di/DIContainer";
import { NextFunction } from "connect";
import { Logger } from "../logger/Logger";
import { VerifyJwtTokenService } from "../service/VerifyJwtTokenService";
import { ShipmentService } from "../service/ShipmentService"
import { ImService } from "../service/ImService";
// import { MessagingService } from "../service/MessagingService";
// import { ImUtil } from "../util/ImUtil"
//import { ErroredMessages } from "../data/entity/init-models";

export class ImController implements Controller {
    private logger: Logger;
    private verifyJwtTokenService: VerifyJwtTokenService;
    private imService:ImService;
    // private messagingService:MessagingService;
    // private imUtil:ImUtil;

    constructor() {
        this.logger = DI.get(Logger);
        this.verifyJwtTokenService = DI.get(VerifyJwtTokenService);
        this.imService = DI.get(ImService);
        // this.messagingService = DI.get(MessagingService);
        // this.imUtil = DI.get(ImUtil);
    }
    getRouter(): Router {
        const router = Router();

        router.get('/im-publish-to-kafka', async (req: Request, res: Response, next: NextFunction) => {
            try {
                this.logger.log(`Publishing msg type is ${req.body.publishMsgType}`);
                let result:any = {};
                
                
                // Temmp --> Delete after testing

                // if(req.body.publishMsgType === "im_transair_transcomm_manf"){
                //     this.logger.log(`message is ${JSON.stringify(req.body.message)}`);
                //     this.logger.log(`typeof is mesage is ${typeof req.body.message}`);
                    
                //     result = this.imUtil.tempTransAir_im_transair_transcomm_manf(req.body.message);
                // }else if(req.body.publishMsgType === "im_transair_transcomm_hawb"){
                //     result = this.imUtil.tempTransAir_im_transair_transcomm_hawb(req.body.message);
                // }else if(req.body.publishMsgType === "im_shipment_transcomm_dxb"){
                //     result = this.imUtil.tempTransComm_im_shipment_transcomm_dxb(req.body.message);
                // }
                //END TEMP DELETE

                
                if(req.body.publishMsgType === process.env.IM_MSGTYPE_TRANSAIR){
                    result = this.imService.publishImMessages(req.body.publishMsgType);
                }
                // else{
                //     result = this.imService.publishImMessagesV2(req.body.publishMsgType);
                // }
                
                res.json({ "Message": "Sucess", result: result });
            } catch (error) {
                next(error);
            }
        });

        return router;
    }
}

