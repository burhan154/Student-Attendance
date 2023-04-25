import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/entities/card';
import { SaveCardHandler } from './commands/handler/save-card.handler';
import { CardController } from './card.controller';
import { GetCardsHandler } from './queries/handlers/get-card.handler';

@Module({
  imports:[TypeOrmModule.forFeature([Card]), CqrsModule],
  controllers: [CardController],
  providers:[GetCardsHandler, SaveCardHandler]
})
export class CardModule {}
