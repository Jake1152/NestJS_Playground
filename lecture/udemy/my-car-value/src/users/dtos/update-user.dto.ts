import { IsEmail, IsString, IsOptional } from 'class-validator';

/**
 * IsOptional
 *
 * 클래스 내부의 모든 속성에 적용할 수 있으며
 * 전자 메일 또는 문자열과 같은 다른 데코레이터가 있는
 * 경우 해당 속성은 선택 사항으로 표시됩니다.
 */
export class UpdateUserDto {
  // 선택 사항임을 IsOptional 데코레이터를 통해 명시
  // email 값이 없어도 문제 되지 않는다
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
