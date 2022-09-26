import { BaseEntity, Column,  Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { IsNotEmpty, IsString, IsInt} from "class-validator";
// import { BookCategoryEntity } from "./category/category.entity";
// import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { BookCategoryEntity } from "../category/category.entity";
import { type } from "os";
import { Observable } from "rxjs";
// import { Factory } from 'nestjs-seeder';
// import {IsNotEmpty} from "@nestjs/common";

@Entity('book_details-1121')
export class BookEntity {
    @PrimaryGeneratedColumn()
    @IsInt()
    book_id: number;

    @Column({default: ''})
    @IsNotEmpty()
    @IsString()
    book_name: string;

    // @OneToMany(()=> BookCategoryEntity, 
    // (category:BookCategoryEntity)=>category.book, 
    // {onUpdate:'CASCADE',onDelete:'CASCADE'})
    // category:BookCategoryEntity[];

    // @OneToMany(()=> BookCategoryEntity, 
    // (category:BookCategoryEntity)=>category.book)
    // category:BookCategoryEntity[];
    // @JoinColumn({name:'category_id'})

    // recent
    // @OneToMany(()=> BookEntity, 
    // (book:BookEntity)=>book.category)
    // book:BookEntity[];
    // @JoinColumn({name:'category_id'})

    // category m-1 /
        // @ManyToMany(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book)
        // category:BookCategoryEntity;
        // @JoinTable({name:'category_id'}) 
        
        


    // @ManyToMany(()=> BookCategoryEntity, (category:BookCategoryEntity)=>category.book,
    // {cascade:true,eager:true}
    // // {onUpdate:'CASCADE',onDelete:'CASCADE'}
    // )
    // @JoinTable({
    //     name: "bookcategory123", // table name for the junction table of this relation
    //     joinColumn: {
    //         name: "book",
    //         referencedColumnName: "book_id",
    //         foreignKeyConstraintName:"book"
    //     },
    //     inverseJoinColumn: {
    //         name: "category",
    //         referencedColumnName: "categoryId",
    //         foreignKeyConstraintName:"category"
    //     }
    // })
    // category:BookCategoryEntity[];
   
    @Column()
    @IsNotEmpty()
    author: string ;

    @Column()
    @IsNotEmpty()
    @IsInt()
    price: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    // // @Factory(faker => faker.image.imageUrl())
    book_image: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    book_isbn: string;
    
    @IsNotEmpty()
    @ManyToMany(() => BookCategoryEntity, (categories) => categories.book, {
        // cascade: true,
        cascade:["insert", "update", "remove"],
        eager: true,
      })
      @JoinTable({name:"bookcategory123",
      joinColumn: {
        name: "book",
        referencedColumnName: "book_id",
        foreignKeyConstraintName:"book"
    },
    inverseJoinColumn: {
        name: "category",
        referencedColumnName: "categoryId",
        foreignKeyConstraintName:"category"
    }
})
    categories: Observable<BookCategoryEntity[]>;
    // tempData: any[];
}

