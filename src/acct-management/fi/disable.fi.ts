import { DisableAccountReq } from "../interface/disable.interface";


export class DisableAccountFI{
    requestBody: DisableAccountReq

    constructor(payload: DisableAccountReq){
        this.requestBody = payload
    }

    soapRequest() {
        const xml = `
            <executeFinacleScriptRequest>
            <ExecuteFinacleScriptInputVO>
                <requestId>${process.env.FICUSTOM_DISABLEACC}</requestId>
            </ExecuteFinacleScriptInputVO>
            <executeFinacleScript_CustomData>
                <CifId>${this.requestBody.cifId}</CifId>
                <AccountNumber>${this.requestBody.foracid}</AccountNumber>
            </executeFinacleScript_CustomData>
            </executeFinacleScriptRequest>
        `;
        return xml
    }
}