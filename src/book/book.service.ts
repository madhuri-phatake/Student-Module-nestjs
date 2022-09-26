import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { info } from 'console';
import { from, Observable } from 'rxjs';
import {  DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookCatEntity } from './category/category_book/bookcat.entity';
import { BookCat } from './category/category_book/bookcat.interface';
import { BookCatModel } from './category/category_book/bookcat.model';
import { BookEntity } from './models/book.entity';
import { Book } from './models/book.interface';
import { BookModel } from './models/book.model';
import { PatchBook } from './models/book.patch';

@Injectable()
export class BookService {

    // imagepath: string;
    constructor (
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>,
        @InjectRepository(BookCatEntity)
        private readonly bookCatRepository:Repository<BookCatEntity>
    ) {}
// tempBookCat:any;
// addBookData:object;
// addBookCatData:object;
    // addBook(bookModel: BookModel) {
    //     const newBook = this.bookRepository.create(bookModel);
    //     return this.bookRepository.save(newBook);
    //     // return from(this.bookRepository.save(book));
    // }

  // imagepath: string;

  // addBook(bookModel: BookModel): Observable<Book> {
  //     return from(this.bookRepository.save(bookModel));
  //     // return from(this.bookRepository.save(bookModel,bookModel.book_image=this.imagepath));
  //     // return from(this.bookRepository.save(bookModel.book_image=this.imagepath));
  // }


    // trial bookEntity
    // addBook(book: Book): Observable<BookEntity> {
    addBook(bookModel: BookModel): Promise<BookEntity> {


        console.log("book add",bookModel);
        let bookID;

        
        // async function thirdTable() {
        //     let cat = book.categories.map( a => {
        //         return a.categoryId;
        //     });
        //     console.log("category in s",cat);
        //     cat.map(a =>{
        //         let dt1 = {
        //             // book:book.book_id,
        //             book: 28,
        //             category: a,
        //         };
        //         console.log("obj demo " ,dt1);
                
        //         return from(this.bookCatRepository.save(dt1));
        //         // this.addBookCat(dt1);
        //     });
        // }
        
        // let tempDataCopy:BookEntity = new BookEntity();
        // let tempData:BookEntity = new BookEntity();
        let tempData:BookEntity = new BookEntity();

        // tempData.book_id = book.book_id;
        tempData.book_name = bookModel.book_name;
        tempData.author = bookModel.author;
        tempData.price = bookModel.price;
        tempData.book_image = bookModel.book_image;
        tempData.book_isbn = bookModel.book_isbn;
        let tempStore = tempData;
        // tempData.categories = [];
        // let query  =  
        //  let que  =  from(this.bookRepository.save(tempStore));

        // let func = async function dataSave() {
            // return from(this.bookRepository.save(tempStore));
            // return from(this.bookCatRepository.save());
            // let bookI = from(this.bookRepository.save(tempStore));
            // console.log("inserted", bookI);
            
            // bookID = bookI
            // return from(this.bookRepository.save(tempStore));
        // }
           
        // func();
        // thirdTable()
        // return
         this.bookRepository.save(tempStore).then(res => {
            bookID = res.book_id;
            throw1();
         }); 
         let demo;
        async function throw1(): Promise<BookCatEntity> {
            console.log("bookID   1 ", bookID);

            // bookModel.categories.forEach(a => {
            //     demo ={
            //         book: bookID,
            //         category: a.categoryId,
            //     }
            //     this.bookCatRepository.save(demo);
            // })
            return;
            // this.bookCatRepository.save()
            
        }
        return ;
        // let secondInsert= [];
        // let demo7 ;  


        // let tempStore2 = tempData.categories.forEach((ele)=>{
        //     ele.map((dt)=>{
        //         // dt.categoryId
        //         let xyz = bookModel.categories.forEach(d=> {
        //             d.map(t =>  d.map(a=> {
        //                 return a.categoryId
        //             }))
        //         });
        //         // dt.categoryName
        //         let def = bookModel.categories.forEach(d=> {
        //             d.map(t =>  d.map(a=> {
        //                 return a.categoryName;
        //             }));
        //         });

        //         let objtt = {
        //             // categoryId: dt.categoryId ,
        //             categoryId: xyz ,

        //             // categoryName:dt.categoryName,
        //             categoryName:def,
        //         }
        //         demo7 = objtt;
        //         secondInsert.push(objtt);
        //     });
        // });

        // console.log("as",demo7);
        
        // console.log("ttData", secondInsert);
        
        // let abc = (this.bookRepository.save(tempData));

        // let tempDataCopy1:BookCatEntity = new BookCatEntity();

        // tempDataCopy1.book = bookModel.categories.forEach((e)=>e.map(a)=> a.category);
        // tempDataCopy1.category = bo

               
        // return this.bookRepository.save(tempData);

        // this.addBookData = {
        //     book_id:bookModel.book_id,
        //     book_name:bookModel.book_name,
        //     author:bookModel.author,
        //     price:bookModel.price,
        //     book_image:bookModel.book_image,
        //     book_isbn:bookModel.book_isbn
        // };

            // return from(this.bookRepository.save(bookModel));      
        
            // return from(this.bookCatRepository.save(bookCatModel));
        // let done = func();  
        
            // return ;
    }

     // third Table
    // addBookCat(bookCatModel: BookCatModel): Observable<BookCatEntity> {
    // addBookCat(bookCatModel: BookCatModel): Observable<BookCatEntity> {

    //     // let bookCatModel1 :BookCatModel = new BookCatModel();
    //     // let tempData2:BookEntity = new BookEntity();
    //     // // tempData2.categories={}
    //     // let tempData3 : BookCatEntity = new BookCatEntity();
    //     // tempData3.book = 
    //     // tempData2.categories.forEach((e)=>{
    //     //     e.map((info)=>{
    //     //         tempData3.id = bookCatModel1.id;
    //     //         tempData3.book = bookCatModel1.book;
    //     //         //  bookModel.book_id;
    //     //         tempData3.category = info.categoryId;
    //     //         return from(this.bookCatRepository.save(tempData3));
    //     //     });
            
           
    //     // });

    //         return from(this.bookCatRepository.save(bookCatModel));

    //         // return from(this.bookRepository.save(bookCatModel));
    // }
    
    // getSpecificBookCatId(book:number): Observable<BookCat> {
    
    //     // return from(this.bookCatRepository.findOneBy({book}));
    //     return from(this.bookCatRepository.findOneBy({book}));
    //     // return from(this.bookCatRepository.findBy(book));
    // }
    
    // trail
  // third Table
  addBookCat(bookCatModel: BookCatModel): Observable<BookCatEntity> {
    return from(this.bookCatRepository.save(bookCatModel));
    // return from(this.bookRepository.save(bookCatModel));
  }

  // trail
  findAllBooks(): Observable<Book[]> {
    return from(this.bookRepository.find());
  }

   // third Table
    findAllBookCat(): Observable<BookCat[]> {
        return from(this.bookCatRepository.find());
        // return from(this.bookRepository.find());
    }
  
    getSpecificBookId(id:number): Observable<Book> {
        // return from(this.bookRepository.find(id));
        const book_id = id;
        return from(this.bookRepository.findOneBy({book_id}));
        // return from(this.bookRepository.find({book_id}));
    }

  getSpecificBookName(name: string): Observable<Book> {
    const book_name = name;
    return from(this.bookRepository.findOneBy({ book_name }));
  }

  getSpecificBookAuthor(author: string): Observable<Book> {
    // const author ;
    return from(this.bookRepository.findOneBy({ author }));
  }

  getSpecificBookImage(bimg: string): Observable<Book> {
    const book_image = bimg;
    return from(this.bookRepository.findOneBy({ book_image }));
  }

  getSpecificBookISBN(bisbn: string): Observable<Book> {
    const book_isbn = bisbn;
    return from(this.bookRepository.findOneBy({ book_isbn }));
  }

  getSpecificBookPrice(book_price: number): Observable<Book> {
    const price: number = book_price;
    return from(this.bookRepository.findOneBy({ price }));
  }


  updatePutBook(id: number, bookModel: BookModel): Observable<UpdateResult> {
    return from(this.bookRepository.update(id, bookModel));
  }

  updatePatchBook(id: number, patchBook: PatchBook): Observable<UpdateResult> {
    return from(this.bookRepository.update(id, patchBook));
  }

  deleteBook(id: number): Observable<DeleteResult> {
    return from(this.bookRepository.delete(id));
  }
}

