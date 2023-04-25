import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Card } from "src/entities/card";
import { Repository } from "typeorm";
import { SaveCardCommand } from "../impl/save-card.command";

@CommandHandler(SaveCardCommand)
export class SaveCardHandler implements ICommandHandler<SaveCardCommand> {

    constructor(
        @InjectRepository(Card) private cardRepo: Repository<Card>,
      ) {}
    async execute(command: SaveCardCommand) {
        var card = new Card();
        card.card_number = command.card_number;
        await this.cardRepo.insert(card);
    }
}
