import { Injectable } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreationTimeFilterDto } from './dto/creation-time-filter.dto';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  findAll(
    where: Partial<Pick<Ticket, 'content' | 'title' | 'userEmail'>>,
    creationTimeFilter: CreationTimeFilterDto,
  ): Promise<Ticket[]> {
    return this.prisma.ticket.findMany({
      where: {
        ...where,
        creationTime: {
          gte: creationTimeFilter.creation_time_from,
          lte: creationTimeFilter.creation_time_to,
        },
      },
    });
  }
}
