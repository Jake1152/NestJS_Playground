import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

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
  @Get()
  listMessages() {}

  // body: any 타입스크립트에서는 any를 쓰지 않아야 의미 있다
  // 이 부분을 유효성검사가 포함된 dto타입으로 변경한다
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
