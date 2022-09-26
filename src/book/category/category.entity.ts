import { BaseEntity, Column,  Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
import { BookEntity } from "../models/book.entity";
import { Observable } from "rxjs";
// import { Factory } from 'nestjs-seeder';
// import {IsNotEmpty} from "@nestjs/common";

@Entity('bookcategory1')
export class BookCategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    @IsInt()
    categoryId: number;

    @Column({default: ''})
    @IsNotEmpty()
    @IsString()
    categoryName: string;

    // @ManyToOne(()=> BookEntity, (book:BookEntity)=>book.category)
    // book:BookEntity;

    // recent
    // @ManyToOne(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
    // category:BookCategoryEntity;
    // book: any;

    // book one-M
    @ManyToMany(() =>BookEntity, (book) => book.categories)
    book:Observable<BookEntity[]>;
    // @JoinColumn({name:'category_id'})

    // @ManyToOne(()=> BookEntity, 
    // (book:BookEntity)=>book.category, 
    // {onUpdate:'CASCADE',onDelete:'CASCADE'})
    // book:BookEntity;

}

