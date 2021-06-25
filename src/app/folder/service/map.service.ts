import { Injectable } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/satellite-v9';
  lat = 39.259036;
  lng = -111.638097;
  zoom = 15;

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
   this.map.addControl(new mapboxgl.NavigationControl());
  }
}
