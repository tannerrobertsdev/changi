import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapstylePageRoutingModule } from './mapstyle-routing.module';

import { MapstylePage } from './mapstyle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapstylePageRoutingModule
  ],
  declarations: [MapstylePage]
})
export class MapstylePageModule {}
