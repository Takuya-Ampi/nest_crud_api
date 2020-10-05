import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ){}
  async create(createProductDto: CreateProductDto) {
    return  await this.productRepository.save(createProductDto)
  }
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find()
  }

}
