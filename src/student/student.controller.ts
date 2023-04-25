import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe  } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SaveStudentCommand } from './commands/impl/save-student.command';
import { GetStudentQuery } from './queries/impl/get-student.query';
import { ApiResponse ,getSchemaPath,ApiExtraModels ,ApiOperation} from '@nestjs/swagger';
import { Student } from 'src/entities/student';

@Controller('student')
export class StudentController {
  constructor(private readonly queryBus: QueryBus,
    private readonly commandBus:CommandBus) {}

  @Get('all')
  @ApiExtraModels(Student)
  @ApiResponse({ status: 200, description: 'Get all students', schema: {$ref: getSchemaPath(Student)} })
  async getAll() {
    return await this.queryBus.execute(new GetStudentQuery());
  }

  @Post('add')
  @HttpCode(201)
  @ApiExtraModels(Student)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEmployee(@Body() newStudent: SaveStudentCommand) {
    return await this.commandBus.execute(newStudent);
  }
}
