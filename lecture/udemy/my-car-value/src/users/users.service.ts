import { Injectable, NotFoundException } from '@nestjs/common';
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

    // return this.repo.save({ email, password });
    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  // update(
  //   id: number,
  //   newEmail: string,
  //   newPassword: string,
  //   newAge: number,
  //   newName: number,
  // ) {}

  /**
   *   Type helper가 Tyscript에서 정의된 거예요 이 파일이나
      그런 것에 불러올 필요가 없어요
      Partial Type helpe는 attrs이 어떤 개체든 될 수 있다는 걸 알려줍니다 
      적어도 또는 아무것도 없는 개체요
      사용자 클래스의 일부 속성이죠
   */
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('user not found');
      // NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    // user를 찾지 못하였다면 이미 DB에서 삭제되었다는 의미이다
    if (!user) {
      throw new Error('user not found');
    }
    // remove hook 실행됨
    return this.repo.remove(user);
  }
}
