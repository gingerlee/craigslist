import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryComponent } from './directory/directory.component';
import { CarsTrucksComponent } from './cars-trucks/cars-trucks.component';
import { BikesComponent } from './bikes/bikes.component';
import { FurnitureComponent } from './furniture/furniture.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DirectoryComponent
  },
  {
    path: 'cars',
    component: CarsTrucksComponent
  },
  {
    path: 'bikes',
    component: BikesComponent
  },
  {
    path: 'furniture',
    component: FurnitureComponent
  },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
