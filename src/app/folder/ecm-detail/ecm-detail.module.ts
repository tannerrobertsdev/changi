import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcmDetailPageRoutingModule } from './ecm-detail-routing.module';

import { EcmDetailPage } from './ecm-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcmDetailPageRoutingModule
  ],
  declarations: [EcmDetailPage]
})
export class EcmDetailPageModule {}
