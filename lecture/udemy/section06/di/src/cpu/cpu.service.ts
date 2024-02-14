import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  // private로 두는 이유?
  constructor(private powerService: PowerService) {}
  conpute(a: number, b: number) {
    console.log('Drawing 10 watss of power from Power Service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
