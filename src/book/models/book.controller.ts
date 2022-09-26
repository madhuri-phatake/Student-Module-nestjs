// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
//   Put,
//   Res,
//   UploadedFile,
//   UseInterceptors,
// } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { extname } from 'path';
// // import { IsNotEmpty } from 'class-validator';
// import { Observable } from 'rxjs';
// import { DeleteResult, UpdateResult } from 'typeorm';
// import { BookService } from './book.service';
// import { BookCat } from './category/category_book/bookcat.interface';
// import { BookCatModel } from './category/category_book/bookcat.model';
// import { BookEntity } from './models/book.entity';
// import { Book } from './models/book.interface';
// import { BookModel } from './models/book.model';
// import { PatchBook } from './models/book.patch';
// // import { PutBook } from './models/book.put';
// // import {Images} from '../../images';

// @Controller('book')
// export class BookController {
//   constructor(private bookService: BookService) {}
//   //  imagepath: string='';
//   // @Post()
//   // @IsNotEmpty()
//   // add(@Body() bookModel: BookModel): Observable<Book> {
//   //   // bookModel.author="vjvbczh";
//   //   console.log(bookModel);
    
//   //   // bookModel.book_image=this.imagepath;
//   //   return this.bookService.addBook(bookModel);
//   //   // return this.bookService.addBook(bookModel,bookModel.book_image=this.imagepath);
//   // }

//   // trial
//   @Post()
//   add(@Body() bookModel: BookModel): Observable<Book> {
//     // bookModel.author="vjvbczh";
//     console.log(bookModel);
//     // bookModel.book_image=this.imagepath;
//     return this.bookService.addBook(bookModel);
//     // return this.bookService.addBook(bookModel,bookModel.book_image=this.imagepath);
//   }

//   // bookCat
//   // @Post("/bookcat")
//   // addBookCat(@Body() bookCatModel: BookCatModel): Observable<BookCat> {
//   //   // bookModel.author="vjvbczh";
//   //   console.log(bookCatModel);
//   //   // bookModel.book_image=this.imagepath;
//   //   return this.bookService.addBookCat(bookCatModel);
//   //   // return this.bookService.addBook(bookModel,bookModel.book_image=this.imagepath);
//   // }
//   //trial

//   // @Post('/:add')
//   // @UseInterceptors(FileInterceptor('image'))
//   // postAdd(@UploadedFile() profilexyz: Array<Express.Multer.File>): object {
//   //   console.log(profilexyz);
//   //   return {
//   //     message: 'file uploaded',
//   //   };
//   // }

// // // post image in db
//   // @Post('image')
//   // @UseInterceptors(FileInterceptor('image',{
//   //   storage: diskStorage({
//   //     destination: './images',
//   //     filename:(req, image, callback) =>{
//   //       const uniqueSuffix = Date.now() +'-'+ Math.round(Math.random()*1e9);
//   //       const ext = extname(image.originalname);
//   //       // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
//   //       const filename = `${uniqueSuffix}${ext}`;
//   //       callback(null,filename);
//   //     }
//   //   }),
//   // }),
//   // )
//   // handleupload(@UploadedFile() image:Express.Multer.File){
//   //   this.imagepath = image.path;
//   //   console.log('image', image); 
//   //   console.log('path',image.path);
//   //   console.log(image);
    
//   //   console.log("file upload API "+this.imagepath);
//   //   return this.imagepath;
//   //   // return "file upload API "+this.imagepath;
//   //   // return this.bookService.handleupload(image);
//   // }
 
//   // // image data get 
//   // @Get('images/:image')
//   //// @Get('showimages/:image')
//   // seeUploadedFile(@Param('image') image, @Res() res) {
//   //   return res.sendFile(image, { root: './images' });
//   // }


//   @Get()
//   findAllBook(): Observable<Book[]> {
//     console.log("function called");
    
//     return this.bookService.findAllBooks();
//   }

//   // @Get("/bookcat")
//   // findAllBookCat(): Observable<Book[]> {
//   //   console.log("function called");
    
//   //   return this.bookService.findAllBookCat();
//   // }

//   @Get(':id')
//   // getSpecificStudent(@Param('id') id:number): Book {
//   getSpecificBookId(@Param('id') id: number): Observable<Book> {
//     return this.bookService.getSpecificBookId(id);
//   }

//   @Get('bname/:name')
//   getSpecificBookName(@Param('name') name: string): Observable<Book> {
//     return this.bookService.getSpecificBookName(name);
//   }

//   @Get('author/:author')
//   getSpecificBookAuthor(@Param('author') author: string): Observable<Book> {
//     return this.bookService.getSpecificBookAuthor(author);
//   }

//   @Get('price/:price')
//   getSpecificBookPrice(@Param('price') price: number): Observable<Book> {
//     return this.bookService.getSpecificBookPrice(price);
//   }
//   // @Get('bimg/:bimg')
//   // getSpecificBookImage(@Param('bimg') bimg: string): Observable<Book> {
//   //   return this.bookService.getSpecificBookImage(bimg);
//   // }

//   @Get('isbn/:bisbn')
//   getSpecificBookISBN(@Param('bisbn') bisbn: string): Observable<Book> {
//     return this.bookService.getSpecificBookISBN(bisbn);
//   }

//   // @Put('put/:id')
//   // updatePut(
//   //   @Param('id') id: number,
//   //   @Body() bookModel: BookModel,
//   // ): Observable<UpdateResult> {
//   //   return this.bookService.updatePutBook(id, bookModel);
//   // }

//   @Put('put/:id')
//   updatePut(
//     @Param('id') id: number,
//     @Body() bookModel: BookModel,
//   ): Observable<UpdateResult> {
//     return this.bookService.updatePutBook(id, bookModel);
//   }

//   // @Patch(':id')
//   // updatePatch(
//   //     @Param('id') id:number,
//   //     @Body() bookModel: BookModel,
//   // ): Observable<UpdateResult> {
//   //     return this.bookService.updatePatchBook(id,bookModel)
//   // }

//   @Patch('patch/:id')
//   updatePatch(
//     @Param('id') id: number,
//     @Body() patchBook: PatchBook,
//   ): Observable<UpdateResult> {
//     return this.bookService.updatePatchBook(id, patchBook);
//   }

//   @Delete(':id')
//   delete(@Param('id') id: number): Observable<DeleteResult> {
//     return this.bookService.deleteBook(id);
//   }
// }
