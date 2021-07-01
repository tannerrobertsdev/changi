import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecm',
  templateUrl: './ecm.component.html',
  styleUrls: ['./ecm.component.scss'],
})
export class EcmComponent implements OnInit {

  @Input() clickIndex = 0;

  public ecmData = [
    {
      title: 'PK2 Camera 1',
      date: '2021/07/17 10:00:56 AM',
      color: '#f00',
      unit: '65.5 mg/L',
      img: 'ecmpk2cam1.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'PK2 Camera 2',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmpk2cam2.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'PK3 Camera 1',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmpk3cam1.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'PK3 Camera 2',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmpk3cam2.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'PK4 Camera 1',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmpk4cam1.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'PK4 Camera 2',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmpk4cam2.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'ARC Camera 1',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmarccam1.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'ARC Camera 2',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmarccam2.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'ITBT Camera 1',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmitbtcam1.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    },
    {
      title: 'ITBT Camera 2',
      date: '2021/07/17 10:00:56 AM',
      color: '#fff',
      unit: '0.2 mg/L',
      img: 'ecmitbtcam2.png',
      address: 'Hua Tiong Contractor Pte Ltd\n' +
      'YL1019112005\n' +
      'Hual Road East\n' +
      '13236 V'
    }
  ];

  public clickedBookmark = false;
  public clickedSelect = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}

  onClickDetail() {
    this.router.navigate(['/folder/ecm-detail']);
  }
}
