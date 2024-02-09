import { MessageRepository } from './messages.repository';
export declare class MessageService {
    messageRepo: MessageRepository;
    constructor();
    findOne(id: string): Promise<any>;
    finAll(id: string): Promise<any>;
    create(content: string): Promise<void>;
}
