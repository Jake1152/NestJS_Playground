import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';
import { UserDto } from '../users/dtos/user.dto' }

/**
 * 이해해야 할 정말 중요한 것은 요청이 처리되기 전에 무언가를 수행하려는 경우 해당 코드를
여기에 입력한다는 것
 */

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled by the request handler
    console.log('I am running before the handler', context);

    //
    return handler.handle().pipe(
      map((data: any) => {
        // Run something
        console.log('I am running before response is sent out', data);
      }),
    );
  }
}
