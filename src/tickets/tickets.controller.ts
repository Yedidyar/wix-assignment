import { Controller, Get, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  findAll(
    @Query('title') title: string,
    @Query('content') content: string,
    @Query('email') email: string,
  ) {
    return this.ticketsService.findAll();
  }
}
