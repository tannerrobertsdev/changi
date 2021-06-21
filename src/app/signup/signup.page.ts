import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

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
