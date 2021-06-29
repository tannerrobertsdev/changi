import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapService } from './service/map.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public bottomMenu = [
    { title: 'Map', icon: 'map.png' },
    { title: '', icon: '' },
    { title: 'CCTV', icon: 'cctv.png' },
    { title: 'ECM', icon: 'ecm.png' },
    { title: 'Vehicle Tracker', icon: 'tracker.png' },
    { title: 'Feedback', icon: 'feedbackgray.png' }
  ];

  public vehicleMenu = ['All', 'PK2', 'PK3', 'PK4', 'ARC', 'ITBT'];
  public clickedVehicelIndex: number;
  public clickedBottomIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
    private map: MapService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.clickedVehicelIndex = 0;
    this.clickedBottomIndex = 0;
    this.map.buildMap();
  }

  onClickVehicle(index: number) {
    this.clickedVehicelIndex = index;
  }

  onClickBottomMenu(index: number) {
    this.clickedBottomIndex = index;
  }
}
