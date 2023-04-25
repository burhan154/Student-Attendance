import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe  } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SaveCardCommand } from './commands/impl/save-card.command';
import { GetCardQuery } from './queries/impl/get-card.query';
import { ApiResponse ,getSchemaPath,ApiExtraModels ,ApiOperation} from '@nestjs/swagger';
import { Card } from 'src/entities/card';

@Controller('card')
export class CardController {
  constructor(private readonly queryBus: QueryBus,
    private readonly commandBus:CommandBus) {}

  @Get('all')
  @ApiExtraModels(Card)
  @ApiResponse({ status: 200, description: 'Get all cards', schema: {$ref: getSchemaPath(Card)} })
  async getAll() {
    return await this.queryBus.execute(new GetCardQuery());
  }

  @Post('add')
  @HttpCode(201)
  @ApiExtraModels(Card)
  @UsePipes(new ValidationPipe({ transform: true }))
  async createEmployee(@Body() newCard: SaveCardCommand) {
    return await this.commandBus.execute(newCard);
  }
}
