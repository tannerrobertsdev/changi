import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapService } from './service/map.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,
    private map: MapService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.map.buildMap();
  }

}
