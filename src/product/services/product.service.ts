import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductData, ProductPostEntity} from '../models/Product/product.entity';
import { ProductPost, ProductPostCategoryInterface } from '../models/product.interface';
import { ProductPostCategoryEntity } from '../models/Category/category.entity';
import { ProductCategoryModelData } from '../models/Category/categoryModel';

@Injectable()
export class ProductService {


  // createProductCategory(productCatePost: ProductCategoryModelData): Observable<ProductPostCategoryInterface> {
  //   console.log("boom ba")
  //  throw new Error('Method not implemented.');
  // }
  constructor(
    @InjectRepository(ProductPostEntity)
    private readonly ProductPostRepository: Repository<ProductPostEntity>,
  ) { }
  // CREATE DATA:
  createPost(feedPost: ProductPost): Observable<ProductPost> {
    return from(this.ProductPostRepository.save(feedPost));
  }
  // FIND ALL DATA:
  findAllPost(): Observable<ProductPost[]> {
    return from(this.ProductPostRepository.find());
  }
  // FIND DATA BY ID:
  findById(id: number): Observable<ProductPost> {
    return from(this.ProductPostRepository.findOneBy({ id }));
  }
  // FIND DATA THROUGH EACH FIELD:
  findByQuery(id: number): Observable<ProductPost> {
    return from(this.ProductPostRepository.findOneBy({ id }));
  }
  // FIND DATA THROUGH PRICE FIELD:
  findPriceByQuery(price: number): Observable<ProductPost> {
    return from(this.ProductPostRepository.findOneBy({ price }))
  }
  // FIND DATA THROUGH STOCK FIELD:
  // findStockByQuery(stock:ProductData):Observable<ProductPost>{
  //   return from(this.ProductPostRepository.findOneBy({stock}))
  // }
  // FIND DATA THROUGH SIZE FIELD:
  // findSizeByQuery(size:ProductSize):Observable<ProductPost>{
  //   return from(this.ProductPostRepository.findOneBy({size}))
  // }
  // UPDATE THE WHOLE DATA:
  updateData(id: number, feedPost: ProductPost): Observable<UpdateResult> {
    return from(this.ProductPostRepository.update(id, feedPost));
  }
  // UPDATE SOME FEILDS OF THE DATA:
  updateSomeData(id: number, feedPost: ProductPost): Observable<UpdateResult> {
    return from(this.ProductPostRepository.update(id, feedPost));
  }
  // DELETE THE DATA THROUGH ID:
  DeleteData(id: number): Observable<DeleteResult> {
    return from(this.ProductPostRepository.delete(id));
  }
}



//-----ProductCategory---Services-------//
@Injectable()
export class ProductCategoryService{
  constructor(
    @InjectRepository(ProductPostCategoryEntity)
    private readonly ProductCategoryRepository:Repository<ProductPostCategoryEntity>
  ){}
   

  createProductCategory(categoPost:ProductPostCategoryEntity):Observable<ProductPostCategoryEntity>{
   
  return from(this.ProductCategoryRepository.save(categoPost))
  }

}


