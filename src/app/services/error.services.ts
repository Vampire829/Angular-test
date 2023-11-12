import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ErrorServices{
    error$ = new Subject <string>()

    handler(message: string){
        this.error$.next(message)
    }
    clear(){
        this.error$.next('')
    }
}