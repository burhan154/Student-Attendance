import { ApiProperty } from '@nestjs/swagger';

export class SaveStudentCommand {
  @ApiProperty()
  name: string;
  @ApiProperty()
  student_id: string;
  @ApiProperty()
  card_id: number;
}
