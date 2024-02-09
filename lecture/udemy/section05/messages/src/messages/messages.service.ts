import { MessageRepository } from './messages.repository';

export class MessageService {
  messageRepo: MessageRepository;

  constructor() {
    // Service is creating its own depencies
    // Dont DO this on real apps
    this.messageRepo = new MessageRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  finAll(id: string) {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
