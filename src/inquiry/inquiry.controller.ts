import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import executeSQL from 'src/acct-details/database/conn.database';
import { AccountDto } from 'src/acct-details/dto/acct-det.dto';
import { getAccountBalanceSQL } from 'src/acct-details/query/balance.query';
import { getAccountNameSQL } from './query/name.query';
import { TranStatusDto } from './dto/tran-status.dto';
import { getTransactionStatusDTDSQL, getTransactionStatusHTDSQL } from './query/tran-status.query';

@ApiTags('inquiry')
@Controller('inquiry')
export class InquiryController {

    @Get('/balance')
    async getBalanceInquiry(@Query() query: AccountDto){
        const param = query.accountNumber
        try {
            const result = await executeSQL(getAccountBalanceSQL, { foracid:param })
            if (typeof result.rows[0] === "undefined") {
                throw new NotFoundException ('Record Not Found')
            }

            const clrBalance = result.rows[0][0]
            const lienBalance = result.rows[0][1]
            return {
                statusCode: 0o0,
                responseMessage: clrBalance ? "Successful" : "Unsuccessful",
                balanceDetails: {
                    availableBalance: clrBalance - lienBalance,
                    ledgerBalance: clrBalance
                }
            }
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }

    @Get('/name')
    async getAccountName(@Query() query: AccountDto){
        const param = query.accountNumber

        try {
            const result = await executeSQL(getAccountNameSQL, { foracid: param })
            if (typeof result.rows[0] === "undefined") {
                throw new NotFoundException ('Record Not Found')
            }

            const name = result.rows[0][0]
            return {
                statusCode: 0o0,
                responseMessage: name ? "Successful" : "Unsuccessful",
                accountName: name
            } 
        } catch (error) {
            console.error(error)
            throw new NotFoundException(error.message)
        }
    }

    @Get('/transaction-status')
    async getTransactionStatus(@Query() query: TranStatusDto) {
        const param = {
            tranId: query.tranId,
            tranDate: query.tranDate
        }
        try {
            const today = new Date()
            const entered = new Date(param.tranDate)
            let result: any
            // comparing dates 
            if (today.toDateString() === entered.toDateString()) {
                result = await executeSQL(getTransactionStatusDTDSQL, param)
            } else {
                result = await executeSQL(getTransactionStatusHTDSQL, param)
            }
            
            if (typeof result.rows[0] === "undefined") {
                throw new NotFoundException ('Record Not Found')
            }

            return {
                statusCode: 0o0,
                responseMessage: result.rows[0][0] ? 'Successful' : 'Unsuccessful',
                transactionStatus: result.rows[0][0] == 'Y' ? 'Approved' : 'Not Approved'
            } 
        } catch (error) {
            console.error(error)
            throw new NotFoundException(error.message)
        }
    }
}
