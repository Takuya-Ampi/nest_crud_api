import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  create(@Body() createProductDto: CreateProductDto){
    return this.productService.create(createProductDto)
  }
  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }
}
