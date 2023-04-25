import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name:'room'})
export class Room {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  room_number: string;

  @ApiProperty()
  @Column()
  capacity: number;

  @ApiProperty()
  @Column()
  reader_id: number;
}