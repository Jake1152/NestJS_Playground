import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor();
    listMessages(): Promise<any>;
    createMessages(body: CreateMessageDto): Promise<void>;
    getMessages(id: string): Promise<any>;
}
