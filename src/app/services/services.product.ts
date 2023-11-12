import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http'
import { TypeProduct } from "../modules/product";
import { Observable,throwError} from "rxjs";
import {delay, retry} from 'rxjs/operators'
import { ErrorServices } from "./error.services";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    constructor(private http:HttpClient,
        private errorServices: ErrorServices
        ){
    }
    getAll(): Observable<TypeProduct[]>{
       return this.http.get<TypeProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
            fromString: 'limit=5'
        })
       }).pipe(
        delay(1000),
        // retry(2),
        // catchErorr(this.errorHandler.bind(this))
       )
    }
    private errorHandler(error: HttpErrorResponse){
        this.errorServices.handler(error.message)
        return throwError(()=>error.message)
    }
}

function catchErorr(errorHandler: (error: HttpErrorResponse) => Observable<never>): import("rxjs").OperatorFunction<TypeProduct[], TypeProduct[]> {
    throw new Error("Function not implemented.");
}
