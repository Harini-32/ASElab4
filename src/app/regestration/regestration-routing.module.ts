import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegestrationPage } from './regestration.page';

const routes: Routes = [
  {
    path: '',
    component: RegestrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegestrationPageRoutingModule {}
