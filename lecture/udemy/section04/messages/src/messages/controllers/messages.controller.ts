import { Controller, Get, Post, Body, Param } from '@nestjs/common';

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

  @Post()
  createMessages(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
