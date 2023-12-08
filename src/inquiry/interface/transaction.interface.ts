export interface TransactionInterface {
    statusCode: string
    responseMessage: string
    details: 
        {
            transactionId: string,
            transactionType: string,
            transactionDate: string,
            valueDate: string,
            debitAccount: string,
            creditAccount: string,
            transactionAmount: string,
            transactionFee: string,
            narration: string,
            currency: string,
            solId: string,
            postedFlag: string,
            statusCode: string,
            responseMessage: string,
            createdAt: string,
            updatedAt: string,
            balanceAfterTransaction: string
        }
}
