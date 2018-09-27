import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'] //We can add more style sheets here separated by commas
}) 
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    //Any is a type that we use when we don't care the data type. 

    filteredProducts: IProduct[];
    products: IProduct[] = [
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

    //The constructor is a function that is executed when the component is initialized. 
    //This is the best place to initialize complex values such as filteredProducts. 
    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = "Product List: " + message;
    }

    performFilter(filterBy: string) : IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product, IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    //Methods are written after the properties, by convention
    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}