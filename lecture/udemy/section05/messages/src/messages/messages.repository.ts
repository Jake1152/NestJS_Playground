// 파일을 어떤식으로 저장할것인가?
import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  /**
   *  하드 드라이브에서 데이터를 읽어와야하므로 비동기 함수로 선언 및 정의한다.
   *
   */
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
    // return findAll()[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    //a
    // 새로운 아이디를 임의로 생성
    return messages;
  }

  /**
   * 왜 id값을 random으로 만드는가
   * random이더라도 기존에 있는 id값과 겹치게 되는 경우에는 어떻게 되는가?
   */
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    // 인자로 넘어온 content를 넣어준다. 변수로 넣으면 변수명이 key가 되고 변수에 있는 값이 JSON의 value가 된다.
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));

    /**
         * 입력하고자 하는 값 가정, id 50을 무작위 생성한다고 가정
         {
            12: {id:12, content: "asd"},
            50: {id:50, content: messages},

         }
         */
  }
}
