import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/entities/room';
import { Repository } from 'typeorm';
import { GetRoomQuery } from '../impl/get-room.query';

@QueryHandler(GetRoomQuery)
export class GetRoomsHandler implements IQueryHandler<GetRoomQuery> {
  constructor(
    @InjectRepository(Room) private roomRepo: Repository<Room>,
  ) {}
  async execute(query: GetRoomQuery): Promise<Room[]> {
    return await this.roomRepo.find();
  }
}
