import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  /**
   * !종속성 주입은 제네릭과 제대로 작동하지 않는다.
   * @InjectRepository(User) 데코레이터는 "repo: Repository<User>"에서 제네릭 유형을 사용해야하기 때문에 필요하다고 한다.
   */
  //@InjectRepository() 를 user와 함께 호출
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    // 사용자 인스턴스 생성, 파라미터로 제공된 데이터를 객체에 추가
    const user = this.repo.create({ email, password });

    return this.repo.save({ email, password });
    // return this.repo.save(user);
  }

  // find() {
  //   const usersList = this.repo.find();
  //   return usersList;
  // }
}
