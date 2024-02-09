import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

/**
 * 컨트롤러 생성할 때 자동으로 여기에 추가된 메시지 문자열을 얻는다
 * 그러므로 @Controller('messages') 데코레이터 밑에 있는 MessageController 코드 블럭내에
 * 라우팅에 일일이 'meesages/'를 추가할 필요가 없다
 * 이미 @Controller('messages') 데코레이터를 위에서 씀으로 라우팅 경로에 'meesages/'포함되게 되었다
 */
/**
 * Get,Post는 method decorator
 * Body, Param은 arugment decorator
 */

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // 실제 앱 사용 종송성 주입에서는 이 작업을 수행하지 않는다.
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

  // 핵심은 return!!
  // return을 안하면 아무것도 데이터를 보내지 않을 것이다.
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  // body: any 타입스크립트에서는 any를 쓰지 않아야 의미 있다
  // 이 부분을 유효성검사가 포함된 dto타입으로 변경한다
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
    // console.log(body);
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    // file 읽는 데 시간이 걸리므로 await 필수
    const message = await this.messagesService.findOne(id);
    // NotFoundException

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
    // console.log(id);
  }
}
