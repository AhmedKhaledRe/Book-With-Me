import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

import * as moment from 'moment';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  rating: number;

  constructor(private route: ActivatedRoute,
              private rentalService: RentalService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		(params) => {
        this.getRental(params['rentalId']);
  		})
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      });
  }



  formatDate(date: string): string {
    return `${moment(date).fromNow()}`;
  }

}
