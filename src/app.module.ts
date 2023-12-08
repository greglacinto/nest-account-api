import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

import { AccountController } from './acct-creation/account.controller';
import { AccountService } from './acct-creation/account.service';
import { CifController } from './cif/cif.controller';
import { CifService } from './cif/cif.service';
import { AccountMgController } from './acct-management/accountMg.controller';
import { AccountMgService } from './acct-management/accountMg.service';
import { AcctDetailsController } from './acct-details/acct-details.controller';
import { AcctDetailsService } from './acct-details/acct-details.service';
import { InquiryController } from './inquiry/inquiry.controller';
import { InquiryService } from './inquiry/inquiry.service';

@Module({
  imports: [
    HttpModule, 
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 100,
    }]),
    ConfigModule.forRoot()
  ],
  controllers: [ AccountController, CifController, AccountMgController, AcctDetailsController, InquiryController],
  providers: [ AccountService, CifService, AccountMgService, AcctDetailsService, InquiryService],
})
export class AppModule {}
