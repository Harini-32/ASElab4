import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmotiondetectionPageRoutingModule } from './emotiondetection-routing.module';

import { EmotiondetectionPage } from './emotiondetection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmotiondetectionPageRoutingModule
  ],
  declarations: [EmotiondetectionPage]
})
export class EmotiondetectionPageModule {}
