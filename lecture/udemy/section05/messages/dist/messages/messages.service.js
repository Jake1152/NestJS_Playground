"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const messages_repository_1 = require("./messages.repository");
class MessageService {
    constructor() {
        this.messageRepo = new messages_repository_1.MessageRepository();
    }
    findOne(id) {
        return this.messageRepo.findOne(id);
    }
    finAll(id) {
        return this.messageRepo.findAll();
    }
    create(content) {
        return this.messageRepo.create(content);
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=messages.service.js.map