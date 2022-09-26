import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controllers/product.controller';
import { ProductPostEntity } from './models/Product/product.entity';
import { ProductPostCategoryEntity } from './models/Category/category.entity';
import { ProductCategoryService, ProductService } from './services/product.service';
import { ProductCategoriesController } from './controllers/category.controller';


@Module({
  imports:[
    TypeOrmModule.forFeature([ProductPostEntity,ProductPostCategoryEntity])
  ],
  controllers: [ProductCategoriesController,ProductController],
  providers: [ProductService,ProductCategoryService]
})
export class ProductModule {}
