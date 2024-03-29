/**
 * 일반적으로 별도의 파일에 모듈과 컨트롤러를 생성한다.
 * 이 예제에서는 파일 내에 직접 모듈과 컨트롤러 생성 예정
 */

// @nestjs/common 컨트롤러와 모듈을 만드는데 도움되는 도구이다.
import { Controller, Get } from "@nestjs/common";
// import { NestFactory } from "@nestjs/core";

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

/**
 * 컨트롤러 데코레이터 안에 넣은 모든 경로는 컨트롤러 내부에서 정의한 모든 경로 처리기에 적용된다
 */
@Controller("/app")
export class AppController {
  /**
   * 누군가 route에 대해 요청할때마다 아래 메서드를 실행할 것이다.
   * 요청 응답을 위해 이 메서드에서 값을 반환한다.
   */
  @Get("/dfdf")
  getRootRoute() {
    return "Hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there!";
  }
}
