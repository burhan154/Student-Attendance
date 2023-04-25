import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Reader } from 'src/entities/reader';
import { Repository } from 'typeorm';
import { GetReaderQuery } from '../impl/get-reader.query';

@QueryHandler(GetReaderQuery)
export class GetReadersHandler implements IQueryHandler<GetReaderQuery> {
  constructor(
    @InjectRepository(Reader) private readerRepo: Repository<Reader>,
  ) {}
  async execute(query: GetReaderQuery): Promise<Reader[]> {
    return await this.readerRepo.find();
  }
}
