import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
// import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  /**
   * 함수에 새 유효성 검사 파이프를 전달
   * 글로벌 파이프는 꽤 설명적입니다.
   * 원하는 경우 하나의 단일 루트 핸들러에만 파이프를 적용할 수 있습니다.
   * 하지만 이 경우엔 모든 수신 요청을 확인하려고 해요
   * 그래서 우리는 이 파이프를 전역적으로 적용할 것입니다.
   * 따라서 유효성 검사 파이프는 애플리케이션에 들어오는 모든 단일 수신 요청의 유효성을 검사하려고 시도합니다.
   * 이것이 모든 단일 루트 핸들러에 유효성 검사 규칙을 추가해야 한다는 의미는 아닙니다.
   * 유효성 검사 규칙을 추가하지 않으면 유효성 검사 파이프가 실행되지 않습니다.
   *
   * #요약
   * 우리는 이 파이프를 전역적으로 적용할 것
   * 유효성 검사 파이프는 애플리케이션에 들어오는 "모든 단일 수신 요청의 유효성을 검사하려고 시도"
   * 유효성 검사 규칙을 추가하지 않으면 유효성 검사 파이프가 실행되지 않습니다.
   */
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
