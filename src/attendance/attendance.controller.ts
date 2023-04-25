import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe  } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SaveAttendanceCommand } from './commands/impl/save-attendance.command';
import { GetAttendanceQuery } from './queries/impl/get-attendance.query';
import { ApiResponse ,getSchemaPath,ApiExtraModels ,ApiOperation} from '@nestjs/swagger';
import { Attendance } from 'src/entities/attendance';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly queryBus: QueryBus,
    private readonly commandBus:CommandBus) {}

  @Get('all')
  @ApiExtraModels(Attendance)
  @ApiResponse({ status: 200, description: 'Get all attendances', schema: {$ref: getSchemaPath(Attendance)} })
  async getAll() {
    return await this.queryBus.execute(new GetAttendanceQuery());
  }

  @Post('add')
  @HttpCode(201)
  @ApiExtraModels(Attendance)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEmployee(@Body() newAttendance: SaveAttendanceCommand) {
    return await this.commandBus.execute(newAttendance);
  }
}
