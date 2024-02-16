import { IsEmail, IsString } from 'class-validator';
/**
 * 유효성 검사 규칙 추가
 */
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
