import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './entities/student';
import { StudentModule } from './student/student.module';
import { CardModule } from './card/card.module';
import { Card } from './entities/card';
import { Room } from './entities/room';
import { RoomModule } from './room/room.module';
import { Reader } from './entities/reader';
import { ReaderModule } from './reader/reader.module';
import { Attendance } from './entities/attendance';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      username: 'postgres',
      password:'secret',
      database:'project',
      entities:[Student,Card, Room,Reader,Attendance]
    }),
    StudentModule,
    CardModule,
    RoomModule,
    ReaderModule,
    AttendanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
