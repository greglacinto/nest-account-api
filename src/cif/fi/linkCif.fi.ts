import { VerifyCif } from "../interface/verify.interface"

export class LinkCifFi {
  requestBody: string 
  

  constructor(payload: string){
    this.requestBody = payload

  }

  soapRequest() {
    const xml = `
    <executeFinacleScriptRequest>
    <ExecuteFinacleScriptInputVO>
    <requestId>fi_hccfm2.scr</requestId>
    </ExecuteFinacleScriptInputVO>
    <executeFinacleScript_CustomData>
    <currency>NGN</currency>
    <cifId>${this.requestBody}</cifId>
    </executeFinacleScript_CustomData>
    </executeFinacleScriptRequest>
    `;

    return xml
  }
}
