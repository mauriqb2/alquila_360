import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AppDataSource from './data-source';

async function bootstrap() {
  try {
    AppDataSource.initialize()
  } catch (error) {
    console.log(error)
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
