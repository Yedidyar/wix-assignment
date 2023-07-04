import { Injectable } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParamsDto } from './dto/query-params.dto';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  findAll({
    creation_time_from,
    creation_time_to,
    email,
    ...rest
  }: QueryParamsDto): Promise<Ticket[]> {
    return this.prisma.ticket.findMany({
      where: {
        ...rest,
        userEmail: email,
        creationTime: {
          gte: creation_time_from,
          lte: creation_time_to,
        },
      },
    });
  }
}
