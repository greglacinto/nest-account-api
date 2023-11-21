import { FreezeAccountReq } from "../interface/freeze.interface";

export class FreezeAccountFI{
    requestBody: FreezeAccountReq

    constructor(payload: FreezeAccountReq){
        this.requestBody = payload

    }

    soapRequest() {
        const xml = `
            <executeFinacleScriptRequest>
            <ExecuteFinacleScriptInputVO>
                <requestId>${process.env.FICUSTOM_FREEZE}</requestId>
            </ExecuteFinacleScriptInputVO>
            <executeFinacleScript_CustomData>
                <FreezeReasonCode>${this.requestBody.freezeReasonCode}</FreezeReasonCode>
                <FreezeDescription>${this.requestBody.freezeDescription}</FreezeDescription>
                <AccountNumber>${this.requestBody.foracid}</AccountNumber>
            </executeFinacleScript_CustomData>
            </executeFinacleScriptRequest>
        `;
        return xml
    }
}