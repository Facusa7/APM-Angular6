import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

//Each component has its injector since the injectors are created mirroring the component tree.
//It's up to us if we want to register a service for a particular component or we want to make it available
//for every service in the platform. That can be done with "providedIn" feature. 

//if we wanted to register a service for the component only, we'd need to declare that in the 
//component decorator of the component class: providers: [ProductService]
@Injectable({
    providedIn: 'root' //We tell Angular that this service can be accessed by any other component or service of the application
})
export class ProductService {
    private productUrl = 'api/products/products.json'; //Local file to simulate the webserver request

    constructor(private http: HttpClient){ }

    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=> console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error ocurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}