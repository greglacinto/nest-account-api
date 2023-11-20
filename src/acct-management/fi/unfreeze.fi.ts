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
                <requestId>fi_hccfm.scr</requestId>
            </ExecuteFinacleScriptInputVO>
            <executeFinacleScript_CustomData>
                <foracid>${this.requestBody.foracid}</foracid>
                <type>${this.requestBody.type}<type>
            </executeFinacleScript_CustomData>
            </executeFinacleScriptRequest>
        `;
        return xml
    }
}