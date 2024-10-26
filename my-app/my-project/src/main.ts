import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurarea Swagger
  const config = new DocumentBuilder()
    .setTitle('Documentația API')
    .setDescription('Documentația API folosind Swagger')
    .setVersion('1.0')
    .addTag('produse')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
