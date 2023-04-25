import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe  } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SaveRoomCommand } from './commands/impl/save-room.command';
import { GetRoomQuery } from './queries/impl/get-room.query';
import { ApiResponse ,getSchemaPath,ApiExtraModels ,ApiOperation} from '@nestjs/swagger';
import { Room } from 'src/entities/room';

@Controller('room')
export class RoomController {
  constructor(private readonly queryBus: QueryBus,
    private readonly commandBus:CommandBus) {}

  @Get('all')
  @ApiExtraModels(Room)
  @ApiResponse({ status: 200, description: 'Get all rooms', schema: {$ref: getSchemaPath(Room)} })
  async getAll() {
    return await this.queryBus.execute(new GetRoomQuery());
  }

  @Post('add')
  @HttpCode(201)
  @ApiExtraModels(Room)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEmployee(@Body() newRoom: SaveRoomCommand) {
    return await this.commandBus.execute(newRoom);
  }
}
