import { UnfreezeAccountReq } from "../interface/unfreeze.interface";

export class UnfreezeAccountFI{
    requestBody: UnfreezeAccountReq

    constructor(payload: UnfreezeAccountReq){
        this.requestBody = payload
    }

    soapRequest() {
        const xml = `
            <executeFinacleScriptRequest>
            <ExecuteFinacleScriptInputVO>
                <requestId>${process.env.FICUSTOM_UNFREEZE}</requestId>
            </ExecuteFinacleScriptInputVO>
            <executeFinacleScript_CustomData>
                <AccountNumber>${this.requestBody.foracid}</AccountNumber>
                <FreezeReasonCode>${this.requestBody.freezeReasonCode}</FreezeReasonCode>
            </executeFinacleScript_CustomData>
            </executeFinacleScriptRequest>
        `;
        return xml
    }
}