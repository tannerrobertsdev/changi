import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ecm-detail',
  templateUrl: './ecm-detail.page.html',
  styleUrls: ['./ecm-detail.page.scss'],
})
export class EcmDetailPage implements OnInit {

  public detailData = {
    title: 'PK2 Camera 1',
    date: '2021/07/17 10:00:56 AM',
    color: '#f00',
    unit: '65.5 mg/L',
    img: 'ecmpk2cam1.png',
    address: 'Hua Tiong Contractor Pte Ltd\n' +
    'YL1019112005\n' +
    'Hual Road East\n' +
    '13236 V'
  };

  constructor(
    public router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onClickClose() {
    this.navCtrl.navigateBack('/folder');
  }
}
