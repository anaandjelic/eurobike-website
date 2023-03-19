import { Component, ViewChild } from '@angular/core';
import { MapComponent } from 'ng-leaflet-universal';
import { Marker } from 'ng-leaflet-universal/lib/models/marker.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class LeafletMapComponent {

  lat: number = 45.766890;
  lng: number = 19.119820;
  /*
  customIcon = icon({
    iconUrl: 'assets/images/marker-icon-2x.png',
    iconSize: [20, 32],
    iconAnchor: [16, 32]
  });

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'OpenStreetMap'
      }),
      marker([this.lat, this.lng], { icon: this.customIcon })
    ],
    zoom: 15,
    minZoom: 12,
    center: latLng(this.lat, this.lng)
  };
  */
  @ViewChild(MapComponent) mapComponent: MapComponent;
  markers: Marker[];
  
  constructor() {
    this.markers = [
      {
        id: "EuroBike",
        icon: 'assets/images/logo/logo-w.svg',
        location: {
          latitude: this.lat,
          longitude: this.lng,
        }
      }
    ];
  }
  
  ngAfterViewInit(): void {
    this.mapComponent.updateMarkers(this.markers);
  }
}
