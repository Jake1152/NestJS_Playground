"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const promises_1 = require("fs/promises");
class MessageRepository {
    async findOne(id) {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async findAll() {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }
    async create(content) {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await (0, promises_1.writeFile)('messages.json', JSON.stringify(messages));
    }
}
exports.MessageRepository = MessageRepository;
//# sourceMappingURL=messages.repository.js.map