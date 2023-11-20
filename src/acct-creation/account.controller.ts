import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateSavingsDto } from './dto/create-savings.dto';
import SBAccountFI from './fi/sbaac.fi';
import { SBAccountRes } from './interface/sbacc.interface';
import { controllerHelper } from 'src/shared/controller.helper';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('account')
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService){}

    @Post('create/savings')
    async createSavings(@Body() createSavingsDto: CreateSavingsDto): Promise<SBAccountRes>{
        const param = createSavingsDto
        const sbAccountFi = new SBAccountFI(param)
        const payload = sbAccountFi.soapRequest()
        const res = await this.accountService.createSavings(payload)
        const responseJson: SBAccountRes = await controllerHelper(res, "SBAcctAdd")
        return responseJson
    }

}
