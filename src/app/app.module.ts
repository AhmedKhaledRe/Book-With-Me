import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { RentalModule } from "./rental/rental.module";
import { CommonModule } from "@angular/common";
import { MapModule } from './common/map/map.module';

const routes: Routes = [
  { path: '', redirectTo: '/rentals' ,pathMatch: 'full'}
];

export class FeatureRoutingModule {}

@NgModule({
  declarations: [
    AppComponent,HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule,
    CommonModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
