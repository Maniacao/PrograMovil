import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaviajePageRoutingModule } from './creaviaje-routing.module';
import { Router } from '@angular/router';

import { CreaviajePage } from './creaviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaviajePageRoutingModule
  ],
  declarations: [CreaviajePage]
})
export class CreaviajePageModule {}
