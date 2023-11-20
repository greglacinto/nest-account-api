import { HttpException, HttpStatus, NotFoundException } from "@nestjs/common"

export function FIxml(data: any, service: string){

    if (service == process.env.SERVICE_SB){
        return data.FIXML
            .Body[0]
            .SBAcctAddResponse[0]
            .SBAcctAddRs[0]
            .SBAcctId[0]
            .AcctId[0]
    }

    if (service == process.env.SERVICE_RET) {
        console.log(data.FIXML)
        return data.FIXML
            .Body[0]
            .RetCustAddResponse[0]
            .RetCustAddRs[0]
    }

    if (service == process.env.SERVICE_CORP) {
        return data.FIXML
            .Body[0]
            .createCorporateCustomerResponse[0]
            .CustStatusDetails[0]
    }

    if (service == process.env.SERVICE_VERIFY) {
        return data.FIXML
            .Body[0]
            .verifyCustomerDetailsResponse[0]
            .CustomerVerifyRs[0]
    }

    if (service == process.env.SERVICE_ACCTMG) {
        return data.FIXML
            .Body[0]
            .executeFinacleScriptResponse[0]
            .executeFinacleScript_CustomData[0]
    }

    throw new NotFoundException('No Handler for response xml in FIXML HELPER');



}