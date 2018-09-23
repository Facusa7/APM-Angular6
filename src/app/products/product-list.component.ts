import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
}) 
export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
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

    //Methods are written after the properties, by convention
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
}