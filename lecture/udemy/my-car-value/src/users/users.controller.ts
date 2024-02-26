import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  // NotFoundException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';

@Controller('auth') // 밑에 구현되는 메서드는 /auth/로 시작
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    console.log('body ', body);
    this.usersService.create(body.email, body.password);
  }

  /**
   * param id param 데코레이터 요청 경로에서 정보를 추출 가능
   *
   * e.g) /auth/123324325
   * 문자열로 전달된 id 값을 number로 바꾸어서 service에 넘겨주어야한다.
   */
  /**
   * Interceptors 적용
   * response message에 대해서 instance를 JSON형태로 변환
   * UseInterceptors, ClassSerializerInterceptor 두 툴은
   *   나가는 응답을 가로채고 어떤 식으로든 처리하는 데 사용한다.
   */
  /**
   * @UseInterceptors(ClassSerializerInterceptor)
   * => @UseInterceptors(SerializeInterceptor)
   *
   */
  @UseInterceptors(SerializeInterceptor)
  @Get('/:id')
  findUser(@Param('id') id: string) {
    console.log('handler is running');
    return this.usersService.findOne(parseInt(id));
  }

  /**
   *
   * @param email
   * @returns user list
   */
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
