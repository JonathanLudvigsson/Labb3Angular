import { Component } from '@angular/core';
import { Book } from './models/book';
import { BookService } from './service/service.book';

import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NGLabb';

  bookList:Book[] = []

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
    })
  }

  createBook(newBook:Book):void{
    this.bookService.createBook(newBook).subscribe(response => {
      this.errorList = response.errorMessages
      this.getAllBooks()
    })
  }

  updateBook(id:string, updatedBook:Book):void{
    this.bookService.updateBook(id, updatedBook).subscribe(response => {
      this.errorList = response.errorMessages
      this.getAllBooks()
    })
  }

  deleteBook(id:string):void{
    this.bookService.deleteBook(id).subscribe(response => {
      this.errorList = response.errorMessages
      this.getAllBooks()
    })
  }
}
