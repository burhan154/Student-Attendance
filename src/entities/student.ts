import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Student {
  
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  student_id: string;

  @ApiProperty()
  @Column()
  card_id: number;

  @ApiProperty()
  @Column()
  validate_date: Date;
}