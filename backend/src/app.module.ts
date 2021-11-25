import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import config from './config/config';
require('dotenv').config();

const availableApiModules: Map<string, Function> = new Map([
  ['cats', CatsModule],
  ['dogs', DogsModule]
]);

export const enabledAPINames = process.env.ENABLED_APIS
  .split(',')
  .map(s => s.trim());

const getEnabledAPIModules = () => {
  const apiModules = [];
  for (const enabledAPIName of enabledAPINames) {
    const apiModule = availableApiModules.get(enabledAPIName);
    if (apiModule) {
      apiModules.push(apiModule);
    } else {
      throw `API ${enabledAPIName} not found.`;
    }
  }
  return apiModules;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB_NAME,
      autoLoadModels: true,
      synchronize: true
    }),
    ...getEnabledAPIModules()
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
