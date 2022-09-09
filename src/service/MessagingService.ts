import { BaseService } from "./BaseService";
import { Kafka, Consumer, Producer } from "kafkajs";
import { DI } from "../di/DIContainer";
import { Logger } from "../logger/Logger";
// import { DataProcess } from "./DataProcess";
// import { ShipmentsMapping } from "../util/ShipmentsMapping";
// import { ExpressShipmentsMapping } from "../util/ExpressShipmentsMapping";
//import { ErroredMessagesRepository } from "../data/repository/ErroredMessagesRepository";



export class MessagingService implements BaseService {

    private kafkav: Kafka = new Kafka({
        clientId: process.env.KAFKA_CLIENT_ID,
        brokers: [process.env.KAFKA_BROKER!]
       // brokers: ['kafka-1:19092', 'kafka-2:29092', 'kafka-3:39092','kafka-4:19092', 'kafka-5:29092']
    });
    private logger: Logger;
    // private dataProcessor: DataProcess;
    //private erroredMessagesRepository:ErroredMessagesRepository;



    constructor() {
        this.logger = DI.get(Logger);
        // this.dataProcessor = DI.get<DataProcess>(DataProcess);
        //this.erroredMessagesRepository = DI.get(ErroredMessagesRepository);


    }

    // async consumeMessage() {
    //     const consumer: Consumer = this.kafkav.consumer({
    //         groupId: process.env.GROUP_ID!
    //     });
    //     await consumer.connect();
    //     await consumer.subscribe({ topic: process.env.CONSUME_TOPIC! });
    //     await consumer.run({
    //         eachMessage: async ({ topic, partition, message }) => {
    //             console.log("Consume timestamp", new Date());
    //             let value;
    //             this.logger.log("============================================CONSUME NEW MESSAGE START===========================================================================================");
    //             this.logger.log("Message =======================>", message);
    //             if (message.value != undefined && message.headers?.MESSAGE_CATEGORY != undefined && message.headers?.MESSAGE_CATEGORY.toString() === 'BUSINESS') {
    //                 value = message.value.toString();
    //                 // Build Publish message
    //                 let publishMessage: any = {};
    //                 publishMessage['headers'] = {};
    //                 publishMessage['body'] = {};
    //                 publishMessage['headers']['MESSAGE_CATEGORY'] = "BUSINESS";
    //                 publishMessage['body']['id'] = JSON.parse(value).id;
    //                 publishMessage['body']['msgType'] = JSON.parse(value).msgType;
    //                 publishMessage['body']['primary'] = true;
    //                 publishMessage['body']['issueTimeFLag'] = true;
    //                 await this.publishMessage(process.env.PUBLISH_TOPIC!, publishMessage);

    //                 this.logger.log("Consumed Message", JSON.parse(value));
    //                 let inputData;
    //                 try {
    //                     //DB Persistence Logic
    //                     let msgType = JSON.parse(value).msgType;
    //                     let vcid = JSON.parse(value).id;
    //                     let trailToken = JSON.parse(value).trailKey;
    //                     let mappingObject: any = null;

    //                     if (msgType === "SHPC_DHLE_CUR_STA") {
    //                         if (process.env.NODE_ID === "DGF" || process.env.NODE_ID === "NISSAN") {
    //                             mappingObject = ShipmentsMapping.getData();
    //                         } else if (process.env.NODE_ID === "EXP") {
    //                             mappingObject = ExpressShipmentsMapping.getData();
    //                         } else {
    //                             this.logger.log(`NO DB Mapping Object found`);
    //                         }
    //                     }
    //                     this.logger.log(`process.env.NODE_ID is ${process.env.NODE_ID}`)
    //                     this.logger.log(`Message Type ${msgType}`);
    //                     this.logger.log(`MappingObj ${mappingObject}`);

    //                     inputData = JSON.parse(Buffer.from(JSON.parse(value).transformedMessage, 'base64').toString('utf8'))['body'];
    //                     inputData["vcid"] = vcid;
    //                     inputData["trailToken"] = trailToken;
    //                     if (mappingObject !== null && mappingObject !== undefined) {
    //                         try {
    //                             await this.dataProcessor.process(mappingObject, inputData, inputData);
    //                         } catch (error) {
    //                             this.logger.dbInsertionerror(`================Error while data insertion START============`);
    //                             this.logger.dbInsertionerror(`Error is ${error}`);
    //                             this.logger.dbInsertionerror(`Message: ${JSON.stringify(inputData)}`);
    //                             this.logger.dbInsertionerror(`================Error while data insertion END ============`);
    //                         }

    //                     }
    //                 } catch (error) {
    //                     this.logger.error(`Consume Process Error ===> ${error}`);
    //                     //await this.erroredMessagesRepository.create({'MESSAGE':JSON.parse(value),"STATUS":"DB-ERROR"});

    //                 }
    //             }
    //             this.logger.log("============================================STOP-CONSUME NEW MESSAGE STOP==========================================================");

    //         }
    //     }).catch((error) => { this.logger.log("Consume Message Error:", error) });
    // }

    async publishMessage(publishTopic: string, message: any) {
        console.log("Published Message =========", JSON.stringify(message));
        console.log("Topic name", publishTopic);
        const producer: Producer = this.kafkav.producer();
        await producer.connect();
        await producer.send({
            topic: publishTopic,
            messages: [
                {
                    value: JSON.stringify(message.body)
                }
            ]
        });
        console.log("Message Published back to Topic", publishTopic);
    }

}
