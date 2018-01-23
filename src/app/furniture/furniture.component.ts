import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service'

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
  providers: [ListingService]
})
export class FurnitureComponent implements OnInit {

  constructor(private listingService: ListingService) { }

  furnitures: Listing[];

  ngOnInit() {
    this.furnitures = this.listingService.getFurniture(); 
  }

}
