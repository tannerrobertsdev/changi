import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  phoneNumber = '';
  password = '';
  showPassword = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
