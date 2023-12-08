import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { getAccountDetailsSQL } from './query/acctDet.query';
import prepareObject from './helper/prepareObj.helper';
import { ApiTags } from '@nestjs/swagger';
import { AccountDto } from './dto/acct-det.dto';
import executeSQL from './database/conn.database';

@ApiTags('account')
@Controller('account')
export class AcctDetailsController {
    
    @Get('/details')
    async getAccount(@Query() query: AccountDto){
        const param = query.accountNumber

        try {
            const result = await executeSQL(getAccountDetailsSQL, { foracid:param })
            const resultObj = await prepareObject(result.rows)

            return result.rows.length > 0  ?  
                {
                    statusCode: "000",
                    responseMessage: "Successful",
                    accountDetails: resultObj 
                }
                : 
                {
                    statusCode: "009",
                    responseMessage: "Account Number Not Found",
                    accountDetails: resultObj
                }
        } catch (error) {
            console.log(error)
            throw new NotFoundException(error.message)
        }
    }

   
}
