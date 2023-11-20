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