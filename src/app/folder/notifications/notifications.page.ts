import { Component, OnInit } from '@angular/core';
import { setOptions } from '@mobiscroll/angular';
import { Router } from '@angular/router';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  public notificationData = [
    {
      createby: 'Josephine Ang',
      date: '03/07/2021 | 08:42 AM',
      title: 'Drainage systems',
      type: 'New Post',
      color: '#E50084',
      images: [
        { img: 'notificationimg1.png' },
        { img: 'notificationimg2.png' },
        { img: 'notificationimg3.png' }
      ]
    },
    {
      createby: 'System',
      date: '04/07/2021 | 03:16 PM',
      title: 'Alert - PK2 ECM Reading 65.6 mg/L',
      type: 'New Post',
      color: '#E50084',
      images: []
    },
    {
      createby: 'Peter Ching',
      date: '03/07/2021 | 08:42 AM',
      title: 'Datapoints values on map chart',
      type: 'Acknowledged',
      color: '#00B19C',
      images: [
        { img: 'notificationimg4.png' },
        { img: 'notificationimg5.png' },
        { img: 'notificationimg6.png' }
      ]
    },
    {
      createby: 'Josephine Ang',
      date: '03/07/2021 | 08:42 AM',
      title: 'Shortages of soil',
      type: 'New Post',
      color: '#E50084',
      images: [
        { img: 'notificationimg7.png' },
        { img: 'notificationimg8.png' },
        { img: 'notificationimg9.png' }
      ]
    },
    {
      createby: 'Mark Lai',
      date: '03/07/2021 | 08:42 AM',
      title: 'Water leakage',
      type: 'On Going',
      color: '#301FFF',
      images: [
        { img: 'notificationimg10.png' }
      ]
    },
    {
      createby: 'Naas',
      date: '03/07/2021 | 08:42 AM',
      title: 'Operation Pipes Engine failure',
      type: 'Acknowledged',
      color: '#00B19C',
      images: []
    }
  ];

  public clickedDateTime = false;
  public imageLink = '';
  public notificationIndex: number;
  public clickedSearch = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.notificationIndex = 0;
  }

  onClickDateTime() {
    this.clickedDateTime = !this.clickedDateTime;
  }

  onClickFeedback() {

  }

  onClickSearch() {
    this.clickedSearch = !this.clickedSearch;
  }

  onClickTitle() {
    this.router.navigate(['/folder/notifications-details']);
  }

  onClickImage(index: number, image: string) {
    this.notificationIndex = index;
    this.imageLink = image;
  }

  onClickClose() {
    this.imageLink = '';
  }
}
