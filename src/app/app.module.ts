import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { CarsTrucksComponent } from './cars-trucks/cars-trucks.component';
import { BikesComponent } from './bikes/bikes.component';
import { FurnitureComponent } from './furniture/furniture.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    CarsTrucksComponent,
    BikesComponent,
    FurnitureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
