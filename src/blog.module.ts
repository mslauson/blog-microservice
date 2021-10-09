import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { env } from 'process';
import { PostService } from './dao/post.service';

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_URI)],
  controllers: [BlogController],
  providers: [BlogService, PostService],
})
export class AppModule {}
