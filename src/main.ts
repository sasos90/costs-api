import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  process.on('SIGINT', () => {
    // Stop the database gracefully
    /*db.stop((err) => {
      process.exit(err ? 1 : 0);
    });*/
  });
}
bootstrap();
