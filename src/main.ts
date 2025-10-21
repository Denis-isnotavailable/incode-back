import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: ['http://localhost:3000', 'https://incode-front.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 4200);
  console.log(`Server starts on port ${process.env.PORT ?? 4200}`);
}
bootstrap();
