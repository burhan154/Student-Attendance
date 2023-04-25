import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "src/entities/room";
import { Repository } from "typeorm";
import { SaveRoomCommand } from "../impl/save-room.command";

@CommandHandler(SaveRoomCommand)
export class SaveRoomHandler implements ICommandHandler<SaveRoomCommand> {

    constructor(
        @InjectRepository(Room) private roomRepo: Repository<Room>,
      ) {}
    async execute(command: SaveRoomCommand) {
        var room = new Room();
        room.room_number = command.room_number;
        room.reader_id = command.reader_id;
        room.capacity = command.capacity;
        await this.roomRepo.insert(room);
    }
}
