import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DisableAccountDto } from './dto/disable.dto';
import { EnableAccountDto } from './dto/enable.dto';
import { DisableAccountFI } from './fi/disable.fi';
import { IntegratorRes } from 'src/shared/interface/integrator.interface';
import { AcctMgRes } from 'src/shared/interface/acctmg.interface';
import { controllerHelper } from 'src/shared/controller.helper';
import { AccountMgService } from './accountMg.service';
import { EnableAccountFI } from './fi/enable.fi';
import { FreezeAccountDto } from './dto/freeze.dto';
import { FreezeAccountFI } from './fi/freeze.fi';
import { FreezeAccountReq } from './interface/freeze.interface';
import { UnfreezeAccountDto } from './dto/unfreeze.dto';
import { UnfreezeAccountReq } from './interface/unfreeze.interface';
import { UnfreezeAccountFI } from './fi/unfreeze.fi';

@ApiTags('account')
@Controller('account')
export class AccountMgController {
    payload: string = ''
    res: IntegratorRes = {statusCode: 500, data: ''}
    responseJson: AcctMgRes

    constructor(private accountMgService: AccountMgService){}
    
    @Post('disable/staff')
    async disableAccount(@Body() disableAccountParam: DisableAccountDto): Promise<AcctMgRes>{
        const disableAccParam = disableAccountParam
        const disableAccoutFI = new DisableAccountFI(disableAccParam)
        this.payload = disableAccoutFI.soapRequest()
        this.res = await this.accountMgService.manage(this.payload)
        this.responseJson = await controllerHelper(this.res, process.env.SERVICE_ACCTMG)
        return this.responseJson
    }

    @Post('enable')
    async enableAccount(@Body() enableAccountParam: EnableAccountDto): Promise<AcctMgRes>{
        const enableAccParam = enableAccountParam
        const enableAccountFI = new EnableAccountFI(enableAccParam)
        this.payload = enableAccountFI.soapRequest()
        this.res = await this.accountMgService.manage(this.payload)
        this.responseJson = await controllerHelper(this.res, process.env.SERVICE_ACCTMG)
        return this.responseJson
    }

    @Post('place-pnd')
    async freezeAccount(@Body() freezeAccountParam: FreezeAccountDto): Promise<AcctMgRes>{
        const freezeAccParam: FreezeAccountReq = {
            foracid: freezeAccountParam.foracid,
            freezeDescription: freezeAccountParam.freezeDescription,
            freezeReasonCode: freezeAccountParam.freezeReasonCode
        }
        const freezeAccountFI = new FreezeAccountFI(freezeAccParam)
        this.payload = freezeAccountFI.soapRequest()
        this.res = await this.accountMgService.manage(this.payload)
        this.responseJson = await controllerHelper(this.res, process.env.SERVICE_ACCTMG)
        return this.responseJson
    }

    @Post('lift-pnd')
    async unfreezeAccount(@Body() unfreezeAccountParam: UnfreezeAccountDto): Promise<AcctMgRes>{
        const unfreezeAccParam: UnfreezeAccountReq = {
            foracid: unfreezeAccountParam.foracid,
            freezeReasonCode: unfreezeAccountParam.freezeReasonCode
        } 
        const unfreezeAccountFI = new UnfreezeAccountFI(unfreezeAccParam)
        this.payload = unfreezeAccountFI.soapRequest()
        this.res = await this.accountMgService.manage(this.payload)
        this.responseJson = await controllerHelper(this.res, process.env.SERVICE_ACCTMG)
        return this.responseJson
    }
}
