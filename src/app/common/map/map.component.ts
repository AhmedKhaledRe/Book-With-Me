import { Component, Input, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MapService } from './map.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

	@Input() location: string;

  isPositionError: boolean = false;

	lat: number = 0;
  lng: number = 0;

  constructor(private mapService: MapService,
              private ref:ChangeDetectorRef) { }


  getLocation(location) {
    this.mapService.getGeoLocation(location).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.ref.detectChanges();
      }, () => {
        this.isPositionError = true;
        this.ref.detectChanges();
      });
  }

  mapReadyHandler() {
  	this.getLocation(this.location);
  }
}
