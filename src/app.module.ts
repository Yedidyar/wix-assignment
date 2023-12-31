import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [ConfigModule.forRoot(), TicketsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
