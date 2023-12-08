import { Details } from "../interface/details.interface";

const  prepareObject = async (data: any[]) => {
    const resultObject: Details[] = [];
    data.forEach(item => {
        const dataObject: Details = {
            availableBalance: (item[1] - item[0]).toFixed(2),
            ledgerBalance: item[1].toFixed(2),
            accountNumber: item[2],
            accountName: item[3],
            customerId: item[4],
            schemeType: item[5],
            schemeCode: item[6],
            solId: item[7],
            accountCurrency: item[8],
            openEffectiveDate: item[9],
            accountCloseDate: item[10],
            status: item[11] || item[12],
            accountType: item[5] == "SBA"? "SAVINGS" : "CURRENT",
            accountTier: item[15] || "THREE",
            phone: item[17], 
            email: item[16],
            bvn: item[13] || item[14]
        };
        resultObject.push(dataObject);
    });
    return resultObject;
}

export default prepareObject