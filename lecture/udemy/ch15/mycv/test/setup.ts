import { rm } from 'fs/promises';
import { join } from 'path';
// 맨 처음에는 파일이 없어서 삭제가 불가능할 수 있으니 예외 처리한다.
global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (err) {
    console.error(`error: ${err}`);
  }
});
