"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const promises_1 = require("fs/promises");
class MessageRepository {
    async findOne(id) {
        const contents = await (0, promises_1.readFile)("messages.json", 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async findAll() {
        const contents = await (0, promises_1.readFile)("messages.json", 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }
    async create(message) {
    }
}
exports.MessageRepository = MessageRepository;
//# sourceMappingURL=messages.repository.js.map