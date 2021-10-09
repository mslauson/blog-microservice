import { Module } from '@nestjs/common';
import { AppController } from './blog.controller';
import { AppService } from './blog.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
