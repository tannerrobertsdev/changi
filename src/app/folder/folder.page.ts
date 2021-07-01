import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  public clickedVehicleIndex: number;
  public clickedBottomIndex: number;
  public clickedViewByList = false;
  public title: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.clickedVehicleIndex = 0;
    this.clickedBottomIndex = 0;
    this.title = this.bottomMenu[0].title;
  }

  onClickVehicle(index: number) {
    this.clickedVehicleIndex = index;
  }

  onClickBottomMenu(index: number) {
    this.clickedBottomIndex = index;
    this.clickedVehicleIndex = 0;
    this.clickedViewByList = false;

    this.title = this.bottomMenu[index + 1].title;
    if (index === 0) {
      this.title = 'Map';
    }
  }
}
