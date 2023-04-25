import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entities/student';
import { SaveStudentHandler } from './commands/handler/save-student.handler';
import { StudentController } from './student.controller';
import { GetStudentsHandler } from './queries/handlers/get-student.handler';

@Module({
  imports:[TypeOrmModule.forFeature([Student]), CqrsModule],
  controllers: [StudentController],
  providers:[GetStudentsHandler, SaveStudentHandler]
})
export class StudentModule {}
