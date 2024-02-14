import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

/**
 * Module의 역할은 무엇인가?
 */
@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
  // thingsThatCanBeUsedAsDependenciesForOtherClasses: [],
})
export class MessagesModule {}
