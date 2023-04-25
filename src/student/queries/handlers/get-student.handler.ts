import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student';
import { Repository } from 'typeorm';
import { GetStudentQuery } from '../impl/get-student.query';

@QueryHandler(GetStudentQuery)
export class GetStudentsHandler implements IQueryHandler<GetStudentQuery> {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}
  async execute(query: GetStudentQuery): Promise<Student[]> {
    return await this.studentRepo.find();
  }
}
