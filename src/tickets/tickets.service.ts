import { Injectable } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParamsDto } from './dto/query-params.dto';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  findAll(queryParamsDto: QueryParamsDto): Promise<Ticket[]> {
    return this.prisma.ticket.findMany({
      where: {
        content: queryParamsDto?.content,
        userEmail: queryParamsDto?.email,
        creationTime: {
          gte: queryParamsDto?.creation_time_from,
          lte: queryParamsDto?.creation_time_to,
        },
      },
    });
  }
}
