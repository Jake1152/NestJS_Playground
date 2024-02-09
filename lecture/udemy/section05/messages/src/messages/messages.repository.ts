// 파일을 어떤식으로 저장할것인가?
import { readFile, writeFile } from "fs/promises";

export class MessageRepository {
    /**
     *  하드 드라이브에서 데이터를 읽어와야하므로 비동기 함수로 선언 및 정의한다.
     * 
     */
    async findOne(id: string) {
        const contents = await  readFile("messages.json", 'utf8')
        const messages = JSON.parse(contents);

        return messages[id];
        // return findAll()[id];
    }

    async findAll() {
        const contents = await  readFile("messages.json", 'utf8')
        const messages = JSON.parse(contents);

        return messages;
    }

    async create(message: string) {

    }
}