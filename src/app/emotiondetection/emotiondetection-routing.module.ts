import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmotiondetectionPage } from './emotiondetection.page';

const routes: Routes = [
  {
    path: '',
    component: EmotiondetectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmotiondetectionPageRoutingModule {}
