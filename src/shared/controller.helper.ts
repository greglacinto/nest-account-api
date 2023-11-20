import { NotFoundException } from "@nestjs/common"
import { IntegratorRes } from "./interface/integrator.interface"
import { FIxml } from "./fixml.helper"
import {xmlParser} from '../middleware/parser'

export async function controllerHelper(res: IntegratorRes, service: string){

    if (res.statusCode != 200) {
        throw new NotFoundException('Finacle call failed')
    }

    console.log("=== Finacle call was successful. Trying to parse XML response fields... ===")
    console.log(res.data)

    let data = res.data
        [0]['dlwmin:executeServiceResponse']
        [0]['executeServiceReturn']
        [0]['_']
    
    const responseJSON: any = await xmlParser(data)

    // get response header
    const dataHeader = responseJSON.FIXML
        .Header[0]
        .ResponseHeader[0]
        .HostTransaction[0]
        .Status[0]

    console.log(dataHeader)

    console.log(responseJSON.FIXML.Body[0])

    if (dataHeader.toUpperCase() == 'FAILURE') {
        let dataBody = ''
        
        if (typeof responseJSON.FIXML.Body[0].Error[0].FIBusinessException === 'undefined') {
            dataBody = responseJSON.FIXML
                .Body[0]
                .Error[0]
                .FISystemException[0]
                .ErrorDetail[0].ErrorDesc[0]
            console.log(dataBody)
        } else {
            dataBody = responseJSON.FIXML
                .Body[0]
                .Error[0]
                .FIBusinessException[0]
                .ErrorDetail[0].ErrorDesc[0]
            console.log(dataBody)
        }

        return {"status":dataHeader, "message": dataBody}
    }
    else {
        const dataBody = FIxml(responseJSON, service)
        console.log(dataBody)

        return {"status":dataHeader, "message": dataBody}

    }

}


    






