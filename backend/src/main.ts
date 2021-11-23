import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import config from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Animals example')
    .setDescription('The animals API description')
    .setVersion('1.0')
    .addTag('cats')
    .addTag('dogs')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
