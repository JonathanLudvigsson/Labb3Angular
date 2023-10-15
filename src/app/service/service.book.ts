import { HttpClient } from "@angular/common/http"
import { ApiResponse } from "../models/apiResponse"
import { Book } from "../models/book"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})

export class BookService{
    url = 'https://localhost:7030/api/book/'

    constructor(private http:HttpClient){

    }

    getAllBooks():Observable<ApiResponse>{
        return this.http.get<ApiResponse>(this.url)
    }

    getBook(id:string):Observable<ApiResponse>{
        return this.http.get<ApiResponse>(this.url + id)
    }

    getFromAuthor(authorName:string):Observable<ApiResponse>{
        return this.http.get<ApiResponse>(this.url + authorName)
    }

    createBook(newBook:Book):Observable<ApiResponse>{
        return this.http.post<ApiResponse>(this.url, newBook)
    }

    updateBook(id:string, updatedBook:Book):Observable<ApiResponse>{
        return this.http.put<ApiResponse>(this.url + id, updatedBook)
    }

    deleteBook(id:string):Observable<ApiResponse>{
        return this.http.delete<ApiResponse>(this.url + id)
    }

}