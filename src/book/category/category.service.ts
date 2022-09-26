import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookEntity } from '../models/book.entity';
import { BookCategoryEntity } from './category.entity';
import { CategoryModel } from './category.model';
import { PatchCategory } from './category.patch';
import { Category } from './category.interface';

@Injectable()
export class CategoryService {
    
    constructor (
        @InjectRepository(BookCategoryEntity)
        private readonly bookCategoryRepository: Repository<BookCategoryEntity>
    ) {}
 

    
    addCategory(categoryModel: CategoryModel): Observable<BookCategoryEntity> {
            return from(this.bookCategoryRepository.save(categoryModel));
            // return from(this.bookRepository.save(bookModel,bookModel.book_image=this.imagepath));
            // return from(this.bookRepository.save(bookModel.book_image=this.imagepath));
        }
    
    // trail

    findAllCategory(): Observable<Category[]> {
        return from(this.bookCategoryRepository.find());
    }

    
    getSpecificCategory(id:number): Observable<Category> {
        
        const categoryId = id;
        return from(this.bookCategoryRepository.findOneBy({categoryId}));
      
    }

    getSpecificCategoryName(name:string): Observable<Category> {
        const categoryName = name;
        return from(this.bookCategoryRepository.findOneBy({categoryName}));
    }

    updatePutCategory(id: number, categoryModel: CategoryModel): Observable<UpdateResult>{
        return from(this.bookCategoryRepository.update(id,categoryModel));
    }

    updatePatchCategory(id: number, patchCategory: PatchCategory): Observable<UpdateResult>{
        return from(this.bookCategoryRepository.update(id,patchCategory));
    }

    deleteCategory(id: number): Observable<DeleteResult> {
        return from(this.bookCategoryRepository.delete(id));
    }
}
