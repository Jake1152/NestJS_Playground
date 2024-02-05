/**
 * 일반적으로 별도의 파일에 모듈과 컨트롤러를 생성한다.
 * 이 예제에서는 파일 내에 직접 모듈과 컨트롤러 생성 예정
 */

// @nestjs/common 컨트롤러와 모듈을 만드는데 도움되는 도구이다.
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

/**
 * 모듈 데코레이터를 사용할 때 구성 옵션이나 개체를 전달해야한다
 *
 * 애플리케이션이 시작될떄마다 AppModule을 살펴보고
 *   이 부분에 나열된 모든 컨트롤러 찾고, 컨트롤러 클래스의 인스턴스를 생성할 것이다.
 */
// 컨트롤러의 속성
@Module({
  controllers: [AppController],
})
// export 추가
export class AppModule {}
