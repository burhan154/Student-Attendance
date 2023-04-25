import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reader } from 'src/entities/reader';
import { SaveReaderHandler } from './commands/handler/save-reader.handler';
import { ReaderController } from './reader.controller';
import { GetReadersHandler } from './queries/handlers/get-reader.handler';

@Module({
  imports:[TypeOrmModule.forFeature([Reader]), CqrsModule],
  controllers: [ReaderController],
  providers:[GetReadersHandler, SaveReaderHandler]
})
export class ReaderModule {}
