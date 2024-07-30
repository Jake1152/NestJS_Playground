import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

// @Controller('boards')
// export class BoardsController {}

/**
 * Provider
 *
 * Nest의 기본 개념
 * Nest 클랙스는 서비스, 리포지토리, 팩터리, 헬퍼 등 프로바이더로 취급될 수 있따
 * 프로파이더의 주요 아이디어는
 * 종속성으로 주입할 수 있다는 것이다.
 * 즉, 객체는 서로 다양한 관계를 만들 수 있으며
 * 객체의 인스턴스를 "연결"하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있다.
 */

// # version 01
/**
 * 1. boardsService 파라미터에 BoardsService 객체를 타입으로 지정한다.
 * 2. 이 boardsService 파라미터를 BoardsController 클래스 안에서 사용하기 위해서
 *    this.boardsService 프로퍼티에 boardsSerivce 파라미터를 할당해준다.
 * 3. 하지만 타입스크립트에서는 선언한 값만 객체의 프로퍼티로 사용 가능하기 때문에
 *   위에 boardsService: BoardsService로 선언해준다.
 * 4. 이렇게 갖게된 boardsService 프로퍼티를 이용해서 BoardsController 클래스 안에서 활용 할 수 있다.
 */
// @Controller('boards')
// export class BoardsController {
//   boardsService: BoardsService;

//   constructor(boardsService: BoardsService) {
//     this.boardsService = boardsService;
//   }

//   @Get()
//   getAllTask(): Board[] {
//     return this.boardsService.getAllBoards();
//   }
// }

/**
 * 접근 제한자를 이용해서 소스 간단하게 하기
 * 접근 제한자(public, protected, private)을 생성자(constructor) 파라미터에 선언하면
 * 접근 제한자가 사용된 생성자 파라미터는
 * 암묵적으로 클래스 프로퍼티로 선언된다.
 *
 * 생성자 안에서 의존성 주입
 */
// # version 02
@Controller('boards')
export class BoardsController {
  // D.I
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }
}
