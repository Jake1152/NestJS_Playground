import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

// 왜 require를 쓰는가?
const cookieSession = require('cookie-session');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // database: 'db.sqlite',
      // 간단하게 하는 방법
      database: process.env.NODE_ENV === 'test' ? 'test.sqlite' : 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // from main.ts's globalPipe
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
/**
 * 이 접근 방식의 단점은 우리가 물건을 연결하고 일종의 공식적인
다음 방법이 있음에도 불구하고 
한 위치와 파이프를 한 눈에 보고 어떤 파이프, 미들웨어가 무엇인지
이해하는 것이 훨씬 더 어렵다는 것입니다.
 */
// 응용 프로그램 시작할때 마다 적용될 것이다.
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: ['asdfasfd'],
        }),
      )
      .forRoutes('*');
  }
}
