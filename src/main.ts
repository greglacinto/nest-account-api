import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { initOracleClient } from 'oracledb'
import { connection } from './acct-details/database/pool.database';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Account API')
    .setDescription('The Account API description')
    .setVersion('4.0')
    // .addTag('accounts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  //enable thick mode
  initOracleClient()
  //start connection pool
  connection()
  
  const port = process.env.PORT || 3000
  await app.listen(port, () => {console.log(`account-api up and running on port ${port}`)});
}
bootstrap();
