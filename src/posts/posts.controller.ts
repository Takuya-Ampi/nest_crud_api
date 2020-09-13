import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostsService } from './posts.service';
import { Posts } from './post.entity';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post('/posts')
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
}

}
