import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), PostModule, UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
