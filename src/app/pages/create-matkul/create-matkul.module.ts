import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMatkulPageRoutingModule } from './create-matkul-routing.module';

import { CreateMatkulPage } from './create-matkul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateMatkulPageRoutingModule
  ],
  declarations: [CreateMatkulPage]
})
export class CreateMatkulPageModule {}
