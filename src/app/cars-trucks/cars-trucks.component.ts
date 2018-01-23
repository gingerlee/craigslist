import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service'

@Component({
  selector: 'app-cars-trucks',
  templateUrl: './cars-trucks.component.html',
  styleUrls: ['./cars-trucks.component.css'],
  providers: [ListingService]
})
export class CarsTrucksComponent implements OnInit {

  constructor(private listingService: ListingService) { }

  cars: Listing[];

  ngOnInit() {
    this.cars = this.listingService.getCars(); 
  }

}
