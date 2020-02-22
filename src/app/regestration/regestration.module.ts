import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegestrationPageRoutingModule } from './regestration-routing.module';

import { RegestrationPage } from './regestration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegestrationPageRoutingModule
  ],
  declarations: [RegestrationPage]
})
export class RegestrationPageModule {}
