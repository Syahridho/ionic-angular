import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateKrsPageRoutingModule } from './create-krs-routing.module';

import { CreateKrsPage } from './create-krs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateKrsPageRoutingModule
  ],
  declarations: [CreateKrsPage]
})
export class CreateKrsPageModule {}
