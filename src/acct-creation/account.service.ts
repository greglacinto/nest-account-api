import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import * as https from 'https'
import axios, { AxiosError } from 'axios';
import { IntegratorRes } from 'src/shared/interface/integrator.interface';
import { wrapper } from 'src/shared/soap/wrapper';
import {xmlParser} from '../middleware/parser'

@Injectable()
export class AccountService {
    private readonly loggerService = new Logger(AccountService.name)
    
    async createSavings(payload: string) {
        const serviceName = process.env.SERVICE_SB
        const url = process.env.INTEGRATOR_URL
        const request = {
            requestBody: payload,
            serviceName: serviceName,
            channelId: process.env.CHNID_ACC
        }
        const soapRequest = wrapper(request)
        this.loggerService.log(soapRequest)

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
        const response: any = await axios
            .post<IntegratorRes>(url, soapRequest, config)
            .catch((err: AxiosError) => {
                this.loggerService.log(err.stack)
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
