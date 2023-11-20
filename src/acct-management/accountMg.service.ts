import { Injectable, NotFoundException } from '@nestjs/common';
import * as https from 'https'
import axios, { AxiosError } from 'axios';
import { wrapper } from 'src/shared/soap/wrapper';
import {xmlParser} from '../middleware/parser'

@Injectable()
export class AccountMgService {
    async manage( payload: string){

        const url = process.env.INTEGRATOR_URL
        const request = {
            requestBody: payload,
            serviceName: process.env.SERVICE_ACCTMG,
            channelId: process.env.CHNID_ACC
        }
        const soapRequest = wrapper(request)
        const config = {
            headers: {
              'Content-Type': 'text/xml',
              'Content-Length': Buffer.byteLength(soapRequest),
              'SOAPAction': ''
        },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        }
        console.log(soapRequest)
        const response: any = await axios 
            .post(url, soapRequest, config)
            .catch((err: AxiosError) => {
                console.log(err.stack)
                throw new NotFoundException(err.message);
            })
        
            const result: any = await xmlParser(response.data)     
            const responseXML: string = result['soapenv:Envelope']['soapenv:Body']
    
            return {
                statusCode: 200,
                data: responseXML
            } 
    }
}
