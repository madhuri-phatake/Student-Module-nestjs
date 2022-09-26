import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,

  } from '@nestjs/common';
 

  import { Observable } from 'rxjs';
  import { DeleteResult, UpdateResult } from 'typeorm';
import { CategoryModel } from './category.model';
import { PatchCategory } from './category.patch';
import { CategoryService } from './category.service';
import { Category } from './category.interface';


  
  @Controller('category')
  export class CategoryController {
    constructor(private categoryService: CategoryService) {}
    
    @Post()
   
    add(@Body() categoryModel: CategoryModel): Observable<Category> {
      console.log(categoryModel);
      return this.categoryService.addCategory(categoryModel);
     
    }

  
    @Get()
    findAllCategory(): Observable<Category[]> {
      console.log("function called");
      
      return this.categoryService.findAllCategory();
    }
  
    @Get(':id')
    // getSpecificStudent(@Param('id') id:number): Book {
    getSpecificCategoryId(@Param('id') id: number): Observable<Category> {
      return this.categoryService.getSpecificCategory(id);
    }
  
    @Get('cname/:name')
    getSpecificCategoryName(@Param('name') name: string): Observable<Category> {
      return this.categoryService.getSpecificCategoryName(name);
    }
  
  
  
    @Put('put/:id')
    updatePut(
      @Param('id') id: number,
      @Body() categoryModel: CategoryModel,
    ): Observable<UpdateResult> {
      return this.categoryService.updatePutCategory(id, categoryModel);
    }
  
    @Patch('patch/:id')
    updatePatch(
      @Param('id') id: number,
      @Body() patchCategory: PatchCategory,
    ): Observable<UpdateResult> {
      return this.categoryService.updatePatchCategory(id, patchCategory);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.categoryService.deleteCategory(id);
    }
  }
  