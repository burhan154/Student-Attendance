import { ApiProperty } from '@nestjs/swagger';

export class SaveCardCommand {
  @ApiProperty()
  card_number: string;
}
