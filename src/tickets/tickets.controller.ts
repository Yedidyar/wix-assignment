import { Controller, Get, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreationTimeFilterDto } from './dto/creation-time-filter.dto';

@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}
  @ApiQuery({
    name: 'title',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'content',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'email',
    type: String,
    required: false,
  })
  @Get()
  findAll(
    @Query('title') title?: string,
    @Query('content') content?: string,
    @Query('email') email?: string,
    @Query() creationTimeFilter?: CreationTimeFilterDto,
  ) {
    return this.ticketsService.findAll(
      { content, title, userEmail: email },
      creationTimeFilter,
    );
  }
}
