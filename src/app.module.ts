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

@Module({
  imports: [
    HttpModule, 
    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 100,
    }]),
    ConfigModule.forRoot(),
  ],
  controllers: [ AccountController, CifController, AccountMgController],
  providers: [ AccountService, CifService, AccountMgService],
})
export class AppModule {}
