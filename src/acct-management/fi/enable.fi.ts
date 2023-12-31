import { EnableAccountReq } from "../interface/enable.interface";


export class EnableAccountFI{
    requestBody: EnableAccountReq

    constructor(payload: EnableAccountReq){
        this.requestBody = payload
    }

    soapRequest() {
        const xml = `
            <executeFinacleScriptRequest>
            <ExecuteFinacleScriptInputVO>
                <requestId>${process.env.FICUSTOM_ENABLEACC}</requestId>
            </ExecuteFinacleScriptInputVO>
            <executeFinacleScript_CustomData>
                <foracid>${this.requestBody.foracid}</foracid>
            </executeFinacleScript_CustomData>
            </executeFinacleScriptRequest>
        `;
        return xml
    }
}