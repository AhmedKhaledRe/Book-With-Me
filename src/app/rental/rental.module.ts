import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';

import { RentalComponent } from '../rental/rental.component';
import { RentalListComponent } from '../rental/rental-list/rental-list.component';
import { RentalListItemComponent } from '../rental/rental-list-item/rental-list-item.component';

import { RentalService } from "../rental/shared/rental.service";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';


const routes: Routes = [
  { path: 'rentals',
   component: RentalComponent,
   children: [
     {path: '' , component: RentalListComponent},
     {path: ':rentalId' , component: RentalDetailComponent}
    ]
   }  //{ path: 'path3', component: Name3Component },
  //{ path: 'path4', component: Name4Component },
  //{ path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  declarations : [ RentalComponent,RentalListComponent, RentalListItemComponent, RentalDetailComponent],
  imports : [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers : [RentalService]
})

export class RentalModule {}
