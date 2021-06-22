import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/folder/profile', icon: 'person' },
    { title: 'Notifications', url: '/folder/notifications', icon: 'notifications' },
    { title: 'Map Style', url: '/folder/mapstyle', icon: 'cube' },
    { title: 'Bookmark', url: '/folder/bookmark', icon: 'bookmarks' },
    { title: 'Feedback', url: '/folder/feedback', icon: 'chatbox-ellipses' },
    { title: 'About', url: '/folder/about', icon: 'information-circle' },
    { title: 'Help Support', url: '/folder/help', icon: 'help-circle' },
    { title: 'Sign Out', url: '/login', icon: 'log-out' }
  ];
  constructor() {}
}
