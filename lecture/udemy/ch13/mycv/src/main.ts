import { NestFactory } from '@nestjs/core';
// import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// const cookieSession = require('cookie-session');
import { setupApp } from './setup-app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupApp(app);
  // app.use(
  //   cookieSession({
  //     keys: ['asdfasfd'],
  //   }),
  // );
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // );
  // (app as any).set('etag', false);
  // app.use((req, res, next) => {
  //   res.removeHeader('x-powered-by');
  //   res.removeHeader('date');
  //   next();
  // });
  await app.listen(3000);
}
bootstrap();
