/**
 * 일반적으로 별도의 파일에 모듈과 컨트롤러를 생성한다.
 * 이 예제에서는 파일 내에 직접 모듈과 컨트롤러 생성 예정
 */

// @nestjs/common 컨트롤러와 모듈을 만드는데 도움되는 도구이다.
import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

/**
 * Controller 클래스 생성
 * @Controller()는 데코레이터이다
 * 애플리케이션 내부에서 컨트롤러 역할을 할 클래스를 만들려고 한다는 것을 Nest에 알려준다
 * 들어오는 request를 처리하고 routing라는 클래스이다.
 * 클래스 내부에 다양한 메서드르르 추가한다
 * 각 메서드는 한 종류의 수신 요청을 처리하도록 설계 되었다
 * 특히 애플리케이션 내부에 또 다른 route를 원할때마다 추가 메서드를 추가하려한다
 *
 * e.g) 응용 프로그램 '/'에 대한 get 요청을 처리하고 싶다면 새 메서드를 추가할 수 있다
 * 누군가 요청할때마다 그 요청을 getRootRoute() 메서드로 라우팅하려 한다
 * common library를 이용하여 다른 도구를 가져올 수 있다 Get 데코레이터
 *
 */
@Controller()
class AppController {
  // // e.g) 응용 프로그램 '/'에 대한 get 요청을 처리하고 싶다면 새 메서드를 추가할 수 있다
  // getRootRoute() {

  // }
  /**
   * 누군가 route에 대해 요청할때마다 아래 메서드를 실행할 것이다.
   * 요청 응답을 위해 이 메서드에서 값을 반환한다.
   */
  @Get()
  getRootRoute() {
    return "Hi there!";
  }
}

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
class AppModule {}

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
