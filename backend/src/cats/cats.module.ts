import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './models/cat.model';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([Cat]),
    ConfigModule
  ],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule { }
