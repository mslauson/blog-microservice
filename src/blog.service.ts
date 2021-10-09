import { Injectable } from '@nestjs/common';
import { PostService } from './dao/post.service';
import { Post } from './dao/schemas/post.schema';
import { PostDto } from './dto/post.dto';

@Injectable()
export class BlogService {
  constructor(private postService: PostService) {}

  async getPosts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  async insertPost(post: PostDto): Promise<Post> {
    return this.postService.insert(post);
  }
}
