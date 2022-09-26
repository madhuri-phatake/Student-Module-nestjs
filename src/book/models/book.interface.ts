import { IsInt, IsNotEmpty, IsString } from "class-validator";

export interface Book{
    book_id: number;
    book_name: string;
    author: string ;
    price: number;
    book_image: string;
    book_isbn: string;
    categories:any;
    // book_category: string;

}