import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'pm-product-detail', this part is only needed if the component will be a nested one
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    /**
     * We use the instance of the ActivatedRoute service to get the desired parameter. 
     * There are two different ways to get the parameter. We could use a snapshot or we could use an observable. 
     * Use the snapshot approach if you only need to get the initial value of the parameter. 
     * The code is then a one-liner, as shown here. 
     * In our example, the user is always returned to the list page before navigating to another product, 
     * so the snapshot approach would be sufficient. 
     * If you expect the parameter to change without leaving the page, use an observable. 
     * For example, if we had a Next button on the Product Detail page to display the next product, 
     * the URL will change to the next product's ID, so you'd want to use an observable instead. 
     * We use the ActivatedRoute snapshot method here and access the appropriate parameter from its parameter array. 
     * The string specified here must match the name of the parameter from the path.
     */
   let id= +this.route.snapshot.paramMap.get('id'); // We use let here, which is new in ES2015, and defines a block scoped variable
   this.pageTitle += `: ${id}`;
   this.product =
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
   
  }

  onBack() : void {
    this.router.navigate(['/products']);
  }

}
