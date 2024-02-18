import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth') // 밑에 구현되는 메서드는 /auth/로 시작
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    console.log('body ', body);
    this.usersService.create(body.email, body.password);
  }

  // @Get('signup')
  // getUserList() {
  //   const usersList = this.usersService.find();
  //   return usersList;
  // }
}
