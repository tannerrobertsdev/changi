import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/folder/profile', icon: 'profile.png' },
    { title: 'Notifications', url: '/folder/notifications', icon: 'notification.png' },
    { title: 'Map Style', url: '/folder/mapstyle', icon: 'mapstyle.png' },
    { title: 'Bookmark', url: '/folder/bookmark', icon: 'bookmark.png' },
    { title: 'Feedback', url: '/folder/feedback', icon: 'feedback.png' },
    { title: 'About', url: '/folder/about', icon: 'about.png' },
    { title: 'Help Support', url: '/folder/help', icon: 'help.png' },
    { title: 'Sign Out', url: '/login', icon: 'signout.png' }
  ];
  constructor() {}
}
