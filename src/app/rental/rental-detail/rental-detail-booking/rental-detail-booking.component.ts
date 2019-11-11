import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
//import { Booking } from '../../../booking/shared/booking.model';
//import { Rental } from '../../shared/rental.model';
//import { HelperService } from '../../../common/service/helper.service';
//import { BookingService } from '../../../booking/shared/booking.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { ToastrService } from 'ngx-toastr';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { AuthService } from '../../../auth/shared/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-rental-detail-booking',
  templateUrl: './rental-detail-booking.component.html',
  styleUrls: ['./rental-detail-booking.component.css']
})
export class RentalDetailBookingComponent implements OnInit {

  @Input() price: number;

  public daterange: any = {};

  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    opens : 'left'
};

  constructor() { }

  ngOnInit() {
  }

    // see original project for full list of options
    // can also be setup using the config service to apply to multiple pickers


    public selectedDate(value: any, datepicker?: any) {
        // this is the date the iser selected
        console.log(value);

        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;

        // or manupulat your own internal property
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    }
}

