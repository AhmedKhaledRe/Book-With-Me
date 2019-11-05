import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgPipesModule} from 'ngx-pipes';

import { RentalComponent } from '../rental/rental.component';
import { RentalListComponent } from '../rental/rental-list/rental-list.component';
import { RentalListItemComponent } from '../rental/rental-list-item/rental-list-item.component';

import { RentalService } from "../rental/shared/rental.service";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';
import { MapModule } from '../common/map/map.module';

const routes: Routes = [
  { path: 'rentals',
   component: RentalComponent,
   children: [
     {path: '' , component: RentalListComponent},
     {path: ':rentalId' , component: RentalDetailComponent}
    ]
   }
];

@NgModule({
  declarations : [ RentalComponent,RentalListComponent, RentalListItemComponent, RentalDetailComponent ,UppercasePipe],
  imports : [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    MapModule
  ],
  providers : [RentalService]
})

export class RentalModule {}
