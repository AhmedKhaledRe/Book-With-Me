import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgPipesModule} from 'ngx-pipes';
import { Daterangepicker } from 'ng2-daterangepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RentalComponent } from '../rental/rental.component';
import { RentalListComponent } from '../rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';

import { RentalService } from "../rental/shared/rental.service";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';
import { MapModule } from '../common/map/map.module';

import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { HelperService } from '../common/service/helper.service';
import { BookingService } from '../booking/shared/booking.service';
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';

const routes: Routes = [
  { path: 'rentals',
   component: RentalComponent,
   children: [
     {path: '' , component: RentalListComponent},
     {path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard] },
     {path: ':rentalId' , component: RentalDetailComponent },
     {path: ':city/homes', component: RentalSearchComponent}
    ]
   }
];

@NgModule({
  declarations : [ RentalComponent,RentalListComponent, RentalListItemComponent, RentalDetailComponent ,UppercasePipe, RentalDetailBookingComponent, RentalSearchComponent, RentalCreateComponent],
  imports : [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    MapModule,
    Daterangepicker,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [RentalService,HelperService,BookingService]
})

export class RentalModule {}
