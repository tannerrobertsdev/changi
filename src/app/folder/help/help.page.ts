import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  public helpList = ['How Can We Help?', 'Getting Started', 'Technical Support', 'Contact Us'];
  public showList = [true, false, false, false];
  public title = '';

  constructor() { }

  ngOnInit() {
    this.title = this.helpList[0];
  }

  onClickList(index: number) {
    this.title = this.helpList[index];
    for (let i = 0; i < this.showList.length; i++) {
      this.showList[i] = false;
    }
    this.showList[index] = true;
  }
}
