import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth') // 밑에 구현되는 메서드는 /auth/로 시작
export class UsersController {
  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }
  // DAO
}

// Route path example : auth/dfgkldfsjgkls
