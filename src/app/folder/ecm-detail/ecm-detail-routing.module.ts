import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcmDetailPage } from './ecm-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EcmDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcmDetailPageRoutingModule {}
