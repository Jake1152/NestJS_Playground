import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { UserDto } from '../users/dtos/user.dto';

/**
 * 이해해야 할 정말 중요한 것은 요청이 처리되기 전에 무언가를 수행하려는 경우 해당 코드를
여기에 입력한다는 것
 */

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {
    // console.log("Here is SerializeInterceptor's constrcutor");
  }

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // console.log(`In SerializeInterceptor, this.dto is`, this.dto);
    // console.log(`In SerializeInterceptor, this.dto is ${this.dto}`);
    return handler.handle().pipe(
      map((data: any) => {
        // return plainToClass(UserDto, data, {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
