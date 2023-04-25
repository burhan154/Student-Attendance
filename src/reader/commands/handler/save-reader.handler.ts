import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Reader } from "src/entities/reader";
import { Repository } from "typeorm";
import { SaveReaderCommand } from "../impl/save-reader.command";

@CommandHandler(SaveReaderCommand)
export class SaveReaderHandler implements ICommandHandler<SaveReaderCommand> {

    constructor(
        @InjectRepository(Reader) private readerRepo: Repository<Reader>,
      ) {}
    async execute(command: SaveReaderCommand) {
        var reader = new Reader();
        reader.location = command.location;
        reader.reader_name = command.reader_name;
        await this.readerRepo.insert(reader);
    }
}
