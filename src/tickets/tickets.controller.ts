import { Controller, Get, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { ApiTags } from '@nestjs/swagger';
import { QueryParamsDto } from './dto/query-params.dto';
import { FindAllTicketsOutputDto } from './dto/find-all-tickets-output.dto';

@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  findAll(
    @Query() queryParamsDto?: QueryParamsDto,
  ): Promise<FindAllTicketsOutputDto[]> {
    return this.ticketsService.findAll(queryParamsDto);
  }
}
