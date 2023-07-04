import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { Ticket } from '@prisma/client';

describe('TicketsController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = moduleFixture.get<PrismaService>(PrismaService);

    await app.init();
  });

  const findAllTicketsMockResponse = [
    {
      id: '7091aeb2-cbf4-504f-8ce6-dee773212074',
      title: 'View Count & Click Count',
      content: 'hello',
      userEmail: 'an@nagla.gh',
      creationTime: new Date('1970-01-01T00:00:10.000Z'),
      labels: ['View Count'],
    },
    {
      id: 'b52ad1dc-937b-54c3-81e9-2d433dd96bf6',
      title: 'setting up my login page profile',
      content: '',
      userEmail: 'cube@zo.lv',
      creationTime: new Date('1971-01-01T00:00:10.000Z'),
      labels: ['Login', 'Problem', 'Tutorial'],
    },
    {
      id: '2ac57041-5b6c-41b3-b127-27797d919cb1',
      title: 'setting up',
      content: '',
      userEmail: 'hello@zo.lv',
      creationTime: new Date('1971-05-01T00:00:10.000Z'),
      labels: ['Login'],
    },
  ];

  it('/tickets (GET)', () => {
    prisma.ticket.findMany = jest
      .fn()
      .mockReturnValueOnce(findAllTicketsMockResponse satisfies Ticket[]);

    return request(app.getHttpServer())
      .get('/tickets')
      .expect(200)
      .expect(
        findAllTicketsMockResponse.map(({ creationTime, ...rest }) => ({
          ...rest,
          creationTime: creationTime.toISOString(),
        })),
      );
  });

  it('/tickets (GET) filter by creationTime', () => {
    prisma.ticket.findMany = jest
      .fn()
      .mockReturnValueOnce(
        findAllTicketsMockResponse.slice(1) satisfies Ticket[],
      );

    return request(app.getHttpServer())
      .get('/tickets')
      .query({
        creation_time_from: '1971-01-01T00:00:10.000Z',
        creation_time_to: '1971-05-01T00:00:10.000Z',
      })
      .expect(200)
      .expect(
        findAllTicketsMockResponse
          .map(({ creationTime, ...rest }) => ({
            ...rest,
            creationTime: creationTime.toISOString(),
          }))
          .slice(1),
      );
  });
});
