import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

/**
 * user service 복사본 피룡
 */
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  // 가입에 초점을 맞춤
  async signup(email: string, password: string) {
    // See if email is in use
    const users = await this.usersService.find(email);
    // 중복 유저가 있다는 의미, 에러발생
    if (users.length) {
      throw new BadRequestException('emial in use');
    }

    // Hash the users pwassword

    // Create a new user and save it

    // return the user
  }

  signin() {}
}
