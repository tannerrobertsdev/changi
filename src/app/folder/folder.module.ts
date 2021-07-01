import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { MapComponent } from './map/map.component';
import { CctvComponent } from './cctv/cctv.component';
import { EcmComponent } from './ecm/ecm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage,
    MapComponent,
    CctvComponent,
    EcmComponent
  ]
})
export class FolderPageModule {}
