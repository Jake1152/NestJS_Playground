import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

let service: AuthService;
/**
 * Q. @describe 데코레이터에 인자로 화살표 함수를 정의해서 쓰면
 *    async가 필요없는 이유
 * 2:35
 *   그런 다음 화살표 기능을 넣으면 async 키워드가 필요하지 않습니다.
 *   그런 다음 파일 내부의 다른 모든 항목을 잘라내어 해당 설명 안에 넣습니다. 모든 항목을 강조 표시하겠습니다.
 */
describe('AuthService', () => {
  beforeEach(async () => {
    // Create a fake copy of the users service
    //   const fakeUsersService = {
    //  Partial<UsersService> fake 메서드가 올바른 type을 가지고 있는지 확인해준다.
    const fakeUsersService: Partial<UsersService> = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instacne of auth service', async () => {
    expect(service).toBeDefined();
  });
});
