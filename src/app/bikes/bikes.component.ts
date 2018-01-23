import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service'

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  providers: [ListingService]
})
export class BikesComponent implements OnInit {

  constructor(private listingService: ListingService) { }

  bikes: Listing[];

  ngOnInit() {
    this.bikes = this.listingService.getBikes(); 
  }

}
