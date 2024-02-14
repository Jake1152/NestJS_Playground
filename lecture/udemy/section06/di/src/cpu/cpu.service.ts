import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  // private로 두는 이유?
  constructor(private powerService: PowerService) {}
  /**
   * 10 watts 전력 사용
   * 10번 전달 예정
   */
  conpute(a: number, b: number) {
    console.log('Drawing 10 watss of power from Power Service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
