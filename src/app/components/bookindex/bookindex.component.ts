import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../service/service.book';


@Component({
  selector: 'app-bookindex',
  templateUrl: './bookindex.component.html',
  styleUrls: ['./bookindex.component.css']
})
export class BookindexComponent {
  title = 'NGLabb';

  bookList:Book[] = []

  authorN:string = ''

  bookObject:Book = {
    id:'',
    name:'',
    author:'',
    available:false,
    releaseDate:''
  }

  errorList:string[] = []

  constructor(private bookService:BookService){
  }

  ngOnInit():void{
    this.getAllBooks()
  }

  getAllBooks():void{
    this.bookService.getAllBooks().subscribe(response => {
      this.bookList = response.result
      this.errorList = response.errorMessages
      this.authorN = ''
    })
  }

  getBook(id:string):void{
    this.bookService.getBook(id).subscribe(response => {
      this.bookObject = response.result[0]
      this.errorList = response.errorMessages
    })
  }
  
  getBookSearch(id:string):void{
    this.bookService.getBook(id).subscribe(response => {
      this.bookList = response.result
      this.errorList = response.errorMessages
    })
  }

  getFromAuthor(authorName:string):void{
    this.bookService.getFromAuthor(authorName).subscribe(response => {
      this.bookList = response.result
      this.errorList = response.errorMessages
      this.authorN = authorName
    })
  }

  createBook(newBook:Book):void{
    this.bookService.createBook(newBook).subscribe(response => {
      this.errorList = response.errorMessages
      if (this.authorN == ''){
        this.getAllBooks()
      }
      else{
        this.getFromAuthor(this.authorN)
      }
      
    })
  }

  updateBook(id:string, updatedBook:Book):void{
    this.bookService.updateBook(id, updatedBook).subscribe(response => {
      this.errorList = response.errorMessages
      if (this.authorN == ''){
        this.getAllBooks()
      }
      else{
        this.getFromAuthor(this.authorN)
      }
    })
  }

  deleteBook(id:string):void{
    this.bookService.deleteBook(id).subscribe(response => {
      this.errorList = response.errorMessages
      if (this.authorN == ''){
        this.getAllBooks()
      }
      else{
        this.getFromAuthor(this.authorN)
      }
    })
  }
}
