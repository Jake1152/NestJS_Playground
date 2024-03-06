import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    // Create a fake copy of the users service
    //   const fakeUsersService = {
    //  Partial<UsersService> fake 메서드가 올바른 type을 가지고 있는지 확인해준다.
    // const fakeUsersService: Partial<UsersService> = {
    fakeUsersService = {
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

  it('creates a new users with a salted and hashed password', async () => {
    const user = await service.signup('asdfsdf@sdf.com', 'asdf');
    // hash화된 비번이 있어야한다
    expect(user.password).not.toEqual('asdfg');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  // 적어도 하나의 배열 리턴 확인
  // done은 끝났는지 확인하는 용도의 파리미터
  it('throws an error if user signs up with email that is in use', async (done) => {
    fakeUsersService.find = () =>
      Promise.resolve([{ id: 1, email: 'a', password: '1' } as User]);
    try {
      await service.signup('asdf@asdf.com', 'asdf');
    } catch (err) {
      // done();
    }
  });

  // signin test
  it('throws if signin is called with an unused email', async (done) => {
    try {
      await service.signin('asdf@asdf.com', 'asdf');
    } catch (err) {
      done();
    }
  });
});
