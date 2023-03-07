import { Component } from '@angular/core';
import { tileLayer, latLng, marker, icon } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  lat = 45.766890;
  lng = 19.119820;
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

}
