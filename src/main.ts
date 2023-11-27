import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './modules/common/provider/database.providers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 4004);
  console.log('starting on port' + (PORT || 4004));
}
bootstrap();
