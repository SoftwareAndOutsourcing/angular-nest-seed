import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
require('dotenv').config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: process.env.MSSQL_HOST,
      port: +process.env.MSSQL_PORT,
      username: process.env.MSSQL_USER,
      password: process.env.MSSQL_PASS,
      database: process.env.MSSQL_DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
