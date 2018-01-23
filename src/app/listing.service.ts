import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { FURNITURE } from './furniture-listings';
import { CARS } from './car-listings';
import { BIKES } from './bike-listings';

@Injectable()
export class ListingService {

  constructor() { }


  getFurniture() {
    return FURNITURE;
  }
  getBikes() {
    return BIKES;
  }
  getCars() {
    return CARS;
  }
}
