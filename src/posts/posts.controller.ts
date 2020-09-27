import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Posts } from './post.entity';

@Controller('/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }
  @Get()
  findAll(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

}
