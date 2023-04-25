import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe  } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SaveReaderCommand } from './commands/impl/save-reader.command';
import { GetReaderQuery } from './queries/impl/get-reader.query';
import { ApiResponse ,getSchemaPath,ApiExtraModels ,ApiOperation} from '@nestjs/swagger';
import { Reader } from 'src/entities/reader';

@Controller('reader')
export class ReaderController {
  constructor(private readonly queryBus: QueryBus,
    private readonly commandBus:CommandBus) {}

  @Get('all')
  @ApiExtraModels(Reader)
  @ApiResponse({ status: 200, description: 'Get all readers', schema: {$ref: getSchemaPath(Reader)} })
  async getAll() {
    return await this.queryBus.execute(new GetReaderQuery());
  }

  @Post('add')
  @HttpCode(201)
  @ApiExtraModels(Reader)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEmployee(@Body() newReader: SaveReaderCommand) {
    return await this.commandBus.execute(newReader);
  }
}
