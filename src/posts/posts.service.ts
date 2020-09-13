import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { Repository } from 'typeorm';
import { Posts } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    return await this.postRepository.save(createPostDto)
  }

  async findAll(): Promise<Posts[]> {
    return await this.postRepository.find();
  }
}
