import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
// 마지막으로 할 부분 애플리케이션 시작할때마다 실행할 함수를 추가한다
/**
 * 비동기 함수 추가,
 * 아래 함수 구현에서 AppModule에서 새 nest 애플리케이션을 만들게된다.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();

/**
 * 실행흐름
 * bootstrap() -> AppModule -> getRootRoute()
 */
