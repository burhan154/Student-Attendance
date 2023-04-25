import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/entities/room';
import { SaveRoomHandler } from './commands/handler/save-room.handler';
import { RoomController } from './room.controller';
import { GetRoomsHandler } from './queries/handlers/get-room.handler';

@Module({
  imports:[TypeOrmModule.forFeature([Room]), CqrsModule],
  controllers: [RoomController],
  providers:[GetRoomsHandler, SaveRoomHandler]
})
export class RoomModule {}
