import { Ticket as TicketModel } from '@prisma/client';

export class Ticket implements TicketModel {
  id: string;
  title: string;
  content: string;
  userEmail: string;
  creationTime: Date;
  labels: string[];
}
