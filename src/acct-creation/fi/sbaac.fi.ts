import { SBAccount } from "../interface/sbacc.interface";

class SBAccountFI {
  requestBody: SBAccount = {
    cifId: '', schmCode:'',schmType:'',acctCrncy:'',branchId:'',
    glSubHeadCode:'',acctName:'',acctShortName:''

  }
  requestTime = new Date().toISOString()

  constructor(payload: SBAccount){
    this.requestBody.cifId = payload.cifId;
    this.requestBody.schmCode= payload.schmCode;
    this.requestBody.schmType= payload.schmType;
    this.requestBody.acctCrncy= payload.acctCrncy;
    this.requestBody.branchId= payload.branchId;
    this.requestBody.glSubHeadCode= payload.glSubHeadCode;
    this.requestBody.acctName= payload.acctName;
    this.requestBody.acctShortName= payload.acctShortName;
  }

  soapRequest() {
    const xml = `
            <SBAcctAddRequest>
            <SBAcctAddRq>
            <CustId>
            <CustId>${this.requestBody.cifId}</CustId>
            </CustId>
            <SBAcctId>
            <AcctType>
            <SchmCode>${this.requestBody.schmCode}</SchmCode>
            <SchmType>${this.requestBody.schmType}</SchmType>
            </AcctType>
            <AcctCurr>${this.requestBody.acctCrncy}</AcctCurr>
            <BankInfo>
            <BranchId>${this.requestBody.branchId}</BranchId>
            </BankInfo>
            </SBAcctId>
            <SBAcctGenInfo>
            <GenLedgerSubHead>
            <GenLedgerSubHeadCode>${this.requestBody.glSubHeadCode}</GenLedgerSubHeadCode>
            </GenLedgerSubHead>
            <AcctName>${this.requestBody.acctName}</AcctName>
            <AcctShortName>${this.requestBody.acctShortName}</AcctShortName>
            <DespatchMode>N</DespatchMode>
            <SBAcctAdd_CustomData>
            <LOCALCALFLG>N</LOCALCALFLG>
            <WTAXBRNBY>A</WTAXBRNBY>
            <WTAXFLG>N</WTAXFLG>
            <WTAXSCOPE>P</WTAXSCOPE>
            <INTCRFLG>S</INTCRFLG>
            </SBAcctAdd_CustomData>
            </SBAcctGenInfo>
            </SBAcctAddRq>
            </SBAcctAddRequest>
    `;

    return xml
  }
}

export default SBAccountFI