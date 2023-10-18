import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaviajePage } from './creaviaje.page';

const routes: Routes = [
  {
    path: '',
    component: CreaviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaviajePageRoutingModule {}
