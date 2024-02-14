import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

/**
 * 기본적으로 여기 제공자 배열 안에 나열한
 * 모든 항목은 내보내기 목록에 추가하지 않는 한
 * 모듈 내에서만 액세스할 수 있습니다.
 */
@Module({
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
