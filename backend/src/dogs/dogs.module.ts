import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dog } from './models/dog.model';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';

@Module({
  imports: [SequelizeModule.forFeature([Dog])],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule { }
