import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapstylePage } from './mapstyle.page';

const routes: Routes = [
  {
    path: '',
    component: MapstylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapstylePageRoutingModule {}
