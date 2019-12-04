import { Component, OnInit, NgModule } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(private rentalService : RentalService) { }

  ngOnInit() {
    const rentalObseravble = this.rentalService.getRentals();

    rentalObseravble.subscribe(
      (rentals : Rental[])=>{
        this.rentals = rentals;
      },
      (err)=>{

      },
      ()=>{

      }
    );
  }

}
