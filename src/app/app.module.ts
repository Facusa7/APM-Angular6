import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],//this component belongs to this module 
  imports: [BrowserModule], //Every Angular application must import this, so the browsers can interpretate the angular modules. 
  bootstrap: [AppComponent] //Defines the startup component of the application. 
})
export class AppModule { }
