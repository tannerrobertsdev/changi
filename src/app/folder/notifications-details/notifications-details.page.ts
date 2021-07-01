import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-details',
  templateUrl: './notifications-details.page.html',
  styleUrls: ['./notifications-details.page.scss'],
})
export class NotificationsDetailsPage implements OnInit {

  public notificationData = [
    {
      createby: 'Josephine Ang',
      date: '03/07/2021 | 08:42 AM',
      title: 'Drainage systems',
      type: 'New Post',
      color: '#E50084',
      content: 'Hi Team,\n' +
      'The concrete common in the contemporary world.' +
      'This type of building construction comprises of concrete frames or concrete skeletons. ' +
      'Horizontal frames Concrete planes that are called slabs.\n\n' +
      'Contact: Jonny@gmail.com\n' +
      'Hp: +65 9586 8483\n\nRegards\nPeter Ching',
      images: [
        { img: 'notificationimg1.png' },
        { img: 'notificationimg2.png' },
        { img: 'notificationimg3.png' }
      ]
    }
  ];

  public commentsData = [
    {
      createby: 'John Tan',
      date: '28/7/2021 | 11:15 AM',
      content: 'Hi Josephine,\n' +
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco l568 780 ut aliquip ex ea commodo consequat.' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteu.\n\n' +
      'Regards\nJohn Tan',
    },
    {
      createby: 'David Lee',
      date: '3/7/2021 | 08:42 AM',
      content: 'Tiusmod tempor incididunt ut labore et Consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n\n' +
      'Regards\nDavid Lee'
    },
    {
      createby: 'Ravina Sabin',
      date: '3/7/2021 | 08:42 AM',
      content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco l568 780 ut aliquip ex ea commodo consequat.' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteu.\n\n' +
      'Regards\nRavina Sabin',
    },
    {
      createby: 'Zhen Xing',
      date: '3/7/2021 | 08:42 AM',
      content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco l568 780 ut aliquip ex ea commodo consequat.' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteu.\n\n' +
      'Regards\nZhen Xing',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickSearch() {

  }
}
