import { ApiProperty } from '@nestjs/swagger';

export class SaveReaderCommand {
  @ApiProperty()
  reader_name: string;

  @ApiProperty()
  location: string;
}
