import { Body, Controller, Post } from '@nestjs/common';
import { RetCustFI } from './fi/retcust.fi';
import { CifService } from './cif.service';
import { CreateRetailDto } from './dto/create-ret.dto';
import { controllerHelper } from 'src/shared/controller.helper';
import { ApiTags } from '@nestjs/swagger';
import { CreateCorpDto } from './dto/create-corp.dto';
import { CorpCustFI } from './fi/corpcust.fi';
import { IntegratorRes } from 'src/shared/interface/integrator.interface';
import { CreateMinorDto } from './dto/create-minor.dto';
import { MinorCustFI } from './fi/minorcust.fi';
import { CifRes } from 'src/shared/interface/cif.interface';
import { VerifyCifDto } from './dto/verify.dto';
import { VerifyCifFi } from './fi/verify.fi';
import { LinkCifFi } from './fi/linkCif.fi';
import { AccountMgService } from 'src/acct-management/accountMg.service';

@ApiTags('cif')
@Controller('cif')
export class CifController {
    payload: string = ''
    res: IntegratorRes = {statusCode: 500, data: ''}
    responseJson: CifRes

    constructor(
        private readonly cifService: CifService,
        private readonly accountMgService: AccountMgService
    ){}

    @Post('create/retail')
    async createRetail(@Body() createRetailDto: CreateRetailDto): Promise<CifRes>{
        const retParam = createRetailDto
        const retCustFi = new RetCustFI(retParam)
        this.payload = retCustFi.soapRequest()
        this.res = await this.cifService.create(this.payload, process.env.SERVICE_RET)
        console.log(this.res)
        this.responseJson  = await controllerHelper(this.res, process.env.SERVICE_RET)
        return this.responseJson
    }

    @Post('create/corporate')
    async createCorporate(@Body() createCorpDto: CreateCorpDto): Promise<CifRes>{
        const corpParam = createCorpDto
        const corpCustFI = new CorpCustFI(corpParam)
        this.payload = corpCustFI.soapRequest()
        this.res = await this.cifService.create(this.payload, process.env.SERVICE_CORP)
        console.log(this.res)
        this.responseJson = await controllerHelper(this.res, process.env.SERVICE_CORP)
        return this.responseJson
    }

    @Post('create/minor')
    async createMinor(@Body() createMinorDto: CreateMinorDto): Promise<CifRes> {
        const minorParam = createMinorDto
        const minorCustFI = new MinorCustFI(minorParam)
        this.payload = minorCustFI.soapRequest()
        this.res = await this.cifService.create(this.payload, process.env.SERVICE_RET)
        console.log(this.res)

        this.responseJson  = await controllerHelper(this.res, process.env.SERVICE_RET)
        return this.responseJson
    }

    @Post('verify')
    async VerifyCif(@Body() verifyCifDto : VerifyCifDto): Promise<CifRes>{
        const verifyCifParam = verifyCifDto
        const verifyCifFI = new VerifyCifFi(verifyCifParam)
        this.payload = verifyCifFI.soapRequest()
        this.res = await this.cifService.create(this.payload, process.env.SERVICE_VERIFY)
        console.log(this.res)
        this.responseJson = await controllerHelper(this.res, process.env.SERVICE_VERIFY)

        if (this.responseJson.status == "SUCCESS"){
            const cifLinkJob = await this.LinkCif(verifyCifParam.cifId)
            console.log(cifLinkJob.message)
        }
            
        return this.responseJson
    }


    async LinkCif(cif: string): Promise<CifRes>{
        const linkCifFI = new LinkCifFi(cif)
        this.payload = linkCifFI.soapRequest()
        this.res = await this.accountMgService.manage(this.payload)
        console.log(this.res)
        const linkResponse = await controllerHelper(this.res, process.env.SERVICE_ACCTMG)
        return linkResponse
    }
}
