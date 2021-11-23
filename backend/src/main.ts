import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule, enabledAPINames } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Animals example')
    .setDescription('The animals API description')
    .setVersion('1.0');
  for (const enabledAPIName of enabledAPINames) {
    config.addTag(enabledAPIName);
  }
  const document = SwaggerModule.createDocument(app, config.build());

  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
