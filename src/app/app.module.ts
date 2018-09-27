import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent],//this component belongs to this module 
  imports: [BrowserModule, FormsModule], //Every Angular application must import this, so the browsers can interpretate the angular modules. 
  bootstrap: [AppComponent] //Defines the startup component of the application. 
})
export class AppModule { }
