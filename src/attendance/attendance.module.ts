import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from 'src/entities/attendance';
import { SaveAttendanceHandler } from './commands/handler/save-attendance.handler';
import { AttendanceController } from './attendance.controller';
import { GetAttendancesHandler } from './queries/handlers/get-attendance.handler';

@Module({
  imports:[TypeOrmModule.forFeature([Attendance]), CqrsModule],
  controllers: [AttendanceController],
  providers:[GetAttendancesHandler, SaveAttendanceHandler]
})
export class AttendanceModule {}
