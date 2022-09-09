import { BaseService } from "./BaseService";
import { Kafka, Consumer, Producer } from "kafkajs";
import { DI } from "../di/DIContainer";
import { Logger } from "../logger/Logger";
// import { ShipmentTransreqExtRepository } from "../data/repository/ShipmentTransreqExtRepository";
// import { ImMessagesRepository } from "../data/repository/ImMessagesRepository";
import { v4 as uuidv4 } from 'uuid';
import { MessagingService } from "./MessagingService";
import { IMShipmentAnalyticsRepository } from "../data/repository/IMShipmentAnalyticsRepository";
// import { ImPubShipmentConsOrdRepository } from "../data/repository/ImPubShipmentConsOrdRepository";
// import { ImpubShipmentTransreq } from "../data/entity/init-models";
// import { ImPublishedInfoRepository } from "../data/repository/ImPublishedInfoRepository";
// import { ShipmentsRepository } from "../data/repository/ShipmentsRepository";
// import { ImUtil } from "../util/ImUtil";
const fs = require('fs')

//import { ErroredMessagesRepository } from "../data/repository/ErroredMessagesRepository";



export class ImService implements BaseService {

    private kafkav: Kafka = new Kafka({
        clientId: process.env.KAFKA_CLIENT_ID,
        brokers: [process.env.KAFKA_BROKER!]
       
    });
    private logger: Logger;
    // private shipmentTransreqExtRepository: ShipmentTransreqExtRepository;
    // private imMessagesRepository: ImMessagesRepository;
     private messagingService: MessagingService;
     private IMShipmentAnalyticsRepository: IMShipmentAnalyticsRepository;
    // private imPublishedInfoRepository: ImPublishedInfoRepository;
    // private imPubShipmentConsOrdRepository: ImPubShipmentConsOrdRepository;
    // private shipmentsRepository: ShipmentsRepository;
    // private imUtil:ImUtil;
    //private erroredMessagesRepository:ErroredMessagesRepository;



    constructor() {
        this.logger = DI.get(Logger);
        // this.shipmentTransreqExtRepository = DI.get(ShipmentTransreqExtRepository);
        // this.imMessagesRepository = DI.get(ImMessagesRepository);
         this.messagingService = DI.get(MessagingService);
         this.IMShipmentAnalyticsRepository = DI.get(IMShipmentAnalyticsRepository);
        // this.imPublishedInfoRepository = DI.get(ImPublishedInfoRepository);
        // this.shipmentsRepository = DI.get(ShipmentsRepository);
        // this.imPubShipmentConsOrdRepository = DI.get(ImPubShipmentConsOrdRepository);
        // this.imUtil = DI.get(ImUtil);
        //this.erroredMessagesRepository = DI.get(ErroredMessagesRepository);
    }

    // async consumeTransportRequest() {
    //     const consumer: Consumer = this.kafkav.consumer({
    //         groupId: process.env.GROUP_ID!
    //     });
    //     await consumer.connect();
    //     this.logger.log(`TOPIC_SHIP_CHP is ${process.env.CONSUME_TOPIC!}`)
    //     await consumer.subscribe({ topic: process.env.CONSUME_TOPIC! });
    //     await consumer.run({
    //         eachMessage: async ({ topic, partition, message }) => {
    //             console.log("Transport Request Consume timestamp", new Date());
    //             let value: any;
    //             this.logger.log("============================================TRAN_REQ CONSUME NEW MESSAGE START===========================================================================================");
    //             this.logger.log("TRAN_REQ Message =======================>", message);
    //             if (message.value != undefined) {
    //                 value = message.value.toString();
    //                 this.logger.log("Consumed Message", JSON.parse(value));
    //                 //DB Insertion Logic
    //                 let shpTransReqDbObj: any = {};
    //                 value = JSON.parse(value);
    //                 // let messagesList: any = value["messages"];
    //                 let messagesList: any = JSON.parse(Buffer.from(value["messages"], 'base64').toString('utf8'));
    //                 this.logger.log(`messagesList is ${messagesList}`);
    //                 for (let messageItem of messagesList) {
    //                     try {
    //                         shpTransReqDbObj["hawb"] = messageItem["hawb"];
    //                         shpTransReqDbObj["indent"] = messageItem["indent"];
    //                         shpTransReqDbObj["pickup_date"] = messageItem["pickupDate"];
    //                         shpTransReqDbObj["allocated_parts"] = messageItem["allocatedParts"];
    //                         shpTransReqDbObj["item_description"] = messageItem["itemDescription"];
    //                         shpTransReqDbObj["line_no"] = messageItem["lineNo"];
    //                         shpTransReqDbObj["dealer_order"] = messageItem["dealerOrder"];
    //                         shpTransReqDbObj["order_date"] = messageItem["orderDate"];
    //                         shpTransReqDbObj["dealer_id"] = messageItem["dealerId"];
    //                         shpTransReqDbObj["dealer_name"] = messageItem["dealerName"];
    //                         //Insert into shipment_transreq_ext
    //                         await this.shipmentTransreqExtRepository.updateOrCreate(shpTransReqDbObj, shpTransReqDbObj);
    //                         this.logger.log(`shipmentTransreqExt - DB Insertion Completed`);
    //                     } catch (error) {
    //                         this.logger.dbInsertionerror(`----------START-----IM-Insertion Error in Consume Service`);
    //                         this.logger.dbInsertionerror(`DB Object is ${shpTransReqDbObj}`);
    //                         this.logger.dbInsertionerror(`Error is ${error}`);
    //                         this.logger.dbInsertionerror(`----------STOP-----IM-Insertion Error in Consume Service`);
    //                     }
    //                 }

    //                 //Insert into im_messages table
    //                 let imMsgDbObj: any = {};
    //                 imMsgDbObj["uuid"] = value["uuid"];
    //                 imMsgDbObj["receivers"] = 'SHIPMENT';
    //                 imMsgDbObj["sender"] = value["sender"];
    //                 imMsgDbObj["message_file_path"] = value["msgFilePath"];
    //                 imMsgDbObj["type"] = 'CONSUME';
    //                 await this.imMessagesRepository.create(imMsgDbObj);
    //                 this.logger.log(`imMessages -DB Insertion COmpleted`);


    //             }
    //             this.logger.log("============================================STOP-CONSUME NEW MESSAGE STOP==========================================================");

    //         }
    //     }).catch((error) => { this.logger.log("Consume Message Error:", error) });
    // }

    async publishImMessages(publishMsgType: any) {
        let topic: any, receivers: any, msgFilePath: any, msgType: any;
        //Build ToBePublished message
        let dbData: any;
        topic = process.env.KAFKA_TOPIC_TRANSAIR;
        // if (publishMsgType === process.env.IM_MSGTYPE_TRANSREQ) {
        //     dbData = await this.imPubShipmentTransReqRepository.get({});
        //     topic = process.env.IM_TOPIC_NIS_TRANREQ;
        //     receivers = process.env.IM_RECEIVERS_TRANSREQ;
        //     msgType = process.env.IM_MSGTYPE_TRANSREQ;
        //     msgFilePath = process.env.IM_MSGFILE_PATH_TRANSREQ;
        // } else if (publishMsgType === process.env.IM_MSGTYPE_CONSORD) {
        //     dbData = await this.imPubShipmentConsOrdRepository.get({});
        //     topic = process.env.IM_TOPIC_NIS_CONSORD;
        //     receivers = process.env.IM_RECEIVERS_CONSORD;
        //     msgType = process.env.IM_MSGTYPE_CONSORD;
        //     msgFilePath = process.env.IM_MSGFILE_PATH_CONSORD;
        // } else {
        //     dbData = [];
        // }
        dbData = await this.IMShipmentAnalyticsRepository.getMawbs({});
        this.logger.log("dbData",dbData)
        this.logger.log("dbdata length", dbData.length)
        if (dbData.length > 0) {
            let uuid = uuidv4();
            let tobePublishedMessage: any = { "body": {} }
            tobePublishedMessage["body"]["msgType"] = msgType;
            tobePublishedMessage["body"]["sender"] = process.env.IM_SENDER;
            tobePublishedMessage["body"]["uuid"] = uuid;
            //tobePublishedMessage["body"]["msgFilePath"] = msgFilePath + uuid + ".json";
            tobePublishedMessage["body"]["messages"] = [];
            for (let dbDataItem of dbData) {
                tobePublishedMessage["body"]["messages"].push({
                    "mawb": dbDataItem["mst_reference_id"]
                    // "indent": dbDataItem["indent"],
                    // "eventCode": dbDataItem["event_code"],
                    // "eventDescription": dbDataItem["event_desc"],
                    // "lineNo": dbDataItem["line_no"]
                    
                })
              // this.logger.log("Inside for loop tobePublishedMessage",tobePublishedMessage["body"]["messages"])
            }
            this.logger.log("tobePublishedMessage",JSON.stringify(tobePublishedMessage["body"]["messages"]))
            tobePublishedMessage["body"]["messages"] = Buffer.from(JSON.stringify(tobePublishedMessage["body"]["messages"])).toString('base64');
            this.logger.log(`To Be Published Data is ${JSON.stringify(tobePublishedMessage)}`);

            //Publish message
            await this.messagingService.publishMessage(topic, tobePublishedMessage);

            //Insert Published message details into im_pubished_info table
            // for (let dbDataItem of dbData) {
            //     //Insert published message into im_published_info table
            //     await this.imPublishedInfoRepository.create({
            //         "parent_id": dbDataItem["parent_id"],
            //         "receivers": receivers,
            //         "message_file_path": tobePublishedMessage["body"]["msgFilePath"],
            //         "uuid": uuid
            //     });
            // }
            // //Write published message to JSON file and save 
            // await fs.writeFileSync(tobePublishedMessage["body"]["msgFilePath"], JSON.stringify(tobePublishedMessage));
            // //Insert published message into im_messages table
            // let imMsgDbObj: any = {};
            // imMsgDbObj["uuid"] = uuid;
            // imMsgDbObj["receivers"] = receivers;
            // imMsgDbObj["sender"] = 'SHIPMENT';
            // imMsgDbObj["message_file_path"] = tobePublishedMessage["body"]["msgFilePath"];
            // imMsgDbObj["type"] = 'PUBLISH';
            // await this.imMessagesRepository.create(imMsgDbObj);
            // this.logger.log(`PUBLISH---imMessages -DB Insertion Completed`);
        }

    }

    // async publishImMessagesV2(publishMsgType: any) {
    //     let topic: any, receivers: any, msgFilePath: any, msgType: any;
    //     this.logger.log(`START PUBLISH SERVICE`)
    //     //Build ToBePublished message
    //     let info = await this.imUtil.getTobePublishedInfo(process.env.IM_MSGTYPE_TRANSCOMMDXB);
    //     let dbData = info["dbData"];
    //     receivers = info["receivers"];
    //     topic = info["topic"];
    //     if(dbData.length == 0) {
    //         return "";
    //     }
    //     let tobePublishedMessage = info["tobePublishedMessage"];
    //     let uuid = uuidv4();
    //     tobePublishedMessage["body"]["messages"] = Buffer.from(JSON.stringify(tobePublishedMessage["body"]["messages"])).toString('base64');
    //     this.logger.log(`To Be Published Data is ${JSON.stringify(tobePublishedMessage)}`);

    //     //Publish message
    //     await this.messagingService.publishMessage(topic, tobePublishedMessage);

    //     //Insert Published message details into im_pubished_info table
    //     for (let dbDataItem of dbData) {
    //         //Insert published message into im_published_info table
    //         await this.imPublishedInfoRepository.create({
    //             "parent_id": dbDataItem["parent_id"],
    //             "receivers": receivers,
    //             "message_file_path": tobePublishedMessage["body"]["msgFilePath"],
    //             "uuid": uuid
    //         });
    //     }
    //     //Write published message to JSON file and save 
    //     await fs.writeFileSync(tobePublishedMessage["body"]["msgFilePath"], JSON.stringify(tobePublishedMessage));
    //     //Insert published message into im_messages table
    //     let imMsgDbObj: any = {};
    //     imMsgDbObj["uuid"] = uuid;
    //     imMsgDbObj["receivers"] = receivers;
    //     imMsgDbObj["sender"] = 'SHIPMENT';
    //     imMsgDbObj["message_file_path"] = tobePublishedMessage["body"]["msgFilePath"];
    //     imMsgDbObj["type"] = 'PUBLISH';
    //     await this.imMessagesRepository.create(imMsgDbObj);
    //     this.logger.log(`PUBLISH---imMessages -DB Insertion Completed`);

    // }

}