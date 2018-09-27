import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

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
    errorMessage: string;

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
    products: IProduct[] = [];

    //The constructor is a function that is executed when the component is initialized. 
    //This is the best place to initialize complex values such as filteredProducts. 
    //Variable declarated to hold the injected service instance.
    constructor(private productService: ProductService) {
        
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
    //since ngOnInit hook is executed after the constructor, we need to initialize the filtered product variable here
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;//when the suscriber emits the data, we set the products property
                this.filteredProducts = this.products //this way filtered products will be assigned when we actually got the data
            }, 
            error => this.errorMessage = <any>error //casting the error to any
        );
        
    }
}