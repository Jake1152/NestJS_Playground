import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

// 클래스를 DI container 내부에 등록하도록 표시하는 것이다.
// 데코레이터를 적용하면 등록 프로세스가 자동으로 발생합니다.
@Injectable()
export class MessagesService {
  /**
    줄을 바로 여기에 압축할 수 있습니다.
    지금 화면에 표시되는 것은 대신 public
    메시지를 작성하고 repository 작성한 다음 삭제하는 것과 100% 동일합니다. 
    생성자 내에서 할당하고 속성 초기화도 삭제합니다.

    typescript syntax sugar라고 함
    * 읽는사람 또는 작성하는 사람이 편하게 디자인 된 문법
   */
  constructor(public messageRepo: MessagesRepository) {
    this.messageRepo = messageRepo;
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
