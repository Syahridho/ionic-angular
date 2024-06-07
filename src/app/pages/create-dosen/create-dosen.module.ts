import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDosenPageRoutingModule } from './create-dosen-routing.module';

import { CreateDosenPage } from './create-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDosenPageRoutingModule
  ],
  declarations: [CreateDosenPage]
})
export class CreateDosenPageModule {}
