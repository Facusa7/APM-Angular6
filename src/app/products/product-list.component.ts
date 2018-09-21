import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
}) 
export class ProductListComponent {
    pageTitle: string = 'Product List';
    //Any is a type that we use when we don't care the data type. 
    products: any[] = [
        {
            "productId" : 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "September 22, 2018",
            "description": "Something dark but green at the same time",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.clipart.com/images/picks/animals/14292249.jpg"
        },
        {
            "productId" : 5,
            "productName": "Hammer",
            "productCode": "TDX-0023",
            "releaseDate": "September 22, 2018",
            "description": "Something dark but green at the same time",
            "price": 52.99,
            "starRating": 4.8,
            "imageUrl": "http://images.clipart.com/thw/thw13//CL/5344_2005010018/000803_1080_40/20253971.thc.jpg?000803_1080_4042_v__v"
        }
    ]
}