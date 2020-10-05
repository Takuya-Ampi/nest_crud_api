import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from "./user.custom.repository"
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto)
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }
  async createAndSave(createUserDto: CreateUserDto) {
    return await this.userRepository.createAndSave(createUserDto)
  }
  async findByName(name: string) {
    return await this.userRepository.findByName(name)
  }

}
