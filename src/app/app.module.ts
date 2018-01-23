import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { CarsTrucksComponent } from './cars-trucks/cars-trucks.component';
import { BikesComponent } from './bikes/bikes.component';
import { FurnitureComponent } from './furniture/furniture.component';

import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    CarsTrucksComponent,
    BikesComponent,
    FurnitureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
