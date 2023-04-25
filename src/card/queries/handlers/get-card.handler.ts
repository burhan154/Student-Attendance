import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/entities/card';
import { Repository } from 'typeorm';
import { GetCardQuery } from '../impl/get-card.query';

@QueryHandler(GetCardQuery)
export class GetCardsHandler implements IQueryHandler<GetCardQuery> {
  constructor(
    @InjectRepository(Card) private cardRepo: Repository<Card>,
  ) {}
  async execute(query: GetCardQuery): Promise<Card[]> {
    return await this.cardRepo.find();
  }
}
