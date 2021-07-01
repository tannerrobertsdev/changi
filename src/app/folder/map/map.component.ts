import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MapService } from '../service/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() clickIndex = 0;

  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.buildMap();
  }


}
