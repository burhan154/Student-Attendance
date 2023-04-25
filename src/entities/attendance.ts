import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name:'attendance'})
export class Attendance {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  card_id: number;

  @ApiProperty()
  @Column()
  reader_id: number;

  @ApiProperty()
  @Column()
  date: Date;
}