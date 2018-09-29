import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; //Declares the router directives 

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],//this component belongs to this module 
  imports: [
    BrowserModule, //Every Angular application must import this, so the browsers can interpretate the angular modules. 
    HttpClientModule, 
    //by using hash style routing we indicate that is local routing and we don't need to perform a rewrite process in the webserver. 
    //Angular supports HTML5 routing (without #) and local one (/#/)
    //The order is important, the specific ones must be first, then the other ones. 
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', component: WelcomeComponent, pathMatch: 'full'}, //Default route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //When the url does not match, it's often used for 404 pages
    ], {useHash: false}), ProductModule], 
  bootstrap: [AppComponent] //Defines the startup component of the application. 
})
export class AppModule { }
