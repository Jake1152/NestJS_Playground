import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  // 바로 DB와 연결하지 않고 메모리에 담아서 처리
  private boards = [];

  getAllBoards() {
    return this.boards;
  }
}

// nest -g service boards

/** Board Service를 Board Controller에서 이용할 수 있게 해주기
 * (Dependency injeciton)
 */
