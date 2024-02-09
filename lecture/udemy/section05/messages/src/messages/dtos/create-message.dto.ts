import { IsString} from 'class-validator'
/**
 * Class Validator를 추가하여 유효성 검사 규칙을 클래스 자체에 이식하낟
 * 
 * Q. Decorator에 ()를 써서 호출해야하는 문법적 이유?
 */
export class CreateMessageDto {

    // @IsString() 데코레이터를 통해 content 속성이 실제로 정의되지 않은 null이 아닌 문자열인지 확인할 수 있다
    @IsString()
    content: string;
}


