import { Injectable } from "@angular/core";
import { IProduct } from "./product";

//Each component has its injector since the injectors are created mirroring the component tree.
//It's up to us if we want to register a service for a particular component or we want to make it available
//for every service in the platform. That can be done with "providedIn" feature. 

//if we wanted to register a service for the component only, we'd need to declare that in the 
//component decorator of the component class: providers: [ProductService]
@Injectable({
    providedIn: 'root' //We tell Angular that this service can be accessed by any other component or service of the application
})
export class ProductService {
    getProducts() : IProduct[] {
        return [
            {
                "productId" : 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "September 22, 2018",
                "description": "Something dark but green at the same time",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId" : 5,
                "productName": "Hammer",
                "productCode": "TDX-0023",
                "releaseDate": "September 22, 2018",
                "description": "Something dark but green at the same time",
                "price": 52.99,
                "starRating": 4.8,
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }
        ];    
    }
}