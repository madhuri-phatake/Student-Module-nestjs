import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductPost, ProductPostCategoryInterface } from '../models/product.interface';

import { ProductService } from '../services/product.service';
import { CreateUserModel } from '../models/Product/productModel';
import { FileInterceptor } from '@nestjs/platform-express';
//import { diskStorage } from 'multer';
import { extname } from 'path';
//import { PatchProductModel } from '../models/productPatchModel';
import { diskStorage } from 'multer';
import { ProductCategoryModelData } from '../models/Category/categoryModel';
import { ProductCategoryService } from '../services/product.service';

@Controller('product')
export class ProductController {
  imagepath: string;
  constructor(private ProductService: ProductService) { }

  @Post('/create')
  create(@Body() productPost: CreateUserModel): Observable<ProductPost> {
    return this.ProductService.createPost(productPost);
  }


  //--Category--Create--//
  // @Post('/categoryCreate')
  // categCreate(@Body() productCatePost: ProductCategoryModelData): Observable<ProductPostCategoryInterface> {
  //   return this.ProductCa.createProductCategory(productCatePost);
  // }



  @Get('/allData')
  findPost(): Observable<ProductPost[]> {
    return this.ProductService.findAllPost();
  }
  @Get(':id')
  findPostId(
    @Param(
      'id'
    )
    id: number,
  ): Observable<ProductPost> {
    return this.ProductService.findById(id);
  }
  // @Get('price/:price')
  // findPostPriceQuery(@Param('price') price: number): Observable<ProductPost> {
  //   console.log(price);
  //   return this.ProductService.findPriceByQuery(price);
  // }
  // @Get('stock/:stock')
  // findPostStockQuery(
  //   @Param('stock') stock: ProductData,
  // ): Observable<ProductPost> {
  //   return this.ProductService.findStockByQuery(stock);

  //}

  // @Get('size/:size')
  // findPostSizeQuery(
  //   @Param('size') size:ProductSize,
  // ): Observable<ProductPost> {
  //   return this.ProductService.findSizeByQuery(size);
  // }

  // @Get()
  // findPostQuery(
  //   @Query(
  //     'id'
  //   )
  //   id:number,
  // ): Observable<ProductPost> {
  //   return this.ProductService.findByQuery(id);
  // }

  @Put(':id')
  updatePost(
    @Param(
      'id'
    )
    id: number,
    @Body() productPost: CreateUserModel,
  ): Observable<UpdateResult> {
    return this.ProductService.updateData(id, productPost);
  }

  @Patch(':id')
  updateSomeData(
    @Param(
      'id',
    )
    id: number,
    @Body() feedPost: CreateUserModel,
  ): Observable<UpdateResult> {
    return this.ProductService.updateSomeData(id, feedPost);
  }
  @Delete(':id')
  deletePost(
    @Param(
      'id'
    )
    id: number,
  ): Observable<DeleteResult> {
    return this.ProductService.DeleteData(id);
  }
  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: (req, image, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(image.originalname);
          // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload API';
  }
  @Get('showimage/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}


