import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; //Declares the router directives 

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent, ProductDetailComponent, WelcomeComponent],//this component belongs to this module 
  imports: [
    BrowserModule, //Every Angular application must import this, so the browsers can interpretate the angular modules. 
    FormsModule, 
    HttpClientModule, 
    //by using hash style routing we indicate that is local routing and we don't need to perform a rewrite process in the webserver. 
    //Angular supports HTML5 routing (without #) and local one (/#/)
    //The order is important, the specific ones must be first, then the other ones. 
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'welcome', canActivate: [ProductDetailGuard] ,component: WelcomeComponent},
      { path: '', component: WelcomeComponent, pathMatch: 'full'}, //Default route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //When the url does not match, it's often used for 404 pages
    ], {useHash: true})], 
  bootstrap: [AppComponent] //Defines the startup component of the application. 
})
export class AppModule { }
