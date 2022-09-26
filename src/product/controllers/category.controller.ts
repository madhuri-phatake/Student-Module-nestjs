import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProductCategoryModelData } from '../models/Category/categoryModel';
import { ProductPostCategoryInterface } from '../models/product.interface';
import { ProductCategoryService } from '../services/product.service';


@Controller('category')
export class ProductCategoriesController {
  constructor(private ProductCategoryService: ProductCategoryService) { }

  //--Category--Create--//
  @Post('/categoryCreate')
  categCreate(@Body() CatePost: ProductCategoryModelData): Observable<ProductPostCategoryInterface> {
    return this.ProductCategoryService.createProductCategory(CatePost);
  }

}