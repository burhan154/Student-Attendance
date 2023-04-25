import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from 'src/entities/attendance';
import { Repository } from 'typeorm';
import { GetAttendanceQuery } from '../impl/get-attendance.query';

@QueryHandler(GetAttendanceQuery)
export class GetAttendancesHandler implements IQueryHandler<GetAttendanceQuery> {
  constructor(
    @InjectRepository(Attendance) private attendanceRepo: Repository<Attendance>,
  ) {}
  async execute(query: GetAttendanceQuery): Promise<Attendance[]> {
    return await this.attendanceRepo.find();
  }
}
