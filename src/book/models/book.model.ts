import {  IsInt, IsNotEmpty,  IsString, MaxLength, MinLength } from 'class-validator';
import { Observable } from 'rxjs';
import { BaseEntity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BookCategoryEntity } from '../category/category.entity';
import { BookEntity } from './book.entity';

export class BookModel extends BaseEntity {
  // @IsNotEmpty()
  //  @IsInt()
  // @MinLength(1)
  // @MaxLensgth(6)
  book_id: number;

  @IsNotEmpty()  @IsString()
  @MinLength(3)
  @MaxLength(30) book_name: string;
  
  // /recent
  // @OneToMany(()=> BookEntity, 
  //   (book:BookEntity)=>book.category)
  //   book:BookEntity[];
  //   @JoinColumn({name:'category_id'})

  @IsNotEmpty() @IsString()
  @MinLength(3)
  @MaxLength(30) author: string;

  @IsNotEmpty() @IsInt()
  // @MinLength(2)
   price: number;

  @IsNotEmpty() @IsString()
  @MinLength(4)
  @MaxLength(50)
   book_image: string;

  @IsNotEmpty() @IsString()
  @MinLength(13)
  @MaxLength(13) book_isbn: string;

  @ManyToMany(() => BookCategoryEntity, (categories) => categories.book, {
    cascade: true,
    // eager: true,
  })
categories:[];
// Promise<BookCategoryEntity[]>;
// Observable<BookCategoryEntity[]>;

}
