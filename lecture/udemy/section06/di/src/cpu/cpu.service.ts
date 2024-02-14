import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  // private로 두는 이유?
  constructor(private powerService: PowerService) {}
}
