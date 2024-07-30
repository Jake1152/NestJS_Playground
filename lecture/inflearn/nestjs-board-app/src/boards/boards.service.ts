import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {}

// nest -g service boards

/** Board Service를 Board Controller에서 이용할 수 있게 해주기
 * (Dependency injeciton)
 */
