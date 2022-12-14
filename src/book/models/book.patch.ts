import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Observable } from "rxjs";
import { ManyToMany } from "typeorm";
import { BookCategoryEntity } from "../category/category.entity";

export class PatchBook {
    // constructor(parameters) {
        
    // }
    // @IsDefined()
    @IsNotEmpty() @IsInt() 
    @IsOptional() @ApiProperty ({required: false})
    book_id?: number;

    @IsNotEmpty() 
    @IsString()
    // @IsDefined()
    @MinLength(3)
    @MaxLength(30)
    @IsOptional() @ApiProperty ({required: false})
     book_name?: string;

    @IsNotEmpty() 
    @IsString() 
    // @IsDefined()
    @MinLength(3)
    @MaxLength(30)
    @IsOptional() @ApiProperty ({required: false})
    author?: string;

    @IsNotEmpty() 
    @IsInt() 
    // @IsDefined()
    // @MinLength(2)
    // @MaxLength(6)
    @IsOptional() @ApiProperty ({required: false})
    price?: number;

    @IsNotEmpty() 
    @IsString() 
    // @IsDefined()
    @MinLength(4)
    @MaxLength(50)
    @IsOptional() @ApiProperty ({required: false})
    book_image?: string;

    @IsNotEmpty() 
    @IsString()
    @MinLength(13)
    @MaxLength(13)
    @IsOptional() @ApiProperty ({required: false, default:false})
    book_isbn?: string;

    // @IsNotEmpty()
    // // @IsString()
    // @IsOptional() @ApiProperty ({required: false, default:false})
    // book_category: string;
    @IsOptional() @ApiProperty ({required: false, default:false})
    @ManyToMany(() => BookCategoryEntity, (categories) => categories.book, {
        cascade: true,
        eager: true,
      })

    categories:[];
    //  Observable<BookCategoryEntity[]>;
}