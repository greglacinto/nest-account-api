import { VerifyCif } from "../interface/verify.interface"

export class VerifyCifFi {
  requestBody: VerifyCif 
  

  constructor(payload: VerifyCif){
    this.requestBody = payload

  }

  soapRequest() {
    const xml = `
    <verifyCustomerDetailsRequest>
    <CustomerVerifyRq>
    <cifId>${this.requestBody.cifId}</cifId>
    <decision>${this.requestBody.decision}</decision>
    <entityName>${this.requestBody.entityType}</entityName>
    </CustomerVerifyRq>
    </verifyCustomerDetailsRequest>
    `;

    return xml
  }
}
