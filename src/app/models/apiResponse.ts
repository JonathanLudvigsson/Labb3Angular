import { Book } from "./book"

export interface ApiResponse{
    success:string
    result:Book[]
    statusCode:string
    errorMessages:string[]
}