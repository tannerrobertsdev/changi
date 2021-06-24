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
    { title: 'Map', icon: 'map' },
    { title: 'CCTV', icon: 'videocam' },
    { title: 'ECM', icon: 'tv' },
    { title: 'Tracker', icon: 'locate' },
    { title: 'Feedback', icon: 'chatbox-ellipses' }
  ];

  public vehicleMenu = ['All', 'PK2', 'PK3', 'PK4', 'ARC', 'ITBT'];

  constructor(private activatedRoute: ActivatedRoute,
    private map: MapService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.map.buildMap();
  }

}
