import { ApiProperty } from '@nestjs/swagger';

export class SaveRoomCommand {

  @ApiProperty()
  room_number: string;

  @ApiProperty()
  capacity: number;

  @ApiProperty()
  reader_id: number;
}
