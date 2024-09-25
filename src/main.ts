import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import redoc from 'redoc-express';

function setupValidation(app: INestApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
}

function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('TODO APP API')
    .setDescription(
      'TODO APP API project built in NestJS using the CQRS pattern.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
}

function setupRedoc(app: INestApplication) {
  app.use(
    '/docs',
    redoc({
      title: 'TrackChain API',
      specUrl: 'api-docs-json',
    }),
  );
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupValidation(app);
  setupSwagger(app);
  setupRedoc(app);
  await app.listen(3000);
}

bootstrap();
