import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.scss'],
})
export class CctvComponent implements OnInit {

  @Input() clickIndex = 0;

  public cctvData = [
    {
      title: 'PK2 Camera 1',
      date: '04/06/2021 10:00 AM',
      img: 'pk2cam1.png'
    },
    {
      title: 'PK2 Camera 2',
      date: '04/06/2021 10:00 AM',
      img: 'pk2cam2.png'
    },
    {
      title: 'PK3 Camera 1',
      date: '04/06/2021 10:00 AM',
      img: 'pk3cam1.png'
    },
    {
      title: 'PK3 Camera 2',
      date: '04/06/2021 10:00 AM',
      img: 'pk3cam2.png'
    },
    {
      title: 'PK4 Camera 1',
      date: '04/06/2021 10:00 AM',
      img: 'pk4cam1.png'
    },
    {
      title: 'PK4 Camera 2',
      date: '04/06/2021 10:00 AM',
      img: 'pk4cam2.png'
    },
    {
      title: 'ARC Camera 1',
      date: '04/06/2021 10:00 AM',
      img: 'arccam1.png'
    },
    {
      title: 'ARC Camera 2',
      date: '04/06/2021 10:00 AM',
      img: 'arccam2.png'
    },
    {
      title: 'ITBT Camera 1',
      date: '04/06/2021 10:00 AM',
      img: 'itbtcam1.png'
    },
    {
      title: 'ITBT Camera 2',
      date: '04/06/2021 10:00 AM',
      img: 'itbtcam2.png'
    }
  ];

  public clickedBookmark = false;
  public clickedSelect = false;

  constructor() { }

  ngOnInit() {}

  onClickSelect() {
    this.clickedSelect = !this.clickedSelect;
  }
}
