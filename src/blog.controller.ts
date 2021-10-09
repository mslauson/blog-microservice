import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import * as blogPost from './dao/schemas/post.schema';
import { PostDto } from './dto/post.dto';

@Controller('/api/blog/v1')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getAllPosts(): Promise<blogPost.Post[]> {
    return this.blogService.getPosts();
  }

  @Post()
  insertPost(@Body() request: PostDto): Promise<blogPost.Post> {
    return this.blogService.insertPost(request);
  }
}
