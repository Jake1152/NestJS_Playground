import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('AuthService', () => {
  let service: AuthService;

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

  it('creates a new users with a salted and hashed password', async () => {
    const user = await service.signup('asdfsdf@sdf.com', 'asdf');
    // hash화된 비번이 있어야한다
    expect(user.password).not.toEqual('asdfg');
    const [salt, hash] = user.password.split('$');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

});