import { ApiProperty } from '@nestjs/swagger';

export class SaveAttendanceCommand {
  @ApiProperty()
  id: number;

  @ApiProperty()
  card_id: number;

  @ApiProperty()
  reader_id: number;

  @ApiProperty()
  date: Date;
}
