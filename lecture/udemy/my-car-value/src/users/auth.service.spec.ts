import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

it('can create an instacne of auth service', async () => {
  // Create a fake copy of the users service
  //   const fakeUsersService = {
  //  Partial<UsersService> fake 메서드가 올바른 type을 가지고 있는지 확인해준다.
  const fakeUsersService: Partial<UsersService> = {
    // find: () => Promise.resolve([]),
    find: () => Promise.resolve(1232132131),
    create: (email: string, password: string) =>
      Promise.resolve({ id: 1, email, password }),
  };

  //   const arr = await fakseUsersService.find();

  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      {
        provide: UsersService,
        useValue: fakeUsersService,
      },
    ],
  }).compile();

  const service = module.get(AuthService);

  expect(service).toBeDefined();
});
