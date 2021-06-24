import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {

  public tvList = [
    {
      title: 'CCTV',
      data: [{
        cam: 'PK2 Camera 1',
        date: '04/06/2021 10:00 AM',
        img: 'cctvimg1.png'
      },
      {
        cam: 'PK4 Camera 2',
        date: '04/06/2021 10:00 AM',
        img: 'cctvimg2.png'
      }]
    },
    {
      title: 'ECM',
      data: [{
        cam: 'PK2 Camera 1',
        date: '2021/07/07 10:00:56 AM',
        img: 'ecmimg1.png'
      }]}
  ];

  public showList = [false, false];

  constructor() { }

  ngOnInit() {
  }

  onClickList(index: number) {
    this.showList[index] = !this.showList[index];
  }
}
